import express from 'express'
import cors from 'cors'
import post from './data.js'
import morgan from 'morgan'
import PostRoute from './routes/PostRoute.js'
import UserRoute from './routes/userRoute.js'
import { connectDB } from './Config/db.js'
import GeneralRoute from './routes/generalRoute.js'
import colors from 'colors'
import dotenv from 'dotenv'
dotenv.config()

const app= express()
app.use(cors())
app.use(express.json({limit:"50mb"}))
app.use(morgan("dev"))
app.use('/api/v1/posts',PostRoute)
app.use('/api/v1/users',UserRoute)
app.use('/api/v1/general', GeneralRoute)

app.get("/",(req,res)=>{
    res.send('<h2>Home Page <a href="/api/v1/posts">Get Posts</a></h2>')
})




app.all('*', async(req,res)=>{
    try{

        res.status(404)
         throw new Error('Sorry, no endpoint found')
    }catch(err){
       res.status(404).json({
        status:'error',
        message:err.message
       })
    }
})
const start = async()=>{
   
    try{
        const conn = await connectDB()
app.listen(PORT,(err)=>{
            if(err){
                throw err
            }
            console.log(`server is listening to port ${PORT}`.bgYellow)
        })
      console.log(`Database is connected to ${conn.connection.host}`.bgGreen.underline)  
    }catch(err){

    }
}
const PORT =process.env.PORT || 5000

start(PORT)



