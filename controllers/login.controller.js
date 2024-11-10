import { User } from "../models/user.model.js";
import { Salesmanager } from "../models/salesmanager.model.js";
import jwt from "jsonwebtoken";
import bcrypt from 'bcryptjs'
import wrapper from "../utils/trycatchwrapper.js";
import { error } from "../utils/errormiddleware.js";
import dotenv from 'dotenv'

dotenv.config();

const login = wrapper(
    async(req,res)=>{
        const {username, password, role} = req.body;

        let user;
        if(role == 'admin' || role == 'hr'){
            user = await User.findOne({username});
        }
        else if(role == 'salesmanager'){
            user = await Salesmanager.findOne({username});
        }
        else{
            throw new error("invalid role",401);
        }
        
        if(!user){
            throw new error("User doesn't exist",401);//go to catch block and then to error middleware:
        }
        const userinfo = {
            id:user._id,
            role
        }

        const isMatch = bcrypt.compare(password, user.password);
        if(!isMatch){
            throw new error("Invalid Password",401);
        }

        const token = jwt.sign({id:user._id, role},process.env.JWT_SECRET);

        res.status(200)
        .cookie("user", token, {
            maxAge: 2*24*60*60*1000,//2 days
            secure: true,
            httponly:true,
            sameSite: 'None'
        })
        .json({
            message:"User loggedin successfully",
            userinfo
        })
    }
)


const makeadmin = wrapper(async(req,res)=>{
    const {username, password, role} = req.body; 

    const admin = new User({
        username,
        password,
        role
    })

    await admin.save();

    res.status(200).json({message:"admin created successfully",admin});

})

const getprofile = wrapper(async(req, res)=>{
        const {id, role} = req.user;

        let user;
        if(role == 'admin' || role == 'hr'){
            user = await User.findOne({_id:id});
        }
        else if(role == 'salesmanager'){
            user = await Salesmanager.findOne({_id:id});
        }
        else{
            throw new error("invalid role",401);
        }
        
        if(!user){
            throw new error("User doesn't exist(invalid user)",401);//go to catch block and then to error middleware:
        } 

        const userinfo = {id,role};
        res.status(200).json({message:"Profile fetched successfully",userinfo});
})

const logout = wrapper(async(req,res)=>{
    res.clearCookie('user', { path: '/' });//every cookie has specific path by default it is '/' and you can set it with cookie options:
    res.status(200).json({message:"user logged out successfully"});
})

export {login, makeadmin, getprofile,logout};