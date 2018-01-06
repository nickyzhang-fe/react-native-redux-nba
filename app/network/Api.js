/**
 * Created by Cral-Gates on 2018/1/3.
 */

import HttpUtils from './HttpUtils';
const host = 'http://sportsnba.qq.com/';
const hosts = 'https://shequweb.sports.qq.com';
/*
* 登录
* @params
* */
export const Login = () => HttpUtils.fetchGetRequest(
    `${host}`
);
/*
* 注册
* @param {string} params
* */
export const Register = (params) => HttpUtils.fetchPostRequest(
    `${host}`,
    params
);