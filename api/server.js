import "dotenv/config";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";



const app= express();
const PORT =process.env.PORT || 8000;

//USE MIIDLEWARES
app.use(cors());
app.use(helmet());//for saftey hacking secure
app.use(morgan("tiny"));//GIVES THE DEAILS OF LCAOTION, LOCALHOST WHO IS USING
app.use(express.json());

//CONNECT TO DB
import { mongoConnect } from "./src/config/dbConfig.js";
mongoConnect();

//APIS
import registerLoginRouter from "./src/routers/registerLogin.js"
app.use("/api/v1/register-login",registerLoginRouter);

    

app.get("/",(req,res)=>
{
    res.json(
        {
            message:"you reached ecommerce api",
        }
    );
        
    
});
app.use((error,req,res,next)=>
{
    console.log(error.message);
    const status =error.status || 404;
    res.status(status).json({
        status:"error",
        message:error.message,
    })
})

app.listen(PORT, (error)=>
{
    error && console.log(error);
    console.log(`server running at http://localhost:${PORT}`);

})
