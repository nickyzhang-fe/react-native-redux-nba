/**
 * Created by Cral-Gates on 2018/1/3.
 * @网络请求
 */
import {timeout_fetch} from './FetchTimeout';
class HttpUtils {
    /**
     * @param {string} url 接口地址
     * @param callback
     */
    static fetchGetRequest(url, callback) {
        timeout_fetch(fetch(url, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json;charset=UTF-8"
            }
        }))
            .then((response) => response.text())
            .then((responseData) => {
                callback(responseData);
            })
            .catch((err) => {
                callback(err);
            });
    }

    /**
     * @param {string} url 接口地址
     * @param {string} param
     * @param callback
     */
    static fetchPostRequest(url, param, callback) {
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
                callback(responseData);
            })
            .catch((err) => {
                callback(err);
            });
    }
}

export default HttpUtils;


