import {Model, ModelCtor} from "sequelize";
import express, {Request, Response} from "express";

export class SequelizeCRUD<model extends ModelCtor<Model<any, any>>> {
    private table: model;

    constructor(table: model) {
        this.table = table;
    }

    static getRouterFromModel<sequeModel extends ModelCtor<Model<any, any>>>(SeqModel: sequeModel) {
        const CRUD = new SequelizeCRUD<sequeModel>(SeqModel);
        return CRUD.generateRouter();
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
                [this.table.primaryKeyAttribute]: id
            }
        });
    }

    create(data: any) {
        return this.table.create(data);
    }

    async updateById(data: any, id: number) {
        return this.table.update(data, {
            where: {
                [this.table.primaryKeyAttribute]: id
            }
        });
    }

    generateRouter() {
        const router = express.Router();

        router.get('/', (req: Request, res: Response) => {
            this.findAll().then(
                data => {
                    res.json(data);
                }
            ).catch((e) => {
                res.status(500).json(e);
            });
        });

        router.get('/:id', (req: Request, res: Response) => {
            this.findById(Number(req.params.id)).then(
                data => {
                    res.json(data);
                }
            ).catch((e) => {
                res.status(500).json(e);
            });
        });

        router.post('/', (req: Request, res: Response) => {
            this.create(req.body).then(data => {
                res.json(data);
            }).catch((e) => {
                res.status(500).json(e);
            })
        });

        router.put('/:id', (req: Request, res: Response) => {
            this.updateById(req.body, Number(req.params.id)).then(data => {
                res.json(data);
            }).catch((e) => {
                res.status(500).json(e);
            });
        });

        router.delete('/:id', (req: Request, res: Response) => {
            this.deleteById(Number(req.params.id)).then(data => {
                res.json(data);
            }).catch((e) => {
                res.status(500).json(e);
            });
        });

        return router;
    }
}