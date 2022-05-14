import express, {Express} from "express";


/** Log the incoming request */
export function requestLogger(app: Express) {
    app.use((req, res, next) => {
        console.info(`METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}]`);

        res.on("finish", () => {
            console.info(`METHOD: [${req.method}] - URL: [${req.url}] - STATUS: [${res.statusCode}] - IP: [${req.socket.remoteAddress}]`);
        });

        next();
    });
}

/** Parse the body of the request */
export function requestBodyParser(app: Express) {
    app.use(express.json());
    app.use(express.urlencoded({extended: true}));
}

/** Rules of the API */
export function requestAPIRules(app: Express) {
    app.use((req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");

        if (req.method == "OPTIONS") {
            res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
            return res.status(200).json({});
        }

        next();
    });
}

/** Error handling */
export function requestErrorHandling(app: Express) {
    app.use((req, res) => {
        const error = new Error("Not found");

        res.status(404).json({
            message: error.message
        });
    });
}