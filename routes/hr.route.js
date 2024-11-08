import express from 'express'
import { getlabours, getsalesmanagers, labourattendance, laboursalary, salesmanagerattendance, salesmanagersalary } from '../controllers/HR.controller.js';


const route = express.Router();

route.get('/salesmanagerattendance',salesmanagerattendance);
route.get('/salesmanagersalary',salesmanagersalary);
route.get('/labourattendance',labourattendance);
route.get('/laboutsalary',laboursalary);
route.get('/getsalesmanager', getsalesmanagers);
route.get('/getlabours',getlabours)

export default route;