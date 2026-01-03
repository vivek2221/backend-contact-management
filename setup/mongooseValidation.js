import mongoose from 'mongoose'
import connectDb from './mongoose.js'
await connectDb()
const loginSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:'string',
        required:true
    }
})
const contactDataSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    num:{
        type:String,
        required:true
    },
    info:{
        type:String,
        required:true
    },
    userSessionId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    }
})

export const modelLogin=mongoose.model('currusers',loginSchema)
export const modelData=mongoose.model('allcontacts',contactDataSchema)
export const modelFavorite=mongoose.model('favorites',contactDataSchema)