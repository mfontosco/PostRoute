import{
    CONTACT_ADMIN_REQUEST,
    CONTACT_ADMIN_SUCCESS,
    CONTACT_ADMIN_FAIL,
} from '../Constants/generalConstants'
import axios from 'axios'

const baseurl ='http://localhost:5000'
const contactuserActions =(email,name,subject,message)=> async(dispatch)=>{
try{
    dispatch({
        type:CONTACT_ADMIN_REQUEST
    })
    const config ={
        headers:{
            "content-type":"Application/json"
        }
    }
     const {data} = await axios.post(`${baseurl}/api/v1/general/contact`,{email,name,subject,message},config)


     dispatch({
       type:CONTACT_ADMIN_SUCCESS,
       payload:data.contact
     })
    }catch(err){
    console.log(err)
    let message = err.response && err.response.data.message ? err.response.data.message :err.message
    dispatch({
        type:CONTACT_ADMIN_FAIL,
        payload:message
    })
    }
}

export {contactuserActions}