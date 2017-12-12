/*
    by seleyn 2017.09.08
    注册业主监督
*/
import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    SectionList,
    TouchableOpacity,
    Text,
} from 'react-native';

import ExpandTextInput from '../../../utils/ExpandTextInput';
import {ScreenConfgs} from '../../../utils/ScreenUtil';
import {BaseAppConfigs} from '../../../utils/constants/Constants';

class CreateSupervise extends Component {

    static navigationOptions = {
        title:'业主监督' 
    }

    _datas(){
        return [
            {
                key:'0',
                data: [
                    { key: '0', title: '手机号', inputMode: 'input', keyboardType:'phone-pad'},
                    { key: '1', title: '验证码', inputMode: 'input', keyboardType:'numeric'}
                ]
            },
            {
                key: '1',
                data: [
                    { key: '3', title: '密码', inputMode: 'input', secureTextEntry: true, clearButtonMode:'while-editing'},
                    { key: '4', title: '姓名', multiline: true, placeholder: '请输入真实姓名'}
                ]
            },
        ]
    }

    _renderItem = (item) => {
        console.log(item)
        if (item.section.key == '0' && item.index == 0){
            return (
               <View style={{flexDirection:'row',flex:1,backgroundColor:'white'}}>
                    <ExpandTextInput {...item.item} textCallback={(text) => {

                    }} />
                    <TouchableOpacity style={styles.verifyCodeButton}>
                        <Text style={styles.verifyCodeTitle}>获取验证码</Text>
                    </TouchableOpacity>
               </View>
            )
        }
        else{
            return (
                <ExpandTextInput {...item.item} textCallback={(text) => {

                }} />
            )
        }
    }

    _renderSectionHeader = (info) => {
        return (
            <View style={{ height: info.section.key == '0' ? ScreenConfgs.getWidth(10) : ScreenConfgs.getWidth(20)}}>
            </View>
        )
    }

    //list 条目分割线
    _itemSeparator() {
        return <View style={styles.itemSeparator}></View>
    }

    _listFooter = () => {
        return (
            <TouchableOpacity>
                <View style={styles.nextButton}>
                    <Text style={styles.nextTitle}>下一步</Text>
                </View>
            </TouchableOpacity>
        )
    }

    render() {
        return (
            <View>
                <SectionList
                    sections = {this._datas()}
                    renderItem = {this._renderItem}
                    ItemSeparatorComponent = {this._itemSeparator}
                    renderSectionHeader = {this._renderSectionHeader}
                    ListFooterComponent = {this._listFooter}
               />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container:{
        flex:1
    },

    itemSeparator: {
        left: ScreenConfgs.getWidth(15),
        height: 0.5,
        backgroundColor: '#CCCCCC'
    },

    sectionHeader:{
        height: ScreenConfgs.getWidth(20),
    },

    nextButton:{
        backgroundColor: BaseAppConfigs.default_blue,
        marginTop:ScreenConfgs.getHeight(40),
        borderRadius:2,
        marginLeft:ScreenConfgs.getWidth(20),
        marginRight: ScreenConfgs.getWidth(20),
        height: ScreenConfgs.getHeight(40),
        alignItems:'center',
        justifyContent:'center',
    },

    nextTitle:{
        color:'white',
        fontSize:BaseAppConfigs.default_font,
    },

    verifyCodeButton:{
        width: ScreenConfgs.getWidth(80), 
        marginRight: ScreenConfgs.getWidth(15), 
        alignSelf: 'center', 
        backgroundColor: 'red', 
        height: ScreenConfgs.getHeight(30),
        justifyContent:'center', 
        alignItems:'center',
        borderRadius:2,
        backgroundColor:BaseAppConfigs.default_blue,
    },

    verifyCodeTitle:{
        fontSize:ScreenConfgs.getWidth(12),
        color:'white',
    },
})

export default CreateSupervise;