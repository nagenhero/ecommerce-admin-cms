import axios from "axios";
const rootUrl ="http://localhost:8000/api/v1"
const loginRegisterEp =  rootUrl+ "/register-login";
const loginEp = loginRegisterEp+"/login";
const apiProcessor= async(method,url, data)=>
{
    try{
        const response = await axios({
            method,
            url,
            data,
        });
        return response.data;

    }
    catch(error)
    {
        return{
            status:"error",
            message:error.message,
        }

    }
}
export const postAdminUser = obj=>
{
   return  apiProcessor("post", loginRegisterEp,obj);
}
export const emailVerificationAdminUser = (obj) => {
  return apiProcessor("patch", loginRegisterEp, obj);
};

export const loginAdminUser = (obj) => {
  return apiProcessor("post", loginEp, obj);
};