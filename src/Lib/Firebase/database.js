import { database } from "./firebase";
// import firebase from "firebase/app";
import "firebase/app";
import "firebase/auth";
import "firebase/firestore";

export const cardInfo = id => {
  return database.ref(`/${id}`);
};
export const post = ({ ...rest }) => {
  var postData = {
    ...rest
  };
  console.log(postData[0]);
  var newPostKey = database
    .ref()
    .child("posts")
    .push().key;
  var updates = {};
  updates["/posts/" + newPostKey] = postData;
  return database.ref().update(updates);
};
