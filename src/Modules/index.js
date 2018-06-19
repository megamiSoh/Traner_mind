import { combineReducers } from "redux";
import authUser from "./authUser";
import getList from "./getList";
export default combineReducers({
  auth: authUser,
  getList
});
