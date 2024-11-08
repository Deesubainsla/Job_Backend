import express from 'express'
import dotenv from 'dotenv'
import dbconnection from './utils/db.connection.js';//.js(extention) is compulsory unlike React
import { errormiddleware } from './utils/errormiddleware.js';
import cookieParser from 'cookie-parser';
import isauthenticated from './middlewares/Authentication.middleware.js';
import login from './controllers/login.controller.js';

import adminroutes from './routes/admin.route.js';
import smroutes from './routes/sm.route.js';
import hrroutes from './routes/hr.route.js';



dotenv.config();
dbconnection();
const app = express();
const port = process.env.PORT || 4000;//if env is not available(for safe side:)



//middlewares

app.use(express.json());//used with application/json content-type:
app.use(express.urlencoded({extended: false})); //used with multipart/form-data
app.use(cookieParser()); //used to read cookie present in request:
app.use(cors({
    origin: function (origin, callback) {
      // Allow all origins
      callback(null, true);  // 'true' allows all origins
    },
    credentials: true, // Allow cookies to be sent
  }))
// app.use(cors({
//     origin:[],//pass the frontend url which you would allow
//     credentials: true // Allows the server to accept and respond with credentials (like cookies)     //can't use it without specifying origins: means can't use with '*' because of protection:
// }))


//middlewares


//routes



app.get('/',(req,res)=>{
    res.send("Hello, we are at Server:");
})
app.post('/api/v1/login',login);

app.use(isauthenticated);//after this all rotes have access of req.user

app.use('/api/v1/admin',adminroutes);
app.use('/api/v1/sm',smroutes);
app.use('/api/v1/hr',hrroutes);
//routes


//using error middleware
app.use(errormiddleware);
//using error middleware


app.listen(port,()=>{
    console.log(`app is listning on port:${port}`)
})