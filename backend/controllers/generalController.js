import nodemailer from 'nodemailer'
import smtp from 'nodemailer-smtp-transport'


const contactAdmin = async(req,res)=> {

    try{
        const {email, subject,name,message} = req.body
    const auth = {
        host: 'in.mailjet.com', 
        port: 2525,
        auth: {
          user: process.env.MAILJET_API_KEY,
          pass: process.env.MAILJET_API_SECRET
        },
      };

      const transporter = await nodemailer.createTransport(smtp(auth))
      transporter.verify(function (error, success) {
        if (error) {
          console.log(error);
        } else {
          console.log("Server is ready to take our messages");
        }
      });
      const options ={
        to:'mstrings11@gmail.com',
        from:'mstrings11@gmail.com',
        subject:subject,
        text:`message from: ${name} \n email: ${email} \n subject:${subject} \n message:${message}`,
        
      }

      //send mail
      const sendMail = await transporter.sendMail(options)

      if(!sendMail){
        throw new Error('Something went wrong')
      }

     res.status(200).json({
        status:'success',
        contact:'Thank you for mailing us. Your mail will be treated approprietly'
     })
    }catch(err){
      console.log(err.message)
      res.status(400).json({
        status:'error',
        message:err.message
      })
    }
}


export {
    contactAdmin
}