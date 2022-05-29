import {SequelizeCRUD} from "../../../tools/CRUD/SequelizeCRUD";
import {Identifier, Model} from "sequelize";
import database from "../../../database/database";

class Model_PageCRUD extends SequelizeCRUD<typeof database.model_page> {
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
            }]
        });
    }
}

const handler = Model_PageCRUD.getIDRouteHandlerFromModel(database.model_page);
export default handler