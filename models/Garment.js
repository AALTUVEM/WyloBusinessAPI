import Sequelize from 'sequelize';
import { sequelize } from '../database/database';
import Order from './Order';
import CompanyGarment from './CompanyGarment';

const Garment = sequelize.define('garment',{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    order_id: {
        type: Sequelize.INTEGER
    },
    company_garment_id: {
        type: Sequelize.INTEGER
    }
});

Garment.hasMany(Order, {foreignKey: 'order_id', sourceKey:'id'});
Garment.hasMany(CompanyGarment, {foreignKey: 'company_garment_id', sourceKey:'id'});

Order.belongsTo(Garment, {foreignKey:'order_id', sourceKey:'id'});
CompanyGarment.belongsTo(Garment, {foreignKey:'company_id', sourceKey:'id'});

export default Garment;