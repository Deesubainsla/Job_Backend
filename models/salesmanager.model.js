import mongoose from "mongoose";

const salesmanagerschema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    location:{
        type:String,
        required: true,
        enum:["Noida","Delhi","Greater Noida"]
    }
},{timestamps: true})

export const Salesmanager = mongoose.models.Salesmanagers || mongoose.model("Salesmanager",salesmanagerschema);