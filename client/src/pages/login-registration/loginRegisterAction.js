import { loginAdminUser } from "../../helpers/axiosHelper";
import {setUser} from "./loginRegisterSlice";
import {toast} from "react-toastify";
export const loginAction =obj => async (dispatch)=>
{
    //show toastify spinnner
    //call axios helper
    const resultPromise =  loginAdminUser(obj);
toast.promise(resultPromise,{
    pending:"please wait....."
})
const {status, message,result}=await resultPromise;
toast[status](message);
   

    //show toastify messes, success or error
    //if response comes success then call setuser and pass the user data
    status==="success" && dispatch(setUser(result));
}