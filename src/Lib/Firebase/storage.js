import { storage } from "./firebase";
import "firebase/storage";

export const task = (file, fileName) => {
  return storage
    .ref()
    .child(`image/${fileName}`)
    .put(file)
    .then(snapshot => {
      console.log(snapshot);
    })
    .catch(error => {
      console.log(error);
    });
};
