import Jwt from "jsonwebtoken";
import User from "../model/UserModel.js";

const protect =async(req,res,next)=>{
let token;
if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
token =req.headers.authorization.split(" ")[1];
try{
const decoded = await Jwt.verify(token,process.env.JWTSECRET)
console.log(decoded.id)
const user = await User.findById(decoded.id).select("-password")
console.log(user)
req.user = user;
next()
}catch(err){
console.log(err)
if(!token){
    res.status(401).json({
       status:"failed",
       error:'invalid token,Not authorized'
    })   
   }
}

}
if(!token){
 res.status(401).json({
    status:"failed",
    error:'No token,Not authorized'
 })   
}
}

export {protect}

