import { modelLogin } from '../setup/mongooseValidation.js'

export const Login=async(req,res)=>{
     const {name,email,passwd:password}=req.body
     const finded=await modelLogin.find({name,email,password})
     if(finded){
          res.cookie('sessionId',dataId.id,{
      httpOnly:'true',
  sameSite: 'none',
  secure: true, 
  maxAge: 1000 * 60 * 60 * 24,
     })
     return res.status(201).json({mess:'next',data:`${finded.id}`})
     }
     else{
     const dataId=await modelLogin.create({name,email,password})
     res.cookie('sessionId',dataId.id,{
      httpOnly:'true',
  sameSite: 'none',
  secure: true, 
  maxAge: 1000 * 60 * 60 * 24,
     })
     return res.status(201).json({mess:'next',data:`${dataId.id}`})
     }
}