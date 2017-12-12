import React, { Component } from 'react';
import{
    Image,
}from 'react-native';
import {TabNavigator} from 'react-navigation';

import WorkbenchNavigator from './WorkbenchNavigator';
import ProjectNavigator from './ProjectNavigator';
import MineNavigator from './MineNavigator';

const TabRouteConfigs = {
    WorkbenchNavigator:{
        screen:WorkbenchNavigator ,
        navigationOptions:{
            tabBarLabel: '工作台',
            tabBarIcon: ({focused}) => (
                <Image 
                    source={focused ? require('../assets/images/main/tabbar_workbenchsel.png'):require('../assets/images/main/tabbar_workbench.png')}
                />
            ),
        },
    },
    ProjectNavigator:{
        screen:ProjectNavigator ,
        navigationOptions:{
            tabBarLabel: '项目',
            tabBarIcon: ({focused}) => (
                <Image
                    source={focused ? require('../assets/images/main/tabbar_projectselect.png'):require('../assets/images/main/tabbar_project.png')}
                />
            ),
        },
    },
    MineNavigator:{
        screen:MineNavigator ,
        navigationOptions:{
            tabBarLabel: '我',
            tabBarIcon: ({focused}) => (
                <Image
                    source={focused ? require('../assets/images/main/tabbar_settingselect.png')
                    :require('../assets/images/main/tabbar_setting.png')}
                />
            ),
        },
    },
}

const TabNavigatorConfigs = {
    initialRouteName: 'WorkbenchNavigator',
    tabBarPosition: 'bottom',
    swipeEnabled:true,
    animationEnabled:false,
    tabBarOptions:{
        activeTintColor:'#2299EE',
        inactiveTintColor:'gray',
        showIcon:true,
        indicatorStyle:{
            height:0,
        },
        style:{
            backgroundColor:'white',
        }
    }
}

const TabBar = TabNavigator(TabRouteConfigs, TabNavigatorConfigs);

export default TabBar;