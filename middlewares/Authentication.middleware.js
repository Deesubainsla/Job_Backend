import { error } from "../utils/errormiddleware.js";
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config();

const isauthenticated = (req, res, next)=>{

    const token = req.cookies.user;
    if(!token){
        next(new error("Unauthorized user: Login compulsory",401));
    }

    const user = jwt.verify(token, process.env.JWT_SECRET);

    req.user = user;
    next();
}

export default isauthenticated