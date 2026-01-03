import { modelLogin } from '../setup/mongooseValidation.js'

export const Login=async(req,res)=>{
     const {name,email,passwd:password}=req.body
     const dataId=await modelLogin.create({name,email,password})
     res.cookie('sessionId',dataId.id,{
      httpOnly:'true',
  sameSite: 'none',
  secure: true, 
  maxAge: 1000 * 60 * 60 * 24,
     })
     res.status(201).json({mess:'next',data:`${dataId.id}`})
}