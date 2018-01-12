/**
 * Created by Cral-Gates on 2018/1/12.
 */
import {createAction} from 'redux-actions';
import types from '../common/ActionTypes'

export const getMatchList =  createAction(types.GET_MATCH_LIST, async (date) => {
    console.log(date);
    return {
        date
    }
});