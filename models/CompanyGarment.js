import Sequelize from 'sequelize';
import { sequelize } from '../database/database';
import Company from './Company';

const CompanyGarment = sequelize.define('companyGarment',{
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true       
    },
  
    name:{
        type: Sequelize.TEXT
    },
    picture_url:{
        type: Sequelize.TEXT
    },
    description:{
        type: Sequelize.TEXT
    }
}, {
    timestamps:false
});

Company.hasMany(CompanyGarment, {foreignKey: 'company_id', sourceKey:'id'});
CompanyGarment.belongsTo(Company, {foreignKey: 'company_id', sourceKey:'id'});

export default CompanyGarment;