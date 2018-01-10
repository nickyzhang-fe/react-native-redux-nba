/**
 * Created by Cral-Gates on 2018/1/3.
 * 为方便Githuber查看特将所有API放置此，如不想使用可直接在页面内调用
 */
import HttpUtils from './HttpUtils';
const HOST = 'http://sportsnba.qq.com/';
const HOST_SHE_QU = 'https://shequweb.sports.qq.com';
const PARAMS = `appver=4.0.1&appvid=4.0.1&deviceId=09385DB300E081E142ED046B568B2E48&from=app&guid=09385DB300E081E142ED046B568B2E48&height=1920&network=WIFI&os=Android&osvid=7.1.1&width=1080&`;
/*
* 比赛列表
* @params
* */
export const GET_MATCH_LIST = (date, callback) => HttpUtils.fetchGetRequest(
    `${HOST}match/listByDate?${PARAMS}teamId=-1&date=${date}`,
    callback
);

/*
* 社区列表
* */
export const GET_SHE_QU_LIST = (callback) => HttpUtils.fetchGetRequest(
    `${HOST_SHE_QU}/module/timeLineAsGroup?lastId=0&count=20&gid=17&_=1510496938551`,
    callback
);
/*
* 注册
* @param {string} params
* */
export const Register = (params) => HttpUtils.fetchPostRequest(
    `${HOST}`,
    params
);