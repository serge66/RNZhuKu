"use strict";

import React from "react";
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Image
} from "react-native";
import {connect} from 'react-redux';
import {ScreenConfgs} from '../../utils/ScreenUtil';
import CommonStyles from '../../styles/CommonStyles';
import ToastUtils from "../../utils/ToastUtils";
import {doLogin} from '../../redux/actions/SwitchCompanyAction';

let thiz;
class MineHome extends React.Component {

    constructor(props) {
        super(props);
        thiz = this;
    }

    _gotoMyCompany() {

        let opt = {
            'account': 'lsj',
            'pwd': '00000000',
            'token':thiz.props.loginIn.data.token,
        };
        this
            .props
            .dispatch(doLogin(opt));
        thiz._show();

    }

    _gotoHelp() {
        this
            .props
            .navigation
            .navigate('HelpView');
    }

    _gotoSettings() {
        this
            .props
            .navigation
            .navigate('SettingsView');
    }

    _gotoFeedBack() {
        this
            .props
            .navigation
            .navigate('FeedBackView');
    }

    _gotoService() {
        this
            .props
            .navigation
            .navigate('ServiceView');
    }
    _show(){
        ToastUtils.show('企业切换成功');
    }
    _gotoNewFunction() {
        this
            .props
            .navigation
            .navigate('NewFunctionView');
    }

    _gotoPeopleCenter() {
        this
            .props
            .navigation
            .navigate('PeopleCenterView');
    }

    _gotoCallPhone() {
        // CallPhone.callPhone('4007773177');
    }

    render() {
        const {userCompanyMenu} = this.props;
        return (
            <View style={[styles.flex, CommonStyles.adaptiveTopiOS]}>
                        <TouchableOpacity
                            style={styles.flex}
                            activeOpacity={global.BaseAppConfigs.ActiveOpacityNum}
                            onPress={() => this._gotoMyCompany()}>
                            <View style={styles.flex}>

                                <Text style={styles.item_title}>切换企业</Text>
                            </View>
                        </TouchableOpacity>
            </View>
        );
    };
}

const styles = StyleSheet.create({
    flex: {
        flex: 1
    },
    container: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#ffffff'
    },
    top: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: ScreenConfgs.Screen_Height / 4,
        width: ScreenConfgs.Screen_Width,
    },
    header: {
        width: ScreenConfgs.getWidth(80),
        height: ScreenConfgs.getHeight(80),
        marginLeft: ScreenConfgs.getWidth(30),
        borderRadius: ScreenConfgs.getWidth(40),
        // backgroundColor:'#ff0000'
    },

    contentContainer: {
        // paddingVertical: 20
    },
    info: {
        marginLeft: ScreenConfgs.getWidth(15),
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    name_post: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    name: {
        fontSize: ScreenConfgs.getWidth(15)
    },
    post: {
        marginLeft: ScreenConfgs.getWidth(10),
        fontSize: ScreenConfgs.getWidth(12)
    },
    company_layout: {
        height: ScreenConfgs.getHeight(50),
        width: ScreenConfgs.getWidth(220),
        marginTop: ScreenConfgs.getHeight(15)
    },
    company: {
        fontSize: ScreenConfgs.getWidth(12)
    },
    shadow: {
        width: ScreenConfgs.Screen_Width,
        height: ScreenConfgs.getHeight(10),
        backgroundColor: '#F1F1F1'
    },
    item: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        // width: width, height: 50,
    },
    item_top: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: ScreenConfgs.Screen_Width,
        height: ScreenConfgs.getHeight(45)
    },
    item_line: {
        width: ScreenConfgs.Screen_Width,
        // height: StyleSheet.hairlineWidth,该用来定义当前平台最细的宽度。该属性用来设置边框或者两个组件之间的分割线,android有时不显示
        height:ScreenConfgs.getHeight(1),
        backgroundColor: '#aaaaaaaa',
        // marginTop: 10,
    },
    item_icon: {
        width: ScreenConfgs.getWidth(15),
        height: ScreenConfgs.getHeight(15),
        margin: ScreenConfgs.getWidth(10)
    },
    item_arrow: {
        width: ScreenConfgs.getWidth(15),
        height: ScreenConfgs.getHeight(15),
        margin: ScreenConfgs.getWidth(10)
    },
    item_title: {
        fontSize: ScreenConfgs.getWidth(25)
    },
    item_desc: {
        fontSize: ScreenConfgs.getWidth(13)
    },
    item_left: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    item_right: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    bottom: {
        width: ScreenConfgs.Screen_Width,
        height: ScreenConfgs.getHeight(80),
        marginBottom: ScreenConfgs.getHeight(40),
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    bottom_info: {
        fontSize: ScreenConfgs.getWidth(13),
        alignSelf: 'center'
    },
    bottom_info_num: {
        fontSize: ScreenConfgs.getWidth(13),
        alignSelf: 'center',
        color: '#2298ED'
    }
});


function mapStateToProps(state) {
    const {loginIn, userCompanyMenu} = state;
    return {loginIn, userCompanyMenu}
  }
  
  export default connect(mapStateToProps)(MineHome);