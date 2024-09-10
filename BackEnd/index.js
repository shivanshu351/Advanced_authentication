import express from 'express'
import { connectDB } from './db/connectDB.js';
import dotenv from "dotenv"
import authRoutes from './routes/auth.route.js'

dotenv.config()//  accessing the process.env file

const app = express()
app.use(express.json())

app.use('/api/auth',authRoutes)


app.listen(4000,()=>{
    connectDB();
})
