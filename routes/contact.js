
import { modelData, modelFavorite } from "../setup/mongooseValidation.js"

export const setContact=async(req,res)=>{
   const {sessionId}=req.cookies
   const {Name:name,Email:email,Contact_Number:num,Info:info}=req.body.values
   const finded=await modelData.findOne({num,userSessionId:sessionId})
   if(finded){
    return res.status(200).json({mess:'contact Exists'})
   }
   await modelData.insertOne({name,email,num,info,userSessionId:sessionId})
   res.status(201).json({mess:'done'})
}
export const getContact=async(req,res)=>{
    const {sessionId}=req.cookies
    const data =await modelData.find({userSessionId:sessionId},{_id:0,userSessionId:0,__v:0}).lean()
    res.status(200).json({data})
}
export const delContact=async(req,res)=>{
      const {name,email,num}=req.body
      const {sessionId}=req.cookies
      const delSuccess=await modelData.deleteMany({name,email,num,userSessionId:sessionId})
      await modelFavorite.deleteMany({name,email,num,userSessionId:sessionId})

      res.status(200).json({mess:'success'})
}
export const favorite=async(req,res)=>{
    const {sessionId}=req.cookies
   const {name,email,num,info}=req.body
   const finded=await modelFavorite.findOne({num,userSessionId:sessionId})
   if(finded){
    return res.status(200).json({mess:'favorite already exists'})
   }
   await modelFavorite.insertOne({name,email,num,info,userSessionId:sessionId})
    res.status(201).json({mess:'success'})
}
export const getFavorite=async(req,res)=>{
    const {sessionId}=req.cookies
    const data=await modelFavorite.find({userSessionId:sessionId},{__v:0,_id:0,userSessionId:0}).lean()
    res.status(200).json(data)
}