import { createAction, handleActions } from "redux-actions";
import { Map } from "immutable";

const AUTH = "AUTH";

export const authUser = createAction(AUTH);

const initialState = Map({
  authUser: "",
  isLoading: false
});
export default handleActions(
  {
    [AUTH]: (state, action) => state.set("authUser", action.payload)
  },
  initialState
);
