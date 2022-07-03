import express, { Router } from "express";
import { comparePassword, hashPassword } from "../helpers/bcryptHelper.js";
import { adminRegistrationValidation, loginValidation } from "../miidlewares/validationMiddleware.js";
import { CreateNewAdmin, getOneAdmin, updateAdmin } from "../models/adminUser/AdminUserModel.js";
import { v4 as uuidv4 } from "uuid";
import { sendAdminUserVerificationMail } from "../helpers/emailHelper.js";

const route =express.Router();

route.post("/",adminRegistrationValidation,async (req,res,next)=>
{
   try{
     //1.encrypt the password
     req.body.password = hashPassword(req.body.password);
     const verificationCode = uuidv4(); 
     req.body.verificationCode=verificationCode;

     // console.log("hashing");
     // console.log(hashedPass);

     //2.call model to run save query

     const result = await CreateNewAdmin(req.body);
     //3.unique url endpoint and sent that to customer.

   
    // const codeInfo=updateVerificationCodeByUserId(result._id,)
     if(result?._id)
     {
    
      sendAdminUserVerificationMail(result)
     return res.json({
        status: "success",
        message:
          "We have send you an email, please check email and follow the instruction to activate",
      });
      
     }

     res.json({
       status :"success",
       message:"unable to create user"
     });
   }
   catch(error)
   {
    if(error.message.includes("E11000 duplicate key error collection"))
    {
      error.status =200;
      error.message="There is already registered email please use another email";
    } 
    
    
    next(error);
   }
   
 
});
route.patch("/", async (req,res,next) => {
  try {

  

    const {email,verificationCode}=req.body;
    const filter={email,verificationCode};
    const obj={
      status:"active",
      verificationCode:"",
    };
    const result= await updateAdmin(filter,obj);
    if(result?._id){
      return res.json({
        status:"success",
        message:" your account ahas been activated, you may sign now",


      })
    }
    res.json({
      status:"error",
      message:"invalid activation",
    })
 
  }
  catch(error)
  {
      error && console.log(error);
  }
})

//admin register login
route.post("/login",loginValidation,async(req,res,next)=>{
  try{
    const{email,password} =req.body;

  const result = await getOneAdmin({email});
  if(result?._id)
 {
  const isMatched = comparePassword(password,result.password);
  result.password = undefined;
  if(isMatched)
{
return  result.status === "active" ?res.json({
  status:"success",
  message:"login success",
  result,
  
})
:res.json({
  status:"error",message:
  "Your account is inactive, please chexk your email and follow the instruction to verify the accoutn",
})
}
  //check if the password from databse and that clietn mathc

  }
  res.json({
    status:"error",
    message:"Invalid login credintials"
  })
  
  }
  catch(error)
  {
    next(error);

  }
})
export  default route;
