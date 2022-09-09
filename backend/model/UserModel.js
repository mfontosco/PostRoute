import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'


const userSchema = mongoose.Schema({
    email:{type:String,required:[true,"email is required"],unique:true},
    password:{type:String,required:[true,"password is required"]}
})





//comparing passwords
userSchema.methods.passwordMatched = async function(passwordToBeVerified){
    return await bcrypt.compare(passwordToBeVerified,this.password)
} 
//saving and hashing passwords
userSchema.pre("save",async function(next){
    if(!this.isModified('password')){
        next()
    }
    const salt = await bcrypt.genSalt(10);
     const hashed = await bcrypt.hash(this.password,salt)
     console.log("hashed",hashed)
     console.log("this",this)
     this.password = hashed
})

const User = mongoose.model('User',userSchema)

export default User;