import React, { Component } from 'react';
import {StackNavigator} from 'react-navigation';

import {WorkbenchRoutesConfigs} from '../routes/RoutesConfigs';
import WorkbenchHome from '../views/workbench/WorkbenchHome';

const WorkbenchNavigator = StackNavigator({

     [WorkbenchRoutesConfigs.WorkbenchHome]:{
         screen:WorkbenchHome,
         navigationOptions: {
            header: null
        }
     },
})

export default WorkbenchNavigator;