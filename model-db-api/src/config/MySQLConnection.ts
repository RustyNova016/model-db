import {getEnvVariables} from "../tools/getEnvVariables";
import {Sequelize} from "sequelize";

function getSequelize() {
    getEnvVariables();
    let {MYSQL_HOST, MYSQL_SCHEMA, MYSQL_USER, MYSQL_PASSWORD} = process.env;
    MYSQL_HOST = MYSQL_HOST || 'localhost';
    MYSQL_SCHEMA = MYSQL_SCHEMA || 'test';
    MYSQL_USER = MYSQL_USER || 'root';
    MYSQL_PASSWORD = MYSQL_PASSWORD || 'root';

    return new Sequelize(MYSQL_SCHEMA, MYSQL_USER, MYSQL_PASSWORD, {
        host: MYSQL_HOST,
        dialect: 'mysql'
    });
}

const sequelize = getSequelize();
export default sequelize;

export async function checkDBConnection() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}