'use strict';

import {combineReducers} from 'redux';
import loginIn from './LoginReducer'; // 导入登录的redux处理过程
import userCompanyMenu from './UserCompanyMenuReducer';

const rootReducer = combineReducers({ // 将所有的redux处理逻辑包装在一起
    loginIn: loginIn,
    userCompanyMenu:userCompanyMenu,
});

export default rootReducer; // 导出,作为统一入口