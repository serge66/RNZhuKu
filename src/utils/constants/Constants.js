/*
    by selwyn -- 2017.09.11
    App 基础配置文件

    default_BgColor: 缺省背景色
    default_black: 缺省黑色
    default_blue: 主题蓝色
*/

import {ScreenConfgs} from '../ScreenUtil';

export const BaseAppConfigs = {
    default_BgColor: '',
    default_black: '#333333',
    default_blue: '#2299EE',
    default_font: ScreenConfgs.getFont(16),
    // defaule_base_url:'http://192.168.31.4:48080/zkpms-api//',//内网
    defaule_base_url: 'http://121.43.163.28:18080/zkpms-api/',//自验证环境
    default_service_error:'网络连接失败,请检查后重试',
    ActiveOpacityNum: 0.8,//可点击view的渐变透明度
}

global.BaseAppConfigs = BaseAppConfigs;
