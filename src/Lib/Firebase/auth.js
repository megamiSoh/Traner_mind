import { auth } from "./firebase";
import firebase from "firebase/app";
import "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// 로그인
export const doSignInWithEmailAndPassword = (email, password) =>
  auth
    .setPersistence(firebase.auth.Auth.Persistence.SESSION)
    .then(function() {
      return auth.signInWithEmailAndPassword(email, password);
    })
    .catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
    });

export const doSignOut = () => auth.signOut();
