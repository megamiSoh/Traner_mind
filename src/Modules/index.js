import { combineReducers } from "redux";
import authUser from "./authUser";
import getList from "./getList";
import postList from "./postList";
export default combineReducers({
  auth: authUser,
  getList,
  postList
});
