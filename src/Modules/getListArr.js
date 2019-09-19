import { handleActions } from "redux-actions";
import { Map } from "immutable";
import { database } from "../Lib/Firebase";
import MarcketAll from "./models";
const GETLIST = "GETLIST";
const GETFAILURE = "GETFAILURE";
const GETPENDING = "GETPENDING";

function snapshotToArray(snapshot) {
  let returnArr = [];
  snapshot.forEach(function(childSnapshot) {
    const item = childSnapshot.val();
    item.key = childSnapshot.key;
    returnArr.push(new MarcketAll(item));
  });
  return returnArr;
}

export const getList = id => dispatch => {
  dispatch({ type: GETPENDING });
  return database.getData(id).on("value", function(snapshot) {
    try {
      if (snapshot.exists()) {
        dispatch({
          type: GETLIST,
          payload: snapshotToArray(snapshot)
        });
        // if (snapshot.val() !== null) {
        //   return dispatch({
        //     type: GETLIST,
        //     payload: snapshotToArray(snapshot)
        //   });
        // }
      }
    } catch (error) {
      dispatch({
        type: GETFAILURE
      });
    }
  });
};

const initialState = Map({
  getList: [],
  error: false,
  pending: false
});

export default handleActions(
  {
    [GETPENDING]: (state, action) => {
      return {
        ...state,
        pending: true,
        error: false
      };
    },
    [GETLIST]: (state, action) => {
      return {
        ...state,
        pending: false,
        getList: action.payload
      };
    },
    [GETFAILURE]: (state, action) => {
      return {
        ...state,
        pending: false,
        error: true
      };
    }
  },
  initialState
);
