import { Labour } from "../models/labour.model.js";
import { Salesmanager } from "../models/salesmanager.model.js";
import wrapper from "../utils/trycatchwrapper.js";
import { error } from "../utils/errormiddleware.js";


const addlabour = wrapper(async(req, res)=>{

    const {id, role} = req.user;
    if(role != 'salesmanager'){
        throw new error("Only Salesmanager can do this action",401);
    }

    const salesmanager = await Salesmanager.findOne({_id:id}).select('location');
    if(!salesmanager){
        throw new error("Unauthorized access",401);
    }

    const{name} = req.body;

    const newlabour = new Labour({
        salesmanager:id,
        name,
        location:salesmanager.location
    })

    await newlabour.save();
    res.status(200).json({message:"newlabour created successfully",newlabour});

})

const SMdeletelabour = wrapper(async(req, res)=>{

    const {id,role} = req.user;
    if(role == 'HR'){
        throw new error("Only Admin and Salesmanager can do this action",401);
    }

    const {labour_id} = req.query;

    const user = await Labour.findOne({_id:labour_id});
    if(!user){
        throw new error("Labour not found",401);
    }

    const salesmanager = await Salesmanager.findOne({_id:id}).select('location');
    if(!salesmanager){
        throw new error("Unauthorized access",401);
    }

    if(salesmanager.location != user.location){
        throw new error("Only same area salesmanager can do this operation:",401);
    }

    await Labour.deleteOne({_id:labour_id});
    res.status(200)
    .json({message:"Labour deleted successfully"})
})

const SMgetlabour = wrapper(async(req, res)=>{

    const {id,role} = req.user;
    if(role == 'HR'){
        throw new error("Only Admin and Salesmanager can do this action",401);
    }

    const salesmanager = await Salesmanager.findOne({_id:id}).select('location');
    if(!salesmanager){
        throw new error("Unauthorized access",401);
    }

    //only get those labour woh comes under this salesmanager's area:
    const labours = await Labour.find({location:salesmanager.location});

    res.status(200).json({message:"Same area labours fetched successfully", labours})
    
})


const labourintime = wrapper(async(req, res)=>{

    const {id,role} = req.user;
    if(role == 'HR'){
        throw new error("Only Admin and Salesmanager can do this action",401);
    }

    const salesmanager = await Salesmanager.findOne({_id:id}).select('location');
    if(!salesmanager){
        throw new error("Unauthorized access",401);
    }

    const {labourid, intime} = req.body;

    const labour = await Labour.findOne({_id:labourid});
    if(!labour){
        throw new error("Invalid id labour not found",401);
    }
    if(salesmanager.location != labour.location){
        throw new error("Only same area salesmanager can do this operation:",401);
    }

    labour.intime = intime;
    await labour.save();

    res.status(200).json({message:"Labour intime has updated",labour});

})
const labourouttime = wrapper(async(req, res)=>{

    const {id,role} = req.user;
    if(role == 'HR'){
        throw new error("Only Admin and Salesmanager can do this action",401);
    }

    const salesmanager = await Salesmanager.findOne({_id:id}).select('location');
    if(!salesmanager){
        throw new error("Unauthorized access",401);
    }

    const {labourid, outtime} = req.body;

    const labour = await Labour.findOne({_id:labourid});
    if(!labour){
        throw new error("Invalid id labour not found",401);
    }
    if(salesmanager.location != labour.location){
        throw new error("Only same area salesmanager can do this operation:",401);
    }

    labour.outtime = outtime;
    await labour.save();

    res.status(200).json({message:"Labour outtime has updated",labour});

})


export {addlabour, SMdeletelabour, SMgetlabour, labourintime, labourouttime}