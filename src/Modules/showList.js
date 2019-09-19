import { createAction, handleActions } from "redux-actions";
const LISTACTION = 'LISTACTION';
export const listAction = createAction(LISTACTION)
const initialState = {
    list: {}
}
export default handleActions (
    {
        [LISTACTION] : (state, action ) =>{
            return 
        }
    },
    initialState
)