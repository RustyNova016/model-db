getEnvVariables();
import {MySQLConnection} from "./config/MySQLConnection";
import express from "express";
//import {initializeApp} from "firebase/app";
import http from "http";
import {modelFilesRouter} from "./data/modelFile/modelFiles.router";
import {getEnvVariables} from "./tools/getEnvVariables";


//import {firebaseConfig} from "./config/config";


const app = express();

/** Server Handling */
const httpServer = http.createServer(app);


// Initialize Firebase
//const firebaseApp = initializeApp(firebaseConfig);

/** Log the request */
app.use((req, res, next) => {
    console.info(`METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}]`);

    res.on("finish", () => {
        console.info(`METHOD: [${req.method}] - URL: [${req.url}] - STATUS: [${res.statusCode}] - IP: [${req.socket.remoteAddress}]`);
    });

    next();
});

/** Parse the body of the request */
app.use(express.urlencoded({extended: true}));
app.use(express.json());

/** Rules of the API */
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");

    if (req.method == "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
        return res.status(200).json({});
    }

    next();
});

/** Error handling */
//app.use((req, res, next) => {
//    const error = new Error("Not found");
//
//    res.status(404).json({
//        message: error.message
//    });
//});

/** Add Routes */
app.use("/api/data/modelfile", modelFilesRouter)


function print(path: any[], layer: any) {
    if (layer.route) {
        layer.route.stack.forEach(print.bind(null, path.concat(split(layer.route.path))))
    } else if (layer.name === 'router' && layer.handle.stack) {
        layer.handle.stack.forEach(print.bind(null, path.concat(split(layer.regexp))))
    } else if (layer.method) {
        console.log('%s /%s',
            layer.method.toUpperCase(),
            path.concat(split(layer.regexp)).filter(Boolean).join('/'))
    }
}

function split(thing: any) {
    if (typeof thing === 'string') {
        return thing.split('/')
    } else if (thing.fast_slash) {
        return ''
    } else {
        var match = thing.toString()
            .replace('\\/?', '')
            .replace('(?=\\/|$)', '$')
            .match(/^\/\^((?:\\[.*+?^${}()|[\]\\\/]|[^.*+?^${}()|[\]\\\/])*)\$\//)
        return match
            ? match[1].replace(/\\(.)/g, '$1').split('/')
            : '<complex:' + thing.toString() + '>'
    }
}

app._router.stack.forEach(print.bind(null, []))

MySQLConnection.checkConnection().then(r => console.log(r));

/** Listen */
httpServer.listen(
    process.env.PORT,
    () => console.info(`Server is running ${process.env.HOST}:${process.env.PORT}`)
);

