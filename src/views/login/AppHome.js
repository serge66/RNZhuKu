/*
    by seleyn 2017.09.07
    app首页
*/

import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Image,
    FlatList,
    TouchableWithoutFeedback,
    Text,
} from 'react-native';

import {LoginImageRoute} from '../../utils/ImageRoutesUtil';
import {LoginRoutesConfig} from '../../routes/RoutesConfigs';
import {ScreenConfgs} from '../../utils/ScreenUtil';

class AppHome extends Component {

    //list 数据源
    _datas(){
        return [{
            key: '立即登录', icon: LoginImageRoute.AppHome.app_home_login, detail: '已有账号，可立即登录使用'
        }, {
            key: '加入企业', icon: LoginImageRoute.AppHome.app_home_join, detail: '已收到企业代码？请加入已有企业'
        }, {
            key: '创建企业', icon: LoginImageRoute.AppHome.app_home_create, detail: '免费创建新企业或者新的团队'
        }, {
            key: '业主监督', icon: LoginImageRoute.AppHome.app_home_supervise, detail: '监管施工方？请进入业主监督'
        }]
    }

    //list 条目点击事件
    _itemClick(index){
        {/* index: 0:立即登录 1：加入企业 2：创建企业 3：业主监督 */ }

        const {navigate} = this.props.navigation

        switch (index) {
            case 0:
                navigate(LoginRoutesConfig.Login)
                break;
            case 1:
                navigate(LoginRoutesConfig.JoinCompany)
                break;
            case 2:
                navigate(LoginRoutesConfig.CreateCompany)
                break;
            case 3:
                navigate(LoginRoutesConfig.CreateSupervise)
                break;
            default:
                break;
        }
    }

    //list 条目
    _listItem(item) {
        return (
            <TouchableWithoutFeedback onPress={() => this._itemClick(item.index)}>
                <View style={styles.listItem}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image source={item.item.icon} style={styles.itemIcon} />
                        <View style={styles.itemTitleContainer}>
                            <Text style={{ fontSize: 16 }}>
                                {item.item.key}
                            </Text>
                        </View>
                    </View>
                    <Text style={styles.itemDetail}>
                        {item.item.detail}
                    </Text>
                    <Image source={LoginImageRoute.AppHome.app_home_arrow} style={styles.itemArrow} />
                </View>
            </TouchableWithoutFeedback>
        )
    }

    //list 条目分割线
    _ItemSeparator(){
        return <View style={styles.itemSeparator}></View>
    }

    render() {
        return (
            <View style={styles.container}>
                {/* 背景图片 */}
                <Image source={LoginImageRoute.AppHome.app_home_bg} style={styles.bgImage}/>
                <View style = {styles.listContainer}>
                    {/* 选择列表：立即登录、加入企业、创建企业、业主监督 */}
                    <FlatList
                        scrollEnabled = {false}
                        data={this._datas()}
                        ItemSeparatorComponent={this._ItemSeparator}
                        renderItem={this._listItem.bind(this)}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center'
    },

    bgImage:{
        width: ScreenConfgs.Screen_Width,
        height: ScreenConfgs.Screen_Height
    },

    listContainer: {
        left: 20,
        right: 20,
        height: 280,
        backgroundColor: 'white',
        position: 'absolute',
        opacity: 0.9,
    },

    listItem: {
        padding: 10,
        height: 70,
    },

    itemIcon: {
        width: 24,
        height: 24,
        marginLeft: 5,
    },

    itemTitleContainer: {
        paddingLeft: 10,
        justifyContent: 'center',
        height: 24,
    },

    itemDetail: {
        color: '#999999',
        marginLeft: 5,
        fontSize: 12,
        marginTop: 10,
    },

    itemArrow:{
        position: 'absolute', 
        top: 25, 
        right: 10, 
        width: 20, 
        height: 20
    },

    itemSeparator:{
        left:15, 
        height: 0.5, 
        backgroundColor:'#CCCCCC'
    }
})

export default AppHome;