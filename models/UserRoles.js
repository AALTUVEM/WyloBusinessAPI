import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

const UserRole = sequelize.define('userRole',{
    id: {
        type: Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    role:{
        type: Sequelize.TEXT
    },
    description:{
        type: Sequelize.TEXT
    }
}, {
    timestamps: false
});

export default UserRole;