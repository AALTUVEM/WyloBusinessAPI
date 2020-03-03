import Sequelize from 'sequelize';
const DBURL = 'mysql://root@localhost:3306/wylodev';
export const sequelize = new Sequelize(DBURL);
/*
export const sequelize = new Sequelize(
    'wylodev', 
    'wylodev',
    '123',
    {
    host: 'localhost',
    dialect: 'mysql',
    pool:{
        max:5,
        min:0,
        require: 30000,
        idle: 1000
    }
    }
)
*/