import { createAction, handleActions } from "redux-actions";
import { Map } from "immutable";
const BTNACTION = "BTNACTION";
const POPOVERACTION = "POPOVERACTION";
const CLOSEACTION = "CLOSEACTION";
export const btnAction = createAction(BTNACTION, value => value);
export const closeAction = createAction(CLOSEACTION, value => value);
export const popoverAction = createAction(POPOVERACTION, value => value);
export const popover = e => dispatch => {
  if (e) {
    return dispatch({
      type: POPOVERACTION,
      payload: true
    });
  } else {
    return dispatch({
      type: POPOVERACTION,
      payload: false
    });
  }
};
export const btn = e => dispatch => {
  if (e) {
    return dispatch({
      type: CLOSEACTION,
      payload: "rbc-selected"
    });
  } else {
    return dispatch({
      type: CLOSEACTION,
      payload: "rbc-calendar"
    });
  }
};
const initialState = Map({
  show: false,
  popover: false,
  id: "rbc-calendar"
});
export default handleActions(
  {
    [BTNACTION]: (state, action) => {
      return state.update("show", show => !show);
    },
    [POPOVERACTION]: (state, action) => {
      return state.set("popover", action.payload);
    },
    [CLOSEACTION]: (state, action) => {
      return state.set("id", action.payload);
    }
  },
  initialState
);
