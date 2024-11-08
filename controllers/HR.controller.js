import { Salesmanager } from "../models/salesmanager.model.js";
import { Labour } from "../models/labour.model.js";
import { Attendance } from "../models/attendance.model.js";
import { Salary } from "../models/salary.model.js";
import wrapper from "../utils/trycatchwrapper.js";
import { error } from "../utils/errormiddleware.js";


const salesmanagerattendance = wrapper(async(req, res)=>{
    const {role, id} = req.user;
    if(role != 'HR'){
        throw new error("Only HR can do this action",401);
    }

    const {userid, year, month} = req.query;
    if(!userid || !year || !month){
        throw new error("Please provide complete details:")
    }
    const currentyear = new Date().getFullYear();//give current year
    if(year > currentyear){
        throw new error("Give a valid year",401);
    }
    //year validation also: todo
    if(month<1 || month>12){
        throw new error("Please provide a valid month",401);
    }
    const user = await Salesmanager.findOne({_id:userid});
    if(!user){
        throw new error("This is not a valid salesmanager",401);
    }

    const firstdateofmonth = new Date(year, month-1, 1);//javascript take month as 0-indexed:
    const lastdateofmonth = new Date(year, month, 0);//0th date of next month is last date of previous month:

    const attendances = await Attendance.find({
        userid,
        date:{$gte:firstdateofmonth, $lte:lastdateofmonth}
    }).sort({date:1}).select('date status');

    let totalday = 0;
    const attendance = attendances.map(({date, status})=>{
            switch (status){
                case 'present':
                    totalday += 1;
                    break;
                case 'halfday':
                    totalday += 0.5;
                    break;
                default:
                    break;
            }

            return {
                date,
                status
            }
    })

    res.status(200).json({message:"Salesmanager Attendance fetched successfully",attendance,totalday});

})


const salesmanagersalary = wrapper(async(req, res)=>{

    const {role, id} = req.user;
    if(role != 'HR'){
        throw new error("Only HR can do this action",401);
    }

    const {salaryperday, userid, year, month} = req.query;
    if(!userid || !salaryperday || !year || !month){
        throw new error("Please provide complete details:")
    }
    const currentyear = new Date().getFullYear();//give current year
    if(year > currentyear){
        throw new error("Give a valid year",401);
    }
    if(salaryperday<1){
        throw new error("salary should be positive only",401);
    }
    if(month<1 || month>12){
        throw new error("Please provide a valid month",401);
    }
    const user = await Salesmanager.findOne({_id:userid});
    if(!user){
        throw new error("This is not a valid salesmanager",401);
    }

    const firstdateofmonth = new Date(year, month-1, 1);//javascript take month as 0-indexed:
    const lastdateofmonth = new Date(year, month, 0);//0th date of next month is last date of previous month:

    const attendances = await Attendance.find({
        userid,
        date:{$gte:firstdateofmonth, $lte:lastdateofmonth}
    }).sort({date:1}).select('status');

    let totalday = 0;
    attendances.forEach(({status})=>{
            switch (status){
                case 'present':
                    totalday += 1;
                    break;
                case 'halfday':
                    totalday += 0.5;
                    break;
                default:
                    break;
            }
    })

    const totalsalary = (totalday * salaryperday);
    res.status(200).json({message:"Salesmanager salary fetched successfully",totalsalary});

})


const labourattendance = wrapper(async(req, res)=>{

    const {role, id} = req.user;
    if(role != 'HR'){
        throw new error("Only HR can do this action",401);
    }

    const {userid, year, month} = req.query;
    if(!userid || !year || !month){
        throw new error("Please provide complete details:")
    }
    const currentyear = new Date().getFullYear();//give current year
    if(year > currentyear){
        throw new error("Give a valid year",401);
    }
    //year validation also: todo
    if(month<1 || month>12){
        throw new error("Please provide a valid month",401);
    }
    const user = await Labour.findOne({_id:userid});
    if(!user){
        throw new error("This is not a valid Labour",401);
    }

    const firstdateofmonth = new Date(year, month-1, 1);//javascript take month as 0-indexed:
    const lastdateofmonth = new Date(year, month, 0);//0th date of next month is last date of previous month:

    const attendances = await Attendance.find({
        userid,
        date:{$gte:firstdateofmonth, $lte:lastdateofmonth}
    }).sort({date:1}).select('date status');

    let totalday = 0;
    const attendance = attendances.map(({date, status})=>{
            switch (status){
                case 'present':
                    totalday += 1;
                    break;
                case 'halfday':
                    totalday += 0.5;
                    break;
                default:
                    break;
            }

            return {
                date,
                status
            }
    })

    res.status(200).json({message:"Labour Attendance fetched successfully",attendance,totalday});

})
const laboursalary = wrapper(async(req, res)=>{

    const {role, id} = req.user;
    if(role != 'HR'){
        throw new error("Only HR can do this action",401);
    }

    const {salaryperday, userid, year, month} = req.query;
    if(!userid || !salaryperday || !year || !month){
        throw new error("Please provide complete details:")
    }
    const currentyear = new Date().getFullYear();//give current year
    if(year > currentyear){
        throw new error("Give a valid year",401);
    }
    if(salaryperday<1){
        throw new error("salary should be positive only",401);
    }
    if(month<1 || month>12){
        throw new error("Please provide a valid month",401);
    }
    const user = await Labour.findOne({_id:userid});
    if(!user){
        throw new error("This is not a valid Labour",401);
    }

    const firstdateofmonth = new Date(year, month-1, 1);//javascript take month as 0-indexed:
    const lastdateofmonth = new Date(year, month, 0);//0th date of next month is last date of previous month:

    const attendances = await Attendance.find({
        userid,
        date:{$gte:firstdateofmonth, $lte:lastdateofmonth}
    }).sort({date:1}).select('status');

    let totalday = 0;
    attendances.forEach(({status})=>{
            switch (status){
                case 'present':
                    totalday += 1;
                    break;
                case 'halfday':
                    totalday += 0.5;
                    break;
                default:
                    break;
            }
    })

    const totalsalary = (totalday * salaryperday);
    res.status(200).json({message:"Labour salary fetched successfully",totalsalary});

})


const getlabours = wrapper(async(req, res)=>{

    const {role, id} = req.user;
    if(role != 'HR'){
        throw new error("Only HR can do this action",401);
    }

    const labours = await Labour.find().populate('salesmanager','username');

    res.status(200).json({message:"All labour fetched successfully",labours});

})
const getsalesmanagers = wrapper(async(req, res)=>{

    const {role, id} = req.user;
    if(role != 'HR'){
        throw new error("Only HR can do this action",401);
    }

    const salesmanager = await Salesmanager.find();

    res.status(200).json({message:"All Salesmanger fetched successfully",salesmanager});

})

export {salesmanagerattendance, salesmanagersalary, labourattendance, laboursalary, getlabours, getsalesmanagers}
