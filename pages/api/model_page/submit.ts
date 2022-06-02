import {NextApiRequest, NextApiResponse} from "next";
import {Model_PageCRUD} from "./[id]";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    console.log("req: ", req.body);

    const CRUD = new Model_PageCRUD();

    const data = CRUD.create(
        {
            name: req.body.name,
            description: req.body.description,
            ageRestricted: false,
            author: req.body.author,
            picture: req.body.picture,
            userId: 1
        }
    );
    res.status(200).json(data);
}