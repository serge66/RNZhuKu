"use strict";

import React, {Component} from "react";
import {
    Image,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import {NavigationActions} from "react-navigation";
import {doLogin} from '../../../redux/actions/LoginAction';
import {connect} from 'react-redux';
import CommonStyles from '../../..//styles/CommonStyles';
import {ScreenConfgs} from '../../../utils/ScreenUtil';
import {LoginRoutesConfig} from '../../../routes/RoutesConfigs';
import ProgressComponent from '../../../components/ProgressComponent';

var account = '';
var pwd = '';
var thiz;

class LoginView extends Component {
    constructor(props) {
        super(props);
        thiz = this;
    }

    login_click() {
        if (account == '' || pwd == '') {
            account = 'wxd';
            pwd = '12345678'
        }

        let opt = {
            'account': account,
            'pwd': pwd
        };
        this
            .props
            .dispatch(doLogin(opt));
    }

    forgot_click() {
        alert("忘记密码")
    }

    select_entry_click() {
        // this.props.navigation.navigate('SelectEntry');
        const {navigate, goBack, state} = this.props.navigation;
        // 在第二个页面,在goBack之前,将上个页面的方法取到,并回传参数,这样回传的参数会重走render方法
        // state.params.callback('从LoginView界面回传的数据');
        goBack(null);
    }

    _gotoHomePage(nextProps) {
        // console.log('------------xxxxxxxxxxxxxx');
        // console.log(this.props.navigation);
        // console.log(thiz.props.navigation);

        console.log('loginView _gotoAppHome this.props.loginIn.isSuccess:' + this.props.loginIn.isSuccess
            + '----this.props.loginIn.status:' + this.props.loginIn.status);
        if (nextProps.loginIn.isSuccess) {
            let navigateAction = NavigationActions.reset({
                 index: 0,
                 actions: [
                     NavigationActions.navigate(
                         {routeName: LoginRoutesConfig.HomePage,
                             params: { loginNavigation: thiz.props.navigation }}), //or routeName:'Main'
                 ]
            });

            thiz
                .props
                .navigation
                .dispatch(navigateAction);
            console.log('-----goto _gotoHomePage');
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('loginView shouldComponentUpdate this.props.loginIn.isSuccess:' + this.props.loginIn.isSuccess
            + '----this.props.loginIn.status:' + this.props.loginIn.status);
        console.log('loginView shouldComponentUpdate nextProps.loginIn.isSuccess:' + nextProps.loginIn.isSuccess
            + '----nextProps.loginIn.status:' + nextProps.loginIn.status);
        this._gotoHomePage(nextProps);
        return true;
    }

    componentWillUpdate() {
        console.log('loginView componentWillUpdate:' + this.props.loginIn)
    }

    render() {
        return (
            <View style={[styles.flex, styles.posi]}>

                <View style={[styles.flex, styles.top, styles.topContent, CommonStyles.adaptiveTopiOS]}>
                    <View style={styles.homePage}>
                        <TouchableOpacity
                            activeOpacity={global.BaseAppConfigs.ActiveOpacityNum}
                            onPress={() => this.select_entry_click()}>
                            <Text style={styles.homePageText}>首页</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Image
                            style={{
                                width: ScreenConfgs.getWidth(80),
                                height: ScreenConfgs.getHeight(100)
                            }}
                            resizeMode={'center'}
                            source={require('../../../assets/images/login/login_top_icon.png')}/>
                    </View>
                    <View style={styles.content}>{/*中间的两个输入模块*/}
                        <View style={styles.account_pwd_line}>
                            <View style={styles.account_pwd}>
                                <Text style={styles.leftText}>帐号</Text>
                                {/*<Text style={styles.rightText}>请输入手机号</Text>*/}
                                <TextInput
                                    placeholder={'请输入手机号'}
                                    multiline={false}
                                    autoFocus={true}
                                    style={styles.rightText}
                                    blurOnSubmit={true}
                                    underlineColorAndroid={'transparent'}
                                    keyboardType={'ascii-capable'}
                                    onChangeText={(text) => {
                                        account = text;
                                    }}/>
                            </View>
                            <View style={styles.line}>{/*一条线*/}
                            </View>
                        </View>
                        <View style={styles.account_pwd_line}>
                            <View style={styles.account_pwd}>
                                <Text style={styles.leftText}>密码</Text>
                                <TextInput
                                    placeholder={'请输入登录密码'}
                                    multiline={false}
                                    autoFocus={false}
                                    style={styles.rightText}
                                    blurOnSubmit={true}
                                    secureTextEntry={true}
                                    underlineColorAndroid={'transparent'}
                                    keyboardType={'ascii-capable'}
                                    onChangeText={(text) => {
                                        {/* this.setState({ pwd: text, }); */
                                        }
                                        pwd = text;
                                    }}/>
                            </View>
                            <View style={styles.line}>{/*一条线*/}
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity
                        activeOpacity={global.BaseAppConfigs.ActiveOpacityNum}
                        onPress={() => this.login_click()}>
                        <View style={styles.loginLayout}>
                            <Text style={styles.loginText}>登录</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={global.BaseAppConfigs.ActiveOpacityNum}
                        onPress={() => this.forgot_click()}>
                        <View>
                            <Text style={styles.forgotText}>忘记密码?</Text>
                        </View>
                    </TouchableOpacity>

                </View>
                <ProgressComponent visible={this.props.loginIn.isShowProgress}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    flex: {
        flex: 1
    },
    posi: {
        position: 'absolute'
    },
    top: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#ffffff'
    },
    homePage: {
        // flex: 1,
        height: ScreenConfgs.getHeight(80),
        width: ScreenConfgs.Screen_Width,
        marginTop: ScreenConfgs.getHeight(20),
        // alignSelf: 'flex-end',
    },
    homePageText: {
        alignSelf: 'flex-end',
        marginRight: ScreenConfgs.getWidth(20),
        color: '#10b2ff',
        fontSize: ScreenConfgs.getWidth(15)
    },
    content: {
        //     width: width,     height: height / 5,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: ScreenConfgs.Screen_Height / 10
    },
    account_pwd: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '80%',

        // width: width,
        height: ScreenConfgs.Screen_Height / 15
    },
    account_pwd_line: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        // flex: 1,
    },
    leftText: {
        fontSize: ScreenConfgs.getWidth(15),
        color: '#000000',
        // width:'60%',
    },
    rightText: {
        fontSize: ScreenConfgs.getWidth(13),
        color: '#aaaaaa',
        flex: 1,
        marginLeft: ScreenConfgs.getWidth(10)
    },
    line: {
        height: 1,
        width: ScreenConfgs.getWidth(300),
        backgroundColor: '#e5e5e5'
    },
    loginLayout: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#10b2ff',
        height: ScreenConfgs.getHeight(40),
        width: ScreenConfgs.getWidth(300),
        marginTop: ScreenConfgs.getHeight(20)
    },
    loginText: {
        color: '#ffffff',
        fontSize: ScreenConfgs.getFont(15),
        alignSelf: 'center'
    },
    forgotText: {
        fontSize: ScreenConfgs.getWidth(12),
        color: '#aaaaaa',
        marginTop: ScreenConfgs.getHeight(20)
    },
    progress: {
        margin: ScreenConfgs.getWidth(10),
        alignSelf: 'center'
    },
    progressContent: {
        position: 'absolute',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#55555555',
        width: ScreenConfgs.Screen_Width,
        height: ScreenConfgs.Screen_Height
    },
    topContent: {
        position: 'absolute',
        height: ScreenConfgs.Screen_Height
    }
});

//mapStateToProps的第一个参数总是state对象，还可以使用第二个参数，代表容器组件的props对象。
function mapStateToProps(state) {
    const {loginIn} = state;
    return {
        loginIn
    }
}

export default connect(mapStateToProps)(LoginView);