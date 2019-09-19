import { database, createDate } from "./firebase";
import "firebase/app";
import "firebase/auth";
import "firebase/firestore";

export const getData = id => {
  return database.ref(`/${id}`);
};
export const post = (title, { ...rest }) => {
  var postData = { createDate, ...rest };
  var newPostKey = database
    .ref()
    .child(title)
    .push().key;
  var updates = {};
  updates[`${title} /` + newPostKey] = postData;
  return database.ref().update(updates);
};
