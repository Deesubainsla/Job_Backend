import mongoose from "mongoose";

const labourschema = new mongoose.Schema({
    salesmanager:{
        type: mongoose.Schema.Types.ObjectId, //more common way of use because  mongoose.Types.ObjectId it commonly used for making new objectid like const id = mongoose.Types.ObjectId();
        ref:"Salesmanager"
    },
    name:{
        type: String,
        required: true
    },
    location:{
        type:String,
        required: true,
        enum:["Noida","Delhi","Greater Noida"]
    },
    intime:{
        type:Date,
    },
    outtime:{
        type:Date,
    }

},{timestamps: true})

export const Labour = mongoose.models.Labour || mongoose.model("Labour", labourschema);