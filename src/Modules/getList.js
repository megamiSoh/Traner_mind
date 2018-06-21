import { handleActions } from "redux-actions";
import { Map } from "immutable";
import { database } from "../Lib/Firebase";
// const GETLIST = "firebase";
const GETLIST = "GETLIST";
const GETFAILURE = "GETFAILURE";
const GETPENDING = "GETPENDING";
// export const getList = createAction(GETLIST);
export const getList = id => dispatch => {
  dispatch({ type: GETPENDING });
  return database.getData(id).on("value", function(snapshot) {
    if (snapshot.exists()) {
      dispatch({
        type: GETLIST,
        payload: snapshot.val()
      });
    } else {
      dispatch({
        type: GETFAILURE,
        payload: Object.values(snapshot.val())
      });
    }
  });
};
const initialState = Map({
  getList: "",
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
