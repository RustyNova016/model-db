import mysqlx from "mysqlx";
import {config} from "./config";

/** Mysql create a MySQL connection */

const mySqlSession = mysqlx.getSession({
    host: config.MYSQL_HOST,
    user: config.MYSQL_USER,
    password: config.MYSQL_PASSWORD,
    port: config.MYSQL_PORT,
});

const databaseSchema = mySqlSession.then((value) => {
    return value.getSchema("model-db");
})

export {
    mySqlSession,
    databaseSchema
}