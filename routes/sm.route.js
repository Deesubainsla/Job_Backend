import express from 'express'
import { addlabour, labourintime, labourouttime, SMdeletelabour, SMgetlabour } from '../controllers/salesmanager.controller.js';
import isauthenticated from '../middlewares/Authentication.middleware.js';

const route = express.Router();

route.use(isauthenticated);
route.post('/addlabour',addlabour);
route.get('/smgetlabour',SMgetlabour);
route.delete('/smdeletelabour',SMdeletelabour);
route.put('/labourintime',labourintime);
route.put('/labourouttime',labourouttime);


export default route;