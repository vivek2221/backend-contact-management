import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import {Login} from './routes/login.js'
import dotenv from "dotenv"
import { getContact, setContact,delContact, favorite, getFavorite } from './routes/contact.js'
dotenv.config()
const server=express()
server.use(cors({
    origin:process.env.URL_FRONTEND,
    credentials:true

}))
server.use(cookieParser())
server.use(express.json())
server.post('/login',Login)
server.post('/addContact',setContact)
server.get('/getContact',getContact)
server.delete('/deleteContact',delContact)
server.post('/favorite',favorite)
server.get('/getFavorite',getFavorite)

// server.listen(process.env.PORT,process.env.HOST,()=>{
//     console.log('server started on port 2000')
// })
module.exports=server