/*
    by seleyn 2017.09.07
    登录流程路由
*/

import React, {Component} from 'react';
import {StackNavigator} from 'react-navigation';
import SplashView from '../views/login/SplashView';
import AppHome from '../views/login/AppHome';
import Login from '../views/login/loginnow/Login';
import JoinCompany from '../views/login/join/JoinCompany';
import CreateCompany from '../views/login/create/CreateCompany';
import CreateSupervise from '../views/login/supervise/CreateSupervise';
import HomePage from '../views/main/Main';
import ExampleNavigator from './ExampleNavigator';
import {LoginRoutesConfig} from '../routes/RoutesConfigs';

const LoginNavigator = StackNavigator({
    [LoginRoutesConfig.SplashView]: {
        screen: SplashView,
        navigationOptions: {
            header: null
        }
    },
    [LoginRoutesConfig.AppHome]: {
        screen: AppHome,
        navigationOptions: {
            header: null
        }
    },
    [LoginRoutesConfig.Login]: {
        screen: Login,
        navigationOptions: {
            header: null
        }
    },
    [LoginRoutesConfig.JoinCompany]: {
        screen: JoinCompany,
    },
    [LoginRoutesConfig.CreateCompany]: {
        screen: CreateCompany,
    },
    [LoginRoutesConfig.CreateSupervise]: {
        screen: CreateSupervise,
    },
    [LoginRoutesConfig.HomePage]: {
        screen: HomePage,
        navigationOptions: {
            header: null
        }
    },
    [LoginRoutesConfig.ExampleNavigator]: {
        screen: ExampleNavigator,
    },
   
}, {
    navigationOptions: {
        headerTitleStyle: {
            alignSelf: 'center'
        }
    }
})

export default LoginNavigator;

/*
screen：对应界面名称，需要填入import之后的页面

navigationOptions：配置StackNavigator的一些属性。

title：标题，如果设置了这个导航栏和标签栏的title就会变成一样的，所以不推荐使用这个方法。
header：可以设置一些导航的属性，当然如果想隐藏顶部导航条只要将这个属性设置为null就可以了。
headerTitle：设置导航栏标题，推荐用这个方法。
headerBackTitle：设置跳转页面左侧返回箭头后面的文字，默认是上一个页面的标题。可以自定义，也可以设置为null
headerTruncatedBackTitle：设置当上个页面标题不符合返回箭头后的文字时，默认改成"返回"。（上个页面的标题过长，导致显示不下，所以改成了短一些的。）
headerRight：设置导航条右侧。可以是按钮或者其他。
headerLeft：设置导航条左侧。可以是按钮或者其他。
headerStyle：设置导航条的样式。背景色，宽高等。如果想去掉安卓导航条底部阴影可以添加elevation: 0，iOS下用shadowOpacity: 0。
headerTitleStyle：设置导航条文字样式。安卓上如果要设置文字居中，只要添加alignSelf:'center'就可以了
headerBackTitleStyle：设置导航条返回文字样式。
headerTintColor：设置导航栏文字颜色。总感觉和上面重叠了。
headerPressColorAndroid：安卓独有的设置颜色纹理，需要安卓版本大于5.0
gesturesEnabled：是否支持滑动返回收拾，iOS默认支持，安卓默认关闭
*/