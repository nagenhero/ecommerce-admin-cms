import Joi from "joi";
export  const adminRegistrationValidation = (req, res, next) => {
  //console.log(req.body);
  const schema = Joi.object({
    fName: Joi.string().min(3).max(50).required(),
    lName: Joi.string().min(3).max(50).required(),
    Dob: Joi.date(),
    phone: Joi.string().min(3).max(50).required(),
    email: Joi.string().min(3).max(50).required(),
    password: Joi.string().min(3).max(50).required(),
    address: Joi.string().min(3).max(50),
  });
  const {error} =schema.validate(req.body);
if(error)
{
    res.json({
        status:"error",
        message:error.message
    })
}
  
 next();
};

export const loginValidation = (req, res, next) => {
  //console.log(req.body);
  const schema = Joi.object({
    
    email: Joi.string().min(3).max(50).required(),
    password: Joi.string().min(3).max(50).required(),

  });
  const { error } = schema.validate(req.body);
  if (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }

  next();
};