import React, { useEffect, useState } from "react";
import { MainLayout } from "../../layout/MainLayout";
import{useSearchParams} from 'react-router-dom'
import { emailVerificationAdminUser } from "../../helpers/axiosHelper";
import {Alert,Spinner} from "react-bootstrap";
 
export const EmailVerification = () => {
   let [searchParams] = useSearchParams();
   const[isLoading, setIsLoading] =useState(true);
   const [response,setResponse]=useState({});
   
 useEffect(()=>{
  const email = searchParams.get("e");
  const verificationCode = searchParams.get("c");
  submitVerificatioinCode({email, verificationCode});
 
 }
 ,[]);
  const submitVerificatioinCode =async(obj)=>{
    setIsLoading(true);
     const result =await  emailVerificationAdminUser(obj);
     setIsLoading(false);
     setResponse(result);

  }
   return (
     <MainLayout>
       <div className="verificatio mt-5 pt-5">
         <div className="message">
           <h1>EmailVerification</h1>
           {response?.message && (
             <Alert
               variant={response.status === "success" ? "success" : "danger"}
             >
               {""}
               {response?.message}
             </Alert>
           )}
           {isLoading && <Spinner variant="info" animation="border" />}
         </div>
       </div>
     </MainLayout>
   );
};
