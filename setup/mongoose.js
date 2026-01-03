import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()
export let isConnected=false
const connectDb=async()=>{
    try{
        await mongoose.connect(process.env.MONGOOSE_URL)
        console.log('mongoose connected')
        isConnected=true
    }
    catch(err){
        console.log(err.message)
        process.exit(1)
    }
}
process.on('SIGINT',async()=>{
    await mongoose.disconnect()
})
export default connectDb