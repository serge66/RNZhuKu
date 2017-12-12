'use strict';

import Type from './Types';
import ToastUtils from '../../utils/ToastUtils';

let mDispatch;
let mToken;

function _requestObj(token) {
    return new Request(global.BaseAppConfigs.defaule_base_url + 'api/admin/index', {
        method: 'GET',
        headers: {
            'X-REST-TOKEN': token
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
    console.log('__responseJson:' + responseJson);
    if (responseJson.success) {
        mDispatch(disDone(responseJson));
    } else {
        // ToastUtils.show("网络连接失败，请重连后重试");
        ToastUtils.show(responseJson.message);
        mDispatch(disError());
    }
}

function _catch(error) {
    console.log('__error:' + error);
    ToastUtils.show(global.BaseAppConfigs.default_service_error)
    mDispatch(disError());
}

export function requestUserCompanyMenuData(token) {
    return (dispatch) => {
        mDispatch = dispatch;
        dispatch(disDoing());

        let result = fetch(_requestObj(token))
            .then(_status)
            .then(_json)
            .then(_parseJson)
            .catch(_catch);

    }
}

function disDoing() {
    return {type: Type.user_company_menu.USER_COMPANY_MENU_DOING}
}

function disDone(data) {
    return {type: Type.user_company_menu.USER_COMPANY_MENU_DONE, data: data}
}

function disError() {
    return {type: Type.user_company_menu.USER_COMPANY_MENU_ERROR}
}