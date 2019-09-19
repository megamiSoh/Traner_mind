import { createAction, handleActions } from "redux-actions";
import { database } from "../Lib/Firebase";
import { Map } from "immutable";
const POSTLIST = "POSTLIST";
const POSTFAILURE = "POSTFAILURE";
const POSTPENDING = "POSTPENDING";
const POSTDATA = "POSTDATA";
export const postData = createAction(POSTDATA, payload => payload);
const initialState = Map({
  pending: false,
  err: false,
  data: false,
  PostData: {}
});

export const postList = (title, data) => dispatch => {
  return database
    .post(title, data)
    .then(snapshot => {
      dispatch({
        type: POSTDATA,
        payload: data
      });
    })
    .catch(err => {
      dispatch({
        type: POSTFAILURE,
        payload: err
      });
    });
};

export default handleActions(
  {
    [POSTDATA]: (state, action) => {
      return state.set("PostData", action.payload).set(...state);
    },
    [POSTPENDING]: (state, action) => {
      return state
        .set("pending", true)
        .set("err", false)
        .set(...state);
    },
    [POSTLIST]: (state, action) => {
      return state
        .set("pending", false)
        .set("data", true)
        .set(...state);
    },
    [POSTFAILURE]: (state, action) => {
      return state
        .set("pending", false)
        .set("err", true)
        .set(...state);
    }
  },
  initialState
);
