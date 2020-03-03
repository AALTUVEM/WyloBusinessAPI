import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

const Company = sequelize.define('company',{
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name:{
        type: Sequelize.TEXT
    },
    address:{
        type: Sequelize.TEXT
    },
    address2:{
        type: Sequelize.TEXT
    },
    city:{
        type: Sequelize.TEXT
    },
    state:{
        type: Sequelize.TEXT
    },
    zip_code:{
        type: Sequelize.TEXT
    }
});


export default Company;