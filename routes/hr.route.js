import express from 'express'
import { getlabours, getsalesmanagers, labourattendance, laboursalary, makelabourattendance, makesmattendance, salesmanagerattendance, salesmanagersalary } from '../controllers/HR.controller.js';


const route = express.Router();

route.get('/salesmanagerattendance',salesmanagerattendance);
route.post('/salesmanagersalary',salesmanagersalary);
route.get('/labourattendance',labourattendance);
route.post('/makelabourattendance', makelabourattendance);
route.post('/makesmattendance', makesmattendance);
route.post('/laboursalary',laboursalary);
route.get('/getsalesmanager', getsalesmanagers);
route.get('/getlabours',getlabours);

export default route;