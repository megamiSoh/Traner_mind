import firebase from "firebase/app";
import "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";
import "firebase/storage";

const prodConfig = {
  apiKey: "AIzaSyDIzo1bny_HFmwvxOQYx_4BFgvSPJWCuGQ",
  authDomain: "auth-4d426.firebaseapp.com",
  databaseURL: "https://auth-4d426.firebaseio.com",
  projectId: "auth-4d426",
  storageBucket: "auth-4d426.appspot.com",
  messagingSenderId: "575953102109"
};

const devConfig = {
  apiKey: "AIzaSyDIzo1bny_HFmwvxOQYx_4BFgvSPJWCuGQ",
  authDomain: "auth-4d426.firebaseapp.com",
  databaseURL: "https://auth-4d426.firebaseio.com",
  projectId: "auth-4d426",
  storageBucket: "auth-4d426.appspot.com",
  messagingSenderId: "575953102109"
};
const config = process.env.NODE_ENV === "production" ? prodConfig : devConfig;

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}
const database = firebase.database();
const auth = firebase.auth();
const storage = firebase.storage();
export { auth, database, storage };
