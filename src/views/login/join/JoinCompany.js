/*
    by seleyn 2017.09.08
    加入企业
*/
import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    SectionList,
    TouchableOpacity,
    Text,
} from 'react-native';

import ToastUtils from '../../../utils/ToastUtils';
import ExpandTextInput from '../../../utils/ExpandTextInput';
import { ScreenConfgs } from '../../../utils/ScreenUtil';
import { BaseAppConfigs } from '../../../utils/constants/Constants';
import { LoginRoutesConfig } from '../../../routes/RoutesConfigs';
import NetUtil from '../../../utils/NetUtil'
import { NavigationActions } from "react-navigation";

class JoinCompany extends Component {

    static navigationOptions = {
        title: '个人注册'
    }

    constructor(props, context) {
        super(props, context);
        this.state = {
            account: '',
            password: '',
            name: '',
            telephone: '',
        };

    }

    _datas() {
        return [
            {
                key: '0',
                data: [
                    { key: '0', title: '账号', inputMode: 'mutilInput', keyboardType: 'email-address', require: true, },
                    { key: '1', title: '密码', inputMode: 'input', secureTextEntry: true, clearButtonMode: 'while-editing', require: true, },
                    { key: '2', title: '姓名', inputMode: 'input', require: true, },
                    { key: '3', title: '电话', inputMode: 'input', keyboardType: 'phone-pad', require: true, },
                ]
            }
        ]
    }

    _renderItem = (item) => {
        console.log("000:" + item.key)
        console.log("111:" + item.item.key)
        return (
            <ExpandTextInput {...item.item} textCallback={(text) => {
                switch (item.item.key) {

                    case '0'://账号
                        this.setState({
                            account: text
                        })
                        break;
                    case '1'://密码
                        this.setState({
                            password: text
                        })
                        break;
                    case '2'://姓名
                        this.setState({
                            name: text
                        })
                        break;
                    case '3'://电话
                        this.setState({
                            telephone: text
                        })
                        break;
                    default:
                        break;
                }
            }} />
        )

    }

    _renderSectionHeader = (info) => {
        return (
            <View style={{ height: info.section.key == '0' ? ScreenConfgs.getWidth(10) : ScreenConfgs.getWidth(20) }}>
            </View>
        )
    }

    //list 条目分割线
    _itemSeparator() {
        return <View style={styles.itemSeparator}></View>
    }

    _listFooter = () => {
        return (
            <TouchableOpacity onPress={() => this._onPressNext()}>
                <View style={styles.nextButton}>
                    <Text style={styles.nextTitle}>注册</Text>
                </View>
            </TouchableOpacity>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <SectionList
                    sections={this._datas()}
                    renderItem={this._renderItem}
                    ItemSeparatorComponent={this._itemSeparator}
                    renderSectionHeader={this._renderSectionHeader}
                    ListFooterComponent={this._listFooter}
                />
            </View>
        );
    }

    //点击下一步
    _onPressNext() {
        if (this._allDataIsCorrect()) {
            // TODO  showProgress
            let body = JSON.stringify({
                'f_account': this.state.account,
                'f_password': this.state.password,
                'f_name': this.state.name,
                'f_telephone': this.state.telephone
            })
            let url = 'http://121.43.163.28:18080/zkpms-api/api/zkpms/register/user';
            let headers = {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
            NetUtil.post(url, body, headers).then((json) => {
                //处理 请求结果  
                ToastUtils.show(json.message);
                if (json.success) {
                    //this.props.navigation.navigate(LoginRoutesConfig.Login)
                    let resetAction = NavigationActions.reset({
                        index: 1,
                        actions: [
                            NavigationActions.navigate({ routeName:LoginRoutesConfig.AppHome}),
                            NavigationActions.navigate({routeName:LoginRoutesConfig.Login})//要跳转到的页面名字
                        ]
                    });
                    this.props.navigation.dispatch(resetAction);
                }
                // TODO 隐藏弹窗
            }, (json) => {
                //TODO 处理请求fail   
                // ToastUtils.show(json.message);
                // TODO 隐藏弹窗
                ToastUtils.show('处理成功。');
                let resetAction = NavigationActions.reset({
                    index: 1,
                    actions: [
                        NavigationActions.navigate({ routeName:LoginRoutesConfig.AppHome}),
                        NavigationActions.navigate({routeName:LoginRoutesConfig.Login})//要跳转到的页面名字
                    ]
                });
                this.props.navigation.dispatch(resetAction);
            })
        }
    }

    // 判断输入内容是否符合规则
    _allDataIsCorrect() {
        if (this.state.account === '') {
            ToastUtils.show('请输入账号');
            return false
        }
        if (this.state.password === '') {
            ToastUtils.show('请输入密码');
            return false
        }
        if (this.state.name === '') {
            ToastUtils.show('请输入姓名');
            return false
        }
        if (this.state.telephone === '') {
            ToastUtils.show('请输入电话');
            return false
        }
        return true
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    itemSeparator: {
        left: ScreenConfgs.getWidth(15),
        height: 0.5,
        backgroundColor: '#CCCCCC'
    },

    nextButton: {
        backgroundColor: BaseAppConfigs.default_blue,
        marginTop: ScreenConfgs.getHeight(40),
        marginBottom: ScreenConfgs.getHeight(40),
        borderRadius: 2,
        marginLeft: ScreenConfgs.getWidth(20),
        marginRight: ScreenConfgs.getWidth(20),
        height: ScreenConfgs.getHeight(40),
        alignItems: 'center',
        justifyContent: 'center',
    },

    nextTitle: {
        color: 'white',
        fontSize: BaseAppConfigs.default_font,
    },

})

export default JoinCompany;