import {Model_PageCRUD} from "../model_page/[id]";
import {NextApiRequest, NextApiResponse} from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const CRUD = new Model_PageCRUD();
    const data = CRUD.findByName(Model_PageCRUD.getNextApiRouteId(req, "name"));
    res.status(200).json(Model_PageCRUD.getRouteHandlerFromModel(data));
}