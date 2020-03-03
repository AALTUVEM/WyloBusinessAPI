import Sequelize from 'sequelize';
import { sequelize } from '../database/database';
import User from './User';
import Company from './Company';

const Order = sequelize.define('order',{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    order_number: {
        type: Sequelize.STRING,
        unique: true
    },
 
    status: {
        type: Sequelize.TEXT
    },
    payment_status: {
        type: Sequelize.TEXT
    },
    delivering_date:{
        type: Sequelize.DATE
    },
    room_number:{
        type: Sequelize.TEXT
    },
    tag_number:{
        type: Sequelize.TEXT
    },
    total_garments:{
        type: Sequelize.INTEGER
    },
    total_amount:{
        type: Sequelize.FLOAT
    },
    invoice: {
        type: Sequelize.TEXT
    },
    
});

Order.hasMany(User, {foreignKey: 'user_id', sourceKey:'id'});
Order.hasMany(Company, {foreignKey: 'company_id', sourceKey:'id'});

User.belongsTo(Order, {foreignKey: 'user_id', sourceKey: 'id'});
Company.belongsTo(Company, {foreignKey: 'company_id', sourceKey: 'id'});


export default Order;