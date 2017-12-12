'use strict';

import Types from '../actions/Types'; // 导入事件类别,用来做事件类别的判断

// 初始状态
const initialState = {
    status: 'init',
    isSuccess: false,
    data: null,
    isShowProgress:false,
}
// 不同类别的事件使用switch对应处理过程

export default function userCompanyMenu(state = initialState, action) {
    switch (action.type) {
        case Types.user_company_menu.USER_COMPANY_MENU_DOING:
            console.log('reducers user_company_menu: doing');
            return {
                ...state,
                status: 'doing',
                isSuccess: false,
                data: null,
                isShowProgress:true,
            }
            break;
        case Types.user_company_menu.USER_COMPANY_MENU_DONE:
            console.log('reducers user_company_menu: success');
            return {
                ...state,
                status: 'success',
                isSuccess: true,
                data: action.data,
                isShowProgress:false,
            }
            break;
        case Types.user_company_menu.USER_COMPANY_MENU_ERROR:
            console.log('reducers user_company_menu: error');
            return {
                ...state,
                status: 'error',
                isSuccess: false,
                data: null,
                isShowProgress:false,
            }
            break;
        default:
            console.log('reducers user_company_menu: default');
            return state;

    }
}