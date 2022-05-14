import {ModelFile, ModelFilePrototype} from "./modelFile.interface";
import {MySQLConnection} from "../../config/SequelizeConnection";

const modelFiles: any[] = []

const modelFileTable = MySQLConnection.getInstance().getTable("model_file");

/**
 * Service Methods
 */

export function findAll() {
    console.log("findAll");
    return modelFileTable.then(
        table => {
            // Do a select on the table
            return table.select()
                .execute()
                .then(async rows => {
                        console.log("log check")
                        // Get the rows and check if it's an error or not
                        let rowResult = rows.getRows();
                        console.log("here's log result!")
                        console.log(await rowResult);

                        // Check if rowResult is not an array
                        //if(!Array.isArray(rowResult)){
                        //    throw new Error(rowResult.toString());
                        //}

                        return rowResult
                    }
                )
        }
    );
}

export const find = async (id: number): Promise<ModelFile> => modelFiles[id];

export const create = async (newItem: ModelFilePrototype): Promise<ModelFile> => {
    const id = new Date().valueOf();

    modelFiles[id] = {
        idModelFile: id,
        ...newItem,
    };

    return modelFiles[id];
};

export const update = async (
    idModelFile: number,
    itemUpdate: ModelFilePrototype
): Promise<ModelFile | null> => {
    const item = await find(idModelFile);

    if (!item) {
        return null;
    }

    modelFiles[idModelFile] = {idModelFile, ...itemUpdate};

    return modelFiles[idModelFile];
};

export const remove = async (idModelFile: number): Promise<null | void> => {
    const item = await find(idModelFile);

    if (!item) {
        return null;
    }

    delete modelFiles[idModelFile];
};