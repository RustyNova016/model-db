import {ISelectOperationResult, ITable} from "mysqlx/lib/interfaces";
import {MySQLConnection} from "../../config/MySQLConnection";
import express, {Router} from "express";
import {Row} from "mysqlx";

export class MySQLCRUD {
    public idFieldName = 'id';

    constructor(tableName: string) {
        this._table = MySQLConnection
            .getInstance()
            .getTable(tableName)
        /*.catch(reason => {
            if (reason instanceof Error) {
                throw reason;
            } else {
                throw new Error(reason);
            }
        });*/
    }

    private _table: Promise<ITable>;

    get table(): Promise<ITable> {
        return this._table;
    }

    get xtable() {
        return this._table.then(table => table.getXTable());
    }

    public async create(data: any) {
        // Todo: check if data is valid
        return await this._table.then(
            (table) => {
                return table
                    .insert(data)
                    .execute()
                    .then(
                        (result) => {
                            return result;
                        }
                    );
            }
        );
    }

    public async read(id: number): Promise<Row[][]> {
        //Todo: check if id is valid
        console.log("read");
        return await this.xtable.then(
            (table) => {
                return table
                    .select()
                    .where(this.idFieldName, "==", id)
                    .execute()
                    .then(
                        (result: ISelectOperationResult) => {
                            return result.fetchAll();
                        }
                    );
            }
        );
    }

    public async readAll(): Promise<Row[][]> {
        return await this.xtable.then(
            (table) => {
                return table
                    .select()
                    .execute()
                    .then(
                        (result: ISelectOperationResult) => { // TODO: This should be <ISelectOperationResult> but need to fix the typings
                            return result.fetchAll();
                        }
                    );
            }
        );
    }

    public async update(data: any, where: string): Promise<any> {
        //ToDo: check if params are valid
        return await this.xtable.then(
            (table) => {
                return table
                    .update(data)
                    .where(where)
                    .execute()
                    .then(
                        (result: any) => {
                            return result;
                        }
                    );
            }
        );
    }

    public async delete(id: number, where: string): Promise<any> {
        //ToDo: check if params are valid
        return await this.xtable.then(
            (table) => {
                return table
                    .delete()
                    .where(where)
                    .execute()
                    .then(
                        (result: any) => {
                            return result;
                        }
                    );
            }
        );
    }

    /** Generate an express router for CRUD operations
     *
     */
    public generateRouter(): Router {
        const router = express.Router();

        // TODO: Check inputs!

        // Find all
        router.get('/', async (req, res) => {
            try {
                const result = await this.readAll();
                res.status(200).json(result);
            } catch (e) {
                console.log(e);
                res.status(500).json(e);
            }
        });


        // Find by id
        router.get('/:id', async (req, res) => {
            try {
                const result = await this.read(parseInt(req.params.id, 10));
                res.json(result);
            } catch (e) {
                console.log(e);
                res.status(500).json(e);
            }
        });

        // Create
        router.post('/', async (req, res) => {
            try {
                const result = await this.create(req.body);
                res.json(result);
            } catch (e) {
                console.log(e);
                res.status(500).json(e);
            }
        });

        // Update
        router.put('/:id', async (req, res) => {
            try {
                const result = await this.update(req.body, this.idFieldName);
                res.json(result);
            } catch (e) {
                console.log(e);
                res.status(500).json(e);
            }
        });

        // Delete
        router.delete('/:id', async (req, res) => {
            try {
                const result = await this.delete(parseInt(req.params.id, 10), this.idFieldName);
                res.json(result);
            } catch (e) {
                console.log(e);
                res.status(500).json(e);
            }
        });

        return router;
    }
}