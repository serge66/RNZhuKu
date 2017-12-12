
import React, { Component } from 'react';
import {StackNavigator} from 'react-navigation';

import {ProjectRoutesConfigs} from '../routes/RoutesConfigs';
import ProjectHome from '../views/project/ProjectHome';

const ProjectNavigator = StackNavigator({

     [ProjectRoutesConfigs.ProjectHome]:{
         screen:ProjectHome,
         navigationOptions: {
            header: null
        }
     },
})

export default ProjectNavigator;