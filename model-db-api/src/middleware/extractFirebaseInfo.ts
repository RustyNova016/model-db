import firebaseAdmin from "firebase-admin";
import {Request, Response, NextFunction} from "express";

const extractFirebaseInfo = (req: Request, res: Response, next: NextFunction) => {
    console.info("Validating firebase token");

    let token = req.headers.authorization?.split(" ")[1];

    if (token) {
        firebaseAdmin
            .auth()
            .verifyIdToken(token)
            .then((result: any) => {
                if (result) {
                    res.locals.firebase = result;
                    res.locals.fire_token = token;
                    next();
                } else {
                    console.warn("Token invalid, Unauthorized");

                    return res.status(401).json({
                        message: "Unauthorized"
                    });
                }
            })
            .catch((error: any) => {
                console.error(error);

                return res.status(401).json({
                    error,
                    message: "Unauthorized"
                });
            });
    } else {
        return res.status(401).json({
            message: "Unauthorized"
        });
    }
};

export default extractFirebaseInfo;
