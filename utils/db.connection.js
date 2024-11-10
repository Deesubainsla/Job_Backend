import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config();

const dbconnection = async()=>{
    try {
        await mongoose.connect(process.env.DATABASE_URI);
        console.log("Database has connected successfully:");
    } catch (error) {
        console.log("Error found in DBconnection:",error.message);
    }
}

export default dbconnection;