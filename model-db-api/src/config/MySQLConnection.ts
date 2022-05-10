import mysqlx, {Session} from "mysqlx";
import {ISchema, ITable} from "mysqlx/lib/interfaces";
import {getEnvVariables} from "../tools/getEnvVariables";

export class MySQLConnection {
    private static _instance: MySQLConnection;
    private _session: Promise<Session>;
    private _schema: Promise<ISchema>;

    private constructor() {
        getEnvVariables();
        this._session = mysqlx.getSession({
            host: process.env.MYSQL_HOST,
            user: process.env.MYSQL_USER,
            password: process.env.MYSQL_PASSWORD,
            port: 33060,
        })

        this._schema = this._session.then(value => {
            if (!process.env.MYSQL_SCHEMA) {
                throw new Error("MYSQL_SCHEMA environment variable is not set");
            }
            return value.getSchema(process.env.MYSQL_SCHEMA);
        });
    }

    public static getInstance(): MySQLConnection {
        if (!MySQLConnection._instance) {
            MySQLConnection._instance = new MySQLConnection();
        }
        return MySQLConnection._instance;
    }

    public static checkConnection(): Promise<boolean> {
        return new Promise((resolve) => {
            getEnvVariables();
            const connection = mysqlx.getSession({
                host: process.env.MYSQL_HOST,
                user: process.env.MYSQL_USER,
                password: process.env.MYSQL_PASSWORD,
                port: 33060,
            });
            connection.then(() => {
                resolve(true);
            }).catch(err => {
                console.error(err);
                resolve(false);
            });
        });
    }

    public async getSession(): Promise<Session> {
        return await this._session;
    }

    public async getSchema(): Promise<ISchema> {
        return await this._schema;
    }

    public async getTable(tableName: string): Promise<ITable> {
        let b = await this.checkIfTableExist(tableName);
        if (b) {
            return this._schema.then(schema => schema.getTable(tableName));
        } else {
            throw new TableDoesNotExistError(tableName);
        }
    }

    public checkIfTableExist(tableName: string): Promise<boolean> {
        return this._schema
            .then(schema => schema.getTable(tableName)) // get table
            .then(async table => {
                return await table.existsInDatabase(); // check if table exists
            });
    }
}

export class TableDoesNotExistError extends Error {
    constructor(tableName: string) {
        super(`Table "${tableName}" does not exist`);
        this.name = "TableDoesNotExistError";
    }
}