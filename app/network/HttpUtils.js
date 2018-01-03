/**
 * Created by Cral-Gates on 2018/1/3.
 * @网络请求
 */
import {timeout_fetch} from './FetchTimeout';
class HttpUtils {
    /**
     * @param {string} url 接口地址
     * @return 返回Promise
     */
    static fetchGetRequest(url) {
        return new Promise(function (resolve, reject) {
            timeout_fetch(fetch(url, {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json;charset=UTF-8",
                    "token": 'token'
                }
            }))
                .then((response) => response.text())
                .then((responseData) => {
                    resolve(responseData);
                })
                .catch((err) => {
                    reject(err);
                });
        })
    }
    /**
     * @param {string} url 接口地址
     * @param {string} param
     * @return 返回Promise
     */
    static fetchPostRequest(url, param) {
        return new Promise(function (resolve, reject) {
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
                    resolve(responseData);
                })
                .catch((err) => {
                    reject(err);
                });
        })
    }
}

export default HttpUtils;


