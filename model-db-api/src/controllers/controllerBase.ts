import e, {Request, Response} from "express";
import {ITable} from "mysqlx/lib/interfaces";

export interface ICRUDInterface{
    create(req: Request, res: Response) : void
    update(req: Request, res: Response) : void
    findOne(req: Request, res: Response) : void
    getAll(req: Request, res: Response) : void
}

export class ControllerBase {
    public table: ITable

    constructor(table: ITable) {
        this.table = table;
    }

    public getTableFields(){
        return this.table.getSchema()
    }
}
