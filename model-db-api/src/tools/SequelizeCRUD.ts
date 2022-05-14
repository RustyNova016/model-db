/*
import {getTable} from "./getTable";

export class MysqlCRUD {
    private table;

    constructor(tablename: string) {
        this.table = getTable(tablename);
    }

    public async getAll() {
        return await this.table.then(
            table => {
                return table.select()
                    .execute()
                    .then(rows => {
                            return rows.getRows()
                        }
                    )
            }
        );
    }

}*/


import {Model, ModelCtor} from "sequelize";
import express, {Request, Response} from "express";

interface SequelizeModelI {
    findAll: () => Promise<Model<any, any>>;
    findByPk: (id: number) => Promise<Model<any, any>>;
    create: (data: any) => Promise<Model<any, any>>;
    update: (data: any) => Promise<Model<any, any>>;
    destroy: (data: any) => Promise<number>;
}

export class SequelizeCRUD<model extends ModelCtor<Model<any, any>>> {
    private table: model;

    constructor(table: model) {
        this.table = table;
    }

    findAll() {
        return this.table.findAll();
    }

    findById(id: number) {
        return this.table.findByPk(id);
    }

    deleteById(id: number) {
        return this.table.destroy({
            where: {
                id: id
            }
        });
    }

    create(data: any) {
        return this.table.create(data);
    }

    async update(data: any, id: number) {
        const instance = await this.findById(id);
        if (instance === null) {
            throw new Error("No instance found");
        }

        return instance.set(data).save();
    }

    generateRouter() {
        const router = express.Router();

        router.get('/', (req: Request, res: Response) => {
            this.findAll().then(data => {
                res.json(data);
            });
        });

        router.get('/:id', (req: Request, res: Response) => {
            this.findById(Number(req.params.id)).then(data => {
                res.json(data);
            });
        });

        router.post('/', (req: Request, res: Response) => {
            this.create(req.body).then(data => {
                res.json(data);
            });
        });

        router.put('/:id', (req: Request, res: Response) => {
            this.update(req.body, Number(req.params.id)).then(data => {
                res.json(data);
            });
        });

        router.delete('/:id', (req: Request, res: Response) => {
            this.deleteById(Number(req.params.id)).then(data => {
                res.json(data);
            });
        });

        return router;
    }

    static getRouterFromModel<sequeModel extends ModelCtor<Model<any, any>>>(SeqModel: sequeModel){
        const CRUD = new SequelizeCRUD<sequeModel>(SeqModel);
        return CRUD.generateRouter();
    }
}