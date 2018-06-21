import { database } from "./firebase";
// import firebase from "firebase/app";
import "firebase/app";
import "firebase/auth";
import "firebase/firestore";

export const getData = id => {
  return database.ref(`/${id}`);
};
export const post = (id, { ...rest }) => {
  var postData = {
    ...rest
  };
  console.log(postData);
  var newPostKey = database
    .ref()
    .child("posts")
    .push().key;
  var updates = {};
  updates[`/posts/${id} /` + newPostKey] = postData;
  return database.ref().update(updates);
};
