import mysqlx, {Session} from "mysqlx";
import {ISchema} from "mysqlx/lib/interfaces";

/** Create a MySQL connection */
let mySqlSession: null|Promise<Session> = null;
let databaseSchema: null|Promise<ISchema> = null;

try {
    mySqlSession = mysqlx.getSession({
        host: process.env.MYSQL_HOST,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        port: 33060,
    });

    databaseSchema = mySqlSession.then((value) => {
        return value.getSchema("model-db");
    })
} catch (error) {
    console.log(error);
}


export {
    mySqlSession,
    databaseSchema
}