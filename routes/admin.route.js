import express from 'express'
import { deletelabour, deletesalesmanager, getlabours, getlocation, getsalesmanagers, makesalesmanager } from '../controllers/admin.controller.js';
import isauthenticated from '../middlewares/Authentication.middleware.js';

const route = express.Router();

route.use(isauthenticated);
route.get('/getlocation', getlocation);
route.get('/getsalesmanagers',getsalesmanagers);
route.get('/getlabours',getlabours);
route.post('/makesalesmanager', makesalesmanager);
route.delete('/deletesalesmanager',deletesalesmanager);
route.delete('/deletelabour',deletelabour)


export default route;