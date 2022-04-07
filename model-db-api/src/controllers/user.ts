/*
import {NextFunction, Request, Response} from "express";
import {DB} from "../config/MYSQLDB";

const users = DB.then(value => value.getTable());

const validate = (req: Request, res: Response, next: NextFunction) => {
    console.info("Token validated, ensuring user.");

    let firebase = res.locals.firebase;

    return User.findOne({uid: firebase.uid})
               .then((user: any) => {
                   if (user) {
                       return res.status(200).json({user});
                   } else {
                       return res.status(401).json({
                           message: "Token(s) invalid, user not found"
                       });
                   }
               })
               .catch((error: { message: any; }) => {
                   return res.status(500).json({
                       message: error.message,
                       error
                   });
               });
};

const create = (req: Request, res: Response, next: NextFunction) => {
    console.info("Attempting to register user ...");

    let {uid, name} = req.body;
    let fire_token = res.locals.fire_token;

    const user = new User({
        _id: new mongoose.Types.ObjectId(),
        uid,
        name
    });

    return user
        .save()
        .then((newUser: any) => {
            console.info(`New user ${uid} created`);

            return res.status(200).json({user: newUser, fire_token});
        })
        .catch((error: { message: any; }) => {
            console.error(error.message);

            return res.status(500).json({
                message: error.message
            });
        });
};

const login = (req: Request, res: Response, next: NextFunction) => {
    console.info("Verifying user");

    let {uid} = req.body;
    let fire_token = res.locals.fire_token;

    return User.findOne({uid})
               .then((user: any) => {
                   if (user) {
                       console.info(`User ${uid} found, attempting to sign token and return user ...`);
                       return res.status(200).json({user, fire_token});
                   } else {
                       console.warn(`User ${uid} not in the DB, attempting to register ...`);
                       return create(req, res, next);
                   }
               })
               .catch((error: { message: any; }) => {
                   console.error(error.message);
                   return res.status(500).json({
                       message: error.message
                   });
               });
};

const read = (req: Request, res: Response, next: NextFunction) => {
    const _id = req.params.userID;
    console.info(`Incoming read for user with id ${_id}`);

    User.findById(_id)
        .exec()
        .then((user: any) => {
            if (user) {
                return res.status(200).json({
                    user: user
                });
            } else {
                return res.status(404).json({
                    error: "User not found."
                });
            }
        })
        .catch((error: { message: any; }) => {
            console.error(error.message);

            return res.status(500).json({
                error: error.message
            });
        });
};

const readAll = (req: Request, res: Response, next: NextFunction) => {
    console.info("Readall route called");

    User.find()
        .exec()
        .then((users: string | any[]) => {
            return res.status(200).json({
                count: users.length,
                users: users
            });
        })
        .catch((error: { message: any; }) => {
            console.error(error.message);

            return res.status(500).json({
                message: error.message
            });
        });
};

export default {
    validate,
    create,
    login,
    read,
    readAll
};*/
