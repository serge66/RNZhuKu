
import React, { Component } from 'react';
import {StackNavigator} from 'react-navigation';

import {MineRoutesConfigs} from '../routes/RoutesConfigs';
import MineHome from '../views/mine/MineHome';
import MyCompany from '../views/mine/MyCompanyView';


const MineNavigator = StackNavigator({

     [MineRoutesConfigs.MineHome]:{
         screen:MineHome,
         navigationOptions: {
             header: null
         }
     },
    "MyCompany":{
        screen:MyCompany,
    },
})

export default MineNavigator;