import {model_file} from "../../model/model_file";

export function syncModels() {
    model_file.sync({alter: true}).then()
}