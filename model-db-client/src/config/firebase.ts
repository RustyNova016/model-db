import firebase from "firebase/compat";
import {config} from "./config";

const Firebase = firebase.initializeApp(config.firebase);

export const Providers = {
    google: new firebase.auth.GoogleAuthProvider()
};

export const auth = firebase.auth();
export default Firebase;
