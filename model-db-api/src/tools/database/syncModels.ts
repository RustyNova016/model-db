import {Model_file} from "../../model/model_file";

export function syncModels() {
    Model_file.sync({alter: true}).then()
}