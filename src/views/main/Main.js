/*
    by seleyn 2017.09.08
    项目主页
*/


import React, { Component } from 'react';
import TabNavigator from '../../navigator/TabNavigator';

class Main extends Component {
    render() {
        console.log('------------xxxxxxxxxxxxxx');
        console.log(this.props.navigation.state.params.loginNavigation);
        return (
            <TabNavigator screenProps={this.props.navigation.state.params.loginNavigation}/>
        );
    }
}

export default Main;