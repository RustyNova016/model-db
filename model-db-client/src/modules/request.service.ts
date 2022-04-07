import axios from "axios";
import {config} from "../config/config";

export class RequestService {
    public static async findAll<a = any>(item: string){
        return axios({
            method: "GET",
            url: `${config.server.url}/api/data/` + item,
        });
    }
}