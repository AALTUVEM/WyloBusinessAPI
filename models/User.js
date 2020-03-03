import Sequelize from 'sequelize';
import { sequelize } from '../database/database';
import Company from './Company';
import UserRole from './UserRoles';
import Department from './Department';


const User = sequelize.define('user',{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    first_name:{
        type: Sequelize.TEXT,
        
    },
    last_name:{
        type: Sequelize.TEXT,
        
    },
    email:{
        type: Sequelize.STRING,
        
        unique: true
    },
    password:{
        type: Sequelize.TEXT,
        
    },
    username:{
        type: Sequelize.STRING,
    
        unique: true
    },
    company_id:{
        type: Sequelize.INTEGER
    },
    role_id:{
        type: Sequelize.INTEGER
    },
    department_id:{
        type: Sequelize.INTEGER
    }
    
}, {
    timestamps: false
});

User.hasMany(Company, {foreignKey: 'company_id', sourceKey:'id' });
User.hasMany(UserRole, { foreignKey: 'role_id', sourceKey:'id'});
User.hasMany(Department, { foreignKey: 'department_id', sourceKey:'id'});

Company.belongsTo(User, {foreignKey: 'company_id', sourceKey:'id'});
UserRole.belongsTo(User, {foreignKey: 'role_id', sourceKey:'id'});
Department.belongsTo(User, {foreignKey: 'department_id', sourceKey:'id'});

export default User;