import "dotenv/config";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";


const app= express();
const PORT =process.env.PORT || 8000;
//use miidelwares
app.use(helmet());//for saftey hacking secure
app.use(morgan());
app.use(express.json());
app.get("/",(req,res)=>
{
    res.json(
        {
            message:"you reached ecommerce api",
        }
    );
        
    
});
app.use((error,req,res)=>
{
    console.log(error);
    res.status =error.status || 404;
    res.json({
        status:"error",
        message:message.error,
    })
})

app.listen(PORT, (error)=>
{
    error && console.log(error);
    console.log(`server running at http://localhost:${PORT}`);

})
