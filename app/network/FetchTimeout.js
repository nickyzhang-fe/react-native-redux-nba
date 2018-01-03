/**
 * Created by Cral-Gates on 2018/1/3.
 */

export function timeout_fetch(fetch_promise, timeout = 15000) {
    let timeout_fn = null;

    let timeout_promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            timeout_fn = function () {
                reject('timeout promise');
            };
        }, timeout);
    });

    return Promise.race([
        fetch_promise,
        timeout_promise
    ]);
}