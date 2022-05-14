import express, {Express} from "express";
import http from "http";
import {getEnvVariables} from "./tools/getEnvVariables";
import {requestBodyParser, requestLogger} from "./tools/server/requestTools";
import {logAllRoutes} from "./tools/server/routeLogger";
import {checkDBConnection} from "./config/SequelizeConnection";
import {syncModels} from "./tools/database/syncModels";
import logger from "./tools/logger";
import {SequelizeCRUD} from "./tools/SequelizeCRUD";
import {Model_file} from "./model/model_file";

getEnvVariables();

/** Step 1: Create server */
const app: Express = express();
const httpServer = http.createServer(app);

/** Step 2: Add methods to the server */

requestLogger(app);
requestBodyParser(app);
//requestAPIRules(app);
//requestErrorHandling(app);


/** Step 3: Add Routes */
app.use("/api/data/model_file", SequelizeCRUD.getRouterFromModel(Model_file));
logAllRoutes(app);

/** Step 4: Start Server */
httpServer.listen(
    process.env.PORT,
    () => {
        logger.info(`Server is running ${process.env.HOST}:${process.env.PORT}`)

        /** Step 5: Check database connection */
        checkDBConnection().then(() => {
            syncModels();
        });
    }
);

