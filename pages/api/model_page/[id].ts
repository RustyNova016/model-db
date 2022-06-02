import {SequelizeCRUD} from "../../../tools/CRUD/SequelizeCRUD";
import {Identifier, Model, Sequelize} from "sequelize";
import database from "../../../database/database";

export class Model_PageCRUD extends SequelizeCRUD<typeof database.model_page> {
    constructor() {
        super(database.model_page);
    }

    findAll(): Promise<Model<any, any>[]> {
        console.log("findAll");
        return this.table.findAll({
            include: [{
                model: database.model_file,
                as: "files"
            }]
        });
    }

    findById(id: Identifier): Promise<Model<any, any> | null> {
        console.log("findById");
        return this.table.findByPk(id, {
            include: [{
                model: database.model_file,
                as: "files"
            },
                {
                    model: database.user,
                    as: "user"
                }]
        });
    }

    findByName(name: string): Promise<Model<any, any>[] | null> {
        console.log("findByName");
        return this.table.findAll({
            where: {
                name: {
                    [Sequelize.Op.like]: `%${name}%`
                }
            }
        });
    }
}

const handler = Model_PageCRUD.getIDRouteHandlerFromModel(database.model_page);
export default handler