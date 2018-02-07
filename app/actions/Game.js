/**
 * Created by Cral-Gates on 2018/1/12.
 */
import {createAction} from 'redux-actions';
import types from '../common/ActionTypes'
import {GET_MATCH_LIST} from '../network/Api';

// export const getMatchList = createAction(types.GET_MATCH_LIST, async (date) => {
//     console.log(date);
//     return await GET_MATCH_LIST(date, function (res) {
//         return res;
//     })
// }, (data) => {
//     return {
//         data: data
//     }
// });
export function getMatchList(date) {
    return async (dispatch) => {
        await GET_MATCH_LIST(date, function (res) {
            dispatch(matchList(res));
        })
    }
}
function matchList(result) {
    return {
        type: types.GET_MATCH_LIST,
        data: result
    }
}
// export const getUserInfo = createAction(types.GET_USER_INFO, async(loginName) => {
//     return await userService.getUserInfo(loginName)
//         .then(userInfo => {
//             if (userInfo) {
//                 return userInfo
//             }
//             throw 'getUserInfoError'
//         })
// }, (userName) => {
//     return {
//         userName,
//         sync: 'user'
//     }
// })