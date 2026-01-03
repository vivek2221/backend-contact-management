import { MongoClient } from "mongodb";
import dotenv from "dotenv"
dotenv.config()
export const client =new MongoClient(process.env.MONGO_URL)
const Connect=async()=>{
   await client.connect()
const db=client.db('contactManagement')
return db 
}

process.on('SIGINT',async()=>{
    await client.close()
})
export default Connect