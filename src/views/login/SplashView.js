"use strict";

import React from "react";
import {Image, StyleSheet, View} from "react-native";
import {NavigationActions} from "react-navigation";
import {LoginRoutesConfig} from '../../routes/RoutesConfigs';
import {connect} from 'react-redux';
import {ScreenConfgs} from '../../utils/ScreenUtil';

let thiz;
let mIsGotoAppHome = true;

class SplashView extends React.Component {
    constructor(props) {
        super(props);
        thiz = this;
    }

    static navigationOptions = {
        header: null,
    };

    componentWillMount() {
        console.log('----splashView componentWillMount this.props.loginIn.status:' + this.props.loginIn.status);
    }

    componentDidMount() {
        console.log('----splashView componentDidMount this.props.loginIn.status:' + this.props.loginIn.status);
        if (this.props.loginIn.isSuccess) {
            console.log('componentDidMount  token:' + this.props.loginIn.data.token)
            this._gotoHomePage();
        } else {
            this._gotoAppHome();
        }
    };

    componentWillReceiveProps() {
        console.log('----splashView componentWillReceiveProps this.props.loginIn.status:' + this.props.loginIn.status);
        return true;
    }

    _gotoAppHome() {
        this.timer = setTimeout(
            () => {
                if (mIsGotoAppHome) {
                    let navigateAction = NavigationActions.reset({
                        index: 0,
                        actions: [
                            NavigationActions.navigate({routeName: LoginRoutesConfig.AppHome}), //or routeName:'Main'
                        ]
                    });
                    thiz
                        .props
                        .navigation
                        .dispatch(navigateAction);
                    console.log('---goto SelectEntry');
                }
            },
            3000
        );
    }

    _gotoHomePage() {
        this.timer = setTimeout(
            () => {
                let navigateAction = NavigationActions.reset({
                    index: 0,
                    actions: [
                        NavigationActions.navigate({routeName: LoginRoutesConfig.HomePage,
                            params: { loginNavigation: thiz.props.navigation }}), //or routeName:'Main'
                    ]
                });
                thiz
                    .props
                    .navigation
                    .dispatch(navigateAction);
                console.log('---goto SelectEntry');
            },
            500
        );

    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('----splashView shouldComponentUpdate this.props.loginIn.status:' + this.props.loginIn.status);
        console.log('----splashView shouldComponentUpdate nextProps.loginIn.status:' + nextProps.loginIn.status);

        const {loginIn} = nextProps;
        if (loginIn.isSuccess) {
            console.log('componentDidMount  token:' + loginIn.data.token)
            mIsGotoAppHome = false;
            this._gotoHomePage();
            return false;
        } else {
            this._gotoAppHome();
        }
        return true;
    }

    componentWillUpdate() {
        console.log('----splashView componentWillUpdate this.props.loginIn.status:' + this.props.loginIn.status);
    }

    componentDidUpdate() {
        console.log('----splashView componentDidUpdate this.props.loginIn.status:' + this.props.loginIn.status);
    }

    componentWillUnmount() {
        console.log('----splashView componentWillUnmount this.props.loginIn.status:' + this.props.loginIn.status);
        this.timer && clearTimeout(this.timer);
    };

    render() {
        console.log('splashView render:' + this.props.loginIn)
        // this._gotoAppHome();
        return (
            <View style={[styles.flex, styles.top]}>
                <Image style={styles.bottom}
                       source={require('../../assets/images/login/splash_logo.png')}></Image>
            </View>
        );
    };
}

const styles = StyleSheet.create({
    flex: {
        flex: 1,
    },
    top: {
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: '#ffffff'
    },
    bottom: {
        width: ScreenConfgs.getWidth(300),
        height: ScreenConfgs.getHeight(80),
        marginBottom: ScreenConfgs.getHeight(40),
    },
});


function mapStateToProps(state) {
    const {loginIn} = state;
    return {
        loginIn,
    }
}

export default connect(mapStateToProps)(SplashView);