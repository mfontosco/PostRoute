import JWT from 'jsonwebtoken'

//function for generating tokens
const generateToken = async(id)=>{
    return await JWT.sign({id},process.env.JWTSECRET,{expiresIn:"2hrs"})
}
export default generateToken