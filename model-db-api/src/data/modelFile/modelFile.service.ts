import {ModelFile, ModelFilePrototype} from "./modelFile.interface";
import {getTable} from "../../tools/getTable";

const modelFiles: any[] = []

const modelFileTable = getTable("modelFile");

/**
 * Service Methods
 */

export function findAll(){
    return modelFileTable.then(
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