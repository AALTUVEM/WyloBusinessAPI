import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

const LastOrder = sequelize.define('lastOrder',{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    order_number: {
        type: Sequelize.TEXT
    }
});


export default LastOrder;