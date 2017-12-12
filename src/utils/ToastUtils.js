'use strict';

import Toast from "react-native-root-toast";

/*
* 适用于ios/android lsj 2017-09-07 17:02:44
* */

var ToastUtils = {

    show: function (message) {
        Toast.show(message, {
            duration: 1000,
            // duration: Toast.durations.SHORT,
            position: Toast.positions.BOTTOM,
            shadow: false,
            animation: true,
            hideOnPress: true,
            delay: 0,
            // onShow: () => {
            //     // calls on toast\`s appear animation start
            // },
            // onShown: () => {
            //     // calls on toast\`s appear animation end.
            // },
            // onHide: () => {
            //     // calls on toast\`s hide animation start.
            // },
            // onHidden: () => {
            //     // calls on toast\`s hide animation end.
            // }
        });
    },
};
export default ToastUtils;

/*
*
* 使用方式:
*
* import ToastUtils from '../utils/ToastUtils';
* ToastUtils.show('这是一个提示!!!!');
*
* */