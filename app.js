import express, { json } from 'express';
import morgan from 'morgan';

//importing routes
import userRoutes from './routes/user';
import userRolesRoutes from './routes/userRoles';
import orderRoutes from './routes/order';
import lastOrderRoutes from './routes/lastOrder';
import garmentRoutes from './routes/garment';
import companyGarmentRoutes from './routes/companyGarment';
import companyRoutes from './routes/company';
import departmentRoutes from './routes/department';
import { sequelize } from './database/database';

//Importing Models
import UserRoles from './models/UserRoles';
import User from './models/User';
import Order from './models/Order';
import LastOrder from './models/LastOrder';
import Garment from './models/Garment';
import Department from './models/Department';
import CompanyGarment from './models/CompanyGarment';
import Company from './models/Company';



/*
async function buildDb(){
   await sequelize.sync({force:true});
}
  buildDb();
*/

//init
const app = express();

//api URL
const api = '/api/v1/';

//Middlewares
app.use(morgan('dev'));
app.use(json());

//Routes
app.use(api + 'user', userRoutes);
app.use(api + 'userRoles', userRolesRoutes);
app.use(api + 'order', orderRoutes);
app.use(api + 'lastOrder', lastOrderRoutes);
app.use(api + 'garment', garmentRoutes);
app.use(api + 'company', companyRoutes);
app.use(api + 'companyGarment', companyGarmentRoutes);
app.use(api + 'department', departmentRoutes);



export default app;