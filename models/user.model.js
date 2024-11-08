import mongoose from "mongoose";

const userschema = new mongoose.Schema({
    username:{
        type:String,
        required: true,
        unique: true
    },
    password:{
        type:String,
        required: true,
    },
    role:{
        type:String,
        enum:['admin', 'HR'],
        required: true,
    },
},{timestamps: true})

export const User = mongoose.models.User || mongoose.model("User", userschema);
//if model is already present then don't need to make it again for good efficiency: