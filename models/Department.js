import Sequelize from 'sequelize';
import { sequelize } from '../database/database';
import Company from './Company';

const Department = sequelize.define('department',{
    id: {
        type:Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name:{
        type: Sequelize.TEXT
    },
    company_id: {
        type: Sequelize.INTEGER
    }
});

Department.hasMany(Company, {foreignKey: 'company_id', sourceKey: 'id'});
Company.belongsTo(Department, {foreignKey: 'company_id', sourceKey: 'id'});

export default Department;