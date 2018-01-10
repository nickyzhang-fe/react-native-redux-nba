/**
 * Created by Cral-Gates on 2018/1/3.
 * @网络请求
 */
import {timeout_fetch} from './FetchTimeout';
class HttpUtils {
    /**
     * @param {string} url 接口地址
     * @param callback1
     * @param callback2
     */
    static fetchGetRequest(url, callback1, callback2) {
        return new Promise(function (resolve, reject) {
            timeout_fetch(fetch(url, {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json;charset=UTF-8"
                }
            }))
                .then((response) => response.text())
                .then((responseData) => {
                    resolve(responseData);
                    callback1(responseData);
                })
                .catch((err) => {
                    reject(err);
                    callback2(err);
                });
        })
    }

    /**
     * @param {string} url 接口地址
     * @param {string} param
     * @param callback1
     * @param callback2
     */
    static fetchPostRequest(url, param, callback1, callback2) {
        timeout_fetch(fetch(url, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json;charset=UTF-8",
                "token": 'token'
            },
            body: JSON.stringify(param)
        }))
            .then((response) => response.json())
            .then((responseData) => {
                callback1(responseData);
            })
            .catch((err) => {
                callback2(err);
            });
    }
}

export default HttpUtils;


