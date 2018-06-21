import { handleActions } from "redux-actions";
import { database } from "../Lib/Firebase";

const POSTLIST = "POSTLIST";
const POSTFAILURE = "POSTFAILURE";
const POSTPENDING = "POSTPENDING";

export const postList = (id, data) => dispatch => {
  dispatch({ type: POSTPENDING });
  return database
    .post(id, data)
    .then(response => {
      dispatch({
        type: POSTLIST,
        payload: response
      });
    })
    .catch(err => {
      dispatch({
        type: POSTFAILURE,
        payload: err
      });
    });
};

const initialState = {
  pending: false,
  err: false,
  data: []
};

export default handleActions(
  {
    [POSTPENDING]: (state, action) => {
      return {
        ...state,
        pending: true,
        err: false
      };
    },
    [POSTLIST]: (state, action) => {
      return {
        ...state,
        pending: false,
        data: action.payload
      };
    },
    [POSTFAILURE]: (state, action) => {
      return {
        ...state,
        pending: false,
        err: true
      };
    }
  },
  initialState
);
