import mongoose from 'mongoose'

const PostSchema =mongoose.Schema({
    title:{type:String,required:[true,"title is required"]},
    body:{type:String,required:[true,"body is required"]}
})


const Post =mongoose.model("Post",PostSchema)


export default Post;