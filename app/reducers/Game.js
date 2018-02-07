/**
 * Created by Cral-Gates on 2017/01/04.
 */
import types from '../common/ActionTypes';
import {handleActions} from "redux-actions";

const initialState = {
    data: {}
};
export default function GameReducers(state = initialState, action) {
    switch (action.type) {
        case 'GET_MATCH_LIST':
            // console.log(typeof action.data);
            // console.log(JSON.parse(action.data).data.matches);
            return Object.assign({}, state, JSON.parse(action.data).data.matches);
        default:
            return state;
    }
}

// export const Game = handleActions({
//     GET_MATCH_LIST: (state, action) => ({...state})
// }, initialState);

