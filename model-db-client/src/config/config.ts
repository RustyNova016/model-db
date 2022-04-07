//var admin = require("firebase-admin");

//var serviceAccount = require("/config/model-db-821c6-firebase-adminsdk-ngizn-bd7e614c25.json");
//
//if (typeof serviceAccount !== "string") {throw new Error("Service key invalid")}

export const config = {
    firebase: {
        //credential: admin.credential.cert(serviceAccount)
    },
    server: {
        url: "http://localhost:2525"
    }
}