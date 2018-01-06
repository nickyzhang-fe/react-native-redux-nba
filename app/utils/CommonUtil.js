/**
 * Created by Carl-Gates on 2018/1/3.
 *
 * @公共方法
 */

import React, {Component} from 'react';

class CommonUtil extends Component {
    /*
     * 为空判断
     * */
    static isEmpty(v) {
        return !v;
    }
    /*
    * 时间格式化
    * @param timestamp
    * @param format
    * */
    static formatDate(timestamp, formater) {
        let date = new Date();
        date.setTime(parseInt(timestamp));
        formater = (formater != null) ? formater : 'yyyy-MM-dd hh:mm';
        Date.prototype.Format = function (fmt) {
            var o = {
                "M+": this.getMonth() + 1, //月
                "d+": this.getDate(), //日
                "h+": this.getHours(), //小时
                "m+": this.getMinutes(), //分
                "s+": this.getSeconds(), //秒
                "q+": Math.floor((this.getMonth() + 3) / 3), //季度
                "S": this.getMilliseconds() //毫秒
            };

            if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
            for (var k in o) {
                if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ?
                    (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
            }
            return fmt;
        };
        return date.Format(formater);
    }
}

export default CommonUtil;