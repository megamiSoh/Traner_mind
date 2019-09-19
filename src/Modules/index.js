import { combineReducers } from "redux";
import authUser from "./authUser";
import getList from "./getList";
import postList from "./postList";
import getListArr from "./getListArr";
import btn from "./btnAction";
// import initialShopInfo from "./Models/ShopInfo";
export default combineReducers({
  auth: authUser,
  getList,
  postList,
  getListArr,
  btn
});
