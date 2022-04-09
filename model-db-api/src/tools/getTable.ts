import {ITable} from "mysqlx/lib/interfaces";
import {databaseSchema} from "../config/MYSQLDB";

export function getTable(tableName: string): Promise<ITable> {
    let iTablePromise = databaseSchema.then(schema => schema.getTable(tableName));
    return iTablePromise;
}