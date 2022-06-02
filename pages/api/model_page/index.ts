import database from "../../../database/database";
import {Model_PageCRUD} from "./[id]";

const handler = Model_PageCRUD.getRouteHandlerFromModel(database.model_page);
export default handler