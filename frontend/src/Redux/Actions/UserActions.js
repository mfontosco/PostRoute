import { LOGIN_USER_FAIL,
LOGIN_USER_REQUEST,
LOGIN_USER_SUCCESS,
CREATE_USER_SUCCESS,
CREATE_USER_FAIL, 
CREATE_USER_REQUEST} from "../Constants/UserConstants";
import axios from 'axios'

const baseurl ='http://localhost:5000'
const createuserActions =(email,password)=> async(dispatch)=>{
try{
    dispatch({
        type:CREATE_USER_REQUEST
    })
    const config ={
        headers:{
            "content-type":"Application/json"
        }
    }
     const {data} = await axios.post(`${baseurl}/api/v1/users/register`,{email,password},config)


     dispatch({
       type:CREATE_USER_SUCCESS,
       payload:data.user
     })
    }catch(err){
    console.log(err)
    dispatch({
        type:CREATE_USER_FAIL,
        payload:err.message
    })
    }
}


const loginuserActions =(email,password)=>async(dispatch)=>{

    try{
dispatch({
    type:LOGIN_USER_REQUEST
})
const config ={
    headers:{
        "content-type":"Application/json"
    }
}
const {data} = await axios.post(`${baseurl}/api/v1/users/login`,{email,password},config)
dispatch({
    type:LOGIN_USER_SUCCESS,
    payload:data.user
})
    }catch(err){
    console.log(err)
    dispatch({
        type:LOGIN_USER_FAIL,
        payload:err.message
    })
    }
}

export {
    loginuserActions,
    createuserActions
}


