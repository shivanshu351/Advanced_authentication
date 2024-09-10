import mongoose from 'mongoose'
import dotenv from "dotenv"

dotenv.config()

export const connectDB = async()=>{
    try
    {
        const connection = await mongoose.connect(process.env.MONGO_URI)
    }
    catch(error)
    {
        console.log("Error in connecting to database : ",error)
    }
}