import mysqlx from "mysqlx";

let connection = {
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    port: 33060,
};
/** Mysql create a MySQL connection */

const mySqlSession = mysqlx.getSession(connection);

const databaseSchema = mySqlSession.then((value) => {
    return value.getSchema("model-db");
})

export {
    mySqlSession,
    databaseSchema
}