import {Model_file} from "../../model/model_file";
import {Model_format} from "../../model/model_format";

export async function syncModels() {
    const models = [
        Model_file,
        Model_format,
    ];

    for (const model of models) {
        await model.sync({alter: true});
    }
}