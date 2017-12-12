'use strict';

import Type from './Types';
import ToastUtils from '../../utils/ToastUtils';

var Buffer = require('buffer').Buffer;
let mDispatch;
let mToken;
function _requestObj(opt) {
    var auth;
    if (typeof opt=='string') {
        auth = opt;
    } else {
        auth = 'Basic ' + new Buffer(opt.account + ':' + opt.pwd).toString('base64');
    }
    return new Request(global.BaseAppConfigs.defaule_base_url
        + 'api/zkpms/workbench/my/companies/10013/switch', {
        method: 'POST',
        headers: {
            'X-REST-TOKEN': opt.token
        },
        mode: 'cors',
        credentials: 'include'
    });
}

function _status(response) {
    //是否正常返回,ok代表状态码在200-299之间==(response.status >= 200 && response.status < 300)
    if (response.ok) {
        var headers = response.headers;
        console.log(headers.get('Content-Type'));

        mToken = headers.get('X-REST-TOKEN');
        console.log(response.url);

        return Promise.resolve(response);
    } else {
        // ToastUtils.show(global.constants.SERVER_ERROR);
        // return Promise.reject(new Error('出错:' + response.statusText))
        return Promise.resolve(response);
    }
}

function _json(res) {
    return res.json()
}

function _parseJson(responseJson) {
    console.log('responseJson------------:' + responseJson);
    console.log(responseJson);
    if (responseJson.success) {
        let opt = {
            'token': mToken,
            'data': responseJson
        };
        mDispatch(loginSuccess(opt));

    } else {
        // ToastUtils.show("网络连接失败，请重连后重试");
        // ToastUtils.show(responseJson.message);
        mDispatch(loginError());
    }
}

function _catch(error) {
    console.log('error:' + error);
    // ToastUtils.show(global.BaseAppConfigs.default_service_error)
    mDispatch(loginError());
}

export function doLogin(opt) {

    return (dispatch) => {
        mDispatch = dispatch;
        // dispatch(isLogining());

        let result = fetch(_requestObj(opt))
            .then(_status)
            .then(_json)
            .then(_parseJson)
            .catch(_catch);

    }
}

function isLogining() {
    // return {type: Type.login.LOGIN_IN_DOING}
}

function loginSuccess(data) {
    // return {type: Type.login.LOGIN_IN_DONE, data: data}
}

function loginError() {
    // return {type: Type.login.LOGIN_IN_ERROR}
}