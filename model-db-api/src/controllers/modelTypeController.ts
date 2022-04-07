import e from "express";
import {ControllerBase, ICRUDInterface} from "./controllerBase";

export class ModelTypeController extends ControllerBase implements ICRUDInterface{
    public create(req: e.Request, res: e.Response): void {
        this.table.insert()
    }

    public findOne(req: e.Request, res: e.Response): void {
    }

    public getAll(req: e.Request, res: e.Response): void {
    }

    public update(req: e.Request, res: e.Response): void {
    }
}