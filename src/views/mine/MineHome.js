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
import MyComp from './MyCompanyView';

let thiz;
class MineHome extends React.Component {

    constructor(props) {
        super(props);
        thiz = this;
    }

    _gotoMyCompany() {
        thiz
            .props
            .navigation
            .navigate('MyCompany');
        // console.log('企业切换成功');

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
                <ScrollView key={'scroll'} horizontal={false} scrollEnabled={true}>
                    <View style={[styles.contentContainer, styles.flex, styles.container]}>
                        <View style={[styles.top]}>
                            <View>
                                <TouchableOpacity
                                    activeOpacity={global.BaseAppConfigs.ActiveOpacityNum}
                                    onPress={() => this._gotoPeopleCenter()}>
                                    <Image
                                        source={require('../../assets/images/mine/default_head_portrait.png')}
                                        // : require('../../assets/img/login/Home_PageView_Bg.png')}
                                        style={styles.header}
                                        resizeMode={'cover'}
                                        onLoaded={() => console.log('Image was loaded!')}
                                        onError={() => {
                                            console.log('myView图片加载出错')
                                        }}/>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.info}>
                                <View style={styles.name_post}>
                                    <View>
                                        <Text style={styles.name}>{
                                            userCompanyMenu.data&&userCompanyMenu.data.data
                                            &&userCompanyMenu.data.data.user
                                            &&userCompanyMenu.data.data.user.f_name
                                            ?userCompanyMenu.data.data.user.f_name
                                            :''
                                        }</Text>
                                    </View>
                                    <View>
                                        <Text style={styles.post}>系统管理员</Text>
                                    </View>
                                </View>
                                <View style={styles.company_layout}>
                                    <Text style={styles.company}>筑库</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.shadow}/>

                        <TouchableOpacity
                            activeOpacity={global.BaseAppConfigs.ActiveOpacityNum}
                            onPress={() => this._gotoMyCompany()}>
                            <View style={styles.item}>
                                <View style={styles.item_top}>
                                    <View style={styles.item_left}>
                                        <View>
                                            <Image
                                                style={styles.item_icon}
                                                source={require('../../assets/images/mine/setting_mycompany.png')}/>
                                        </View>
                                        <View>
                                            <Text style={styles.item_title}>我的企业</Text>
                                        </View>
                                    </View>
                                    <View style={styles.item_right}>
                                        <View>
                                            <Text style={styles.item_desc}>切换加入的企业</Text>
                                        </View>
                                        <View>
                                            <Image
                                                style={styles.item_arrow}
                                                source={require('../../assets/images/mine/listitem_arrow.png')}/>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.item_line}></View>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            activeOpacity={global.BaseAppConfigs.ActiveOpacityNum}
                            onPress={() => this._gotoHelp()}>
                            <View style={styles.item}>
                                <View style={styles.item_top}>
                                    <View style={styles.item_left}>
                                        <View>
                                            <Image
                                                style={styles.item_icon}
                                                source={require('../../assets/images/mine/setting_help.png')}/>
                                        </View>
                                        <View>
                                            <Text style={styles.item_title}>新手帮助</Text>
                                        </View>
                                    </View>
                                    <View style={styles.item_right}>
                                        <View>
                                            <Text style={styles.item_desc}></Text>
                                        </View>
                                        <View>
                                            <Image
                                                style={styles.item_arrow}
                                                source={require('../../assets/images/mine/listitem_arrow.png')}/>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.item_line}></View>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            activeOpacity={global.BaseAppConfigs.ActiveOpacityNum}
                            onPress={() => this._gotoSettings()}>
                            <View style={styles.item}>
                                <View style={styles.item_top}>
                                    <View style={styles.item_left}>
                                        <View>
                                            <Image
                                                style={styles.item_icon}
                                                source={require('../../assets/images/mine/setting_settings.png')}/>
                                        </View>
                                        <View>
                                            <Text style={styles.item_title}>设置</Text>
                                        </View>
                                    </View>
                                    <View style={styles.item_right}>
                                        <View>
                                            <Text style={styles.item_desc}></Text>
                                        </View>
                                        <View>
                                            <Image
                                                style={styles.item_arrow}
                                                source={require('../../assets/images/mine/listitem_arrow.png')}/>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.item_line}></View>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            activeOpacity={global.BaseAppConfigs.ActiveOpacityNum}
                            onPress={() => this._gotoFeedBack()}>
                            <View style={styles.item}>
                                <View style={styles.item_top}>
                                    <View style={styles.item_left}>
                                        <View>
                                            <Image
                                                style={styles.item_icon}
                                                source={require('../../assets/images/mine/setting_feedback.png')}/>
                                        </View>
                                        <View>
                                            <Text style={styles.item_title}>意见反馈</Text>
                                        </View>
                                    </View>
                                    <View style={styles.item_right}>
                                        <View>
                                            <Text style={styles.item_desc}></Text>
                                        </View>
                                        <View>
                                            <Image
                                                style={styles.item_arrow}
                                                source={require('../../assets/images/mine/listitem_arrow.png')}/>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.item_line}></View>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            activeOpacity={global.BaseAppConfigs.ActiveOpacityNum}
                            onPress={() => this._gotoService()}>
                            <View style={styles.item}>
                                <View style={styles.item_top}>
                                    <View style={styles.item_left}>
                                        <View>
                                            <Image
                                                style={styles.item_icon}
                                                source={require('../../assets/images/mine/setting_service.png')}/>
                                        </View>
                                        <View>
                                            <Text style={styles.item_title}>客服</Text>
                                        </View>
                                    </View>
                                    <View style={styles.item_right}>
                                        <View>
                                            <Text style={styles.item_desc}>24小时人工客服</Text>
                                        </View>
                                        <View>
                                            <Image
                                                style={styles.item_arrow}
                                                source={require('../../assets/images/mine/listitem_arrow.png')}/>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.item_line}></View>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            activeOpacity={global.BaseAppConfigs.ActiveOpacityNum}
                            onPress={() => this._gotoMyCompany()}>
                            <View style={styles.item}>
                                <View style={styles.item_top}>
                                    <View style={styles.item_left}>
                                        <View>
                                            <Image
                                                style={styles.item_icon}
                                                source={require('../../assets/images/mine/setting_recom.png')}/>
                                        </View>
                                        <View>
                                            <Text style={styles.item_title}>推荐筑库</Text>
                                        </View>
                                    </View>
                                    <View style={styles.item_right}>
                                        <View>
                                            <Text style={styles.item_desc}>分享给好友一起体验</Text>
                                        </View>
                                        <View>
                                            <Image
                                                style={styles.item_arrow}
                                                source={require('../../assets/images/mine/listitem_arrow.png')}/>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.item_line}></View>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            activeOpacity={global.BaseAppConfigs.ActiveOpacityNum}
                            onPress={() => this._gotoMyCompany()}>
                            <View style={styles.item}>
                                <View style={styles.item_top}>
                                    <View style={styles.item_left}>
                                        <View>
                                            <Image
                                                style={styles.item_icon}
                                                source={require('../../assets/images/mine/setting_recom.png')}/>
                                        </View>
                                        <View>
                                            <Text style={styles.item_title}>切换内外网</Text>
                                        </View>
                                    </View>
                                    <View style={styles.item_right}>
                                        <View>
                                            <Text style={styles.item_desc}>切换内外网</Text>
                                        </View>
                                        <View>
                                            <Image
                                                style={styles.item_arrow}
                                                source={require('../../assets/images/mine/listitem_arrow.png')}/>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.item_line}></View>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            activeOpacity={global.BaseAppConfigs.ActiveOpacityNum}
                            onPress={() => this._gotoNewFunction()}>
                            <View style={styles.item}>
                                <View style={styles.item_top}>
                                    <View style={styles.item_left}>
                                        <View>
                                            <Image
                                                style={styles.item_icon}
                                                source={require('../../assets/images/mine/setting_recom.png')}/>
                                        </View>
                                        <View>
                                            <Text style={styles.item_title}>新功能</Text>
                                        </View>
                                    </View>
                                    <View style={styles.item_right}>
                                        <View>
                                            <Text style={styles.item_desc}>新功能</Text>
                                        </View>
                                        <View>
                                            <Image
                                                style={styles.item_arrow}
                                                source={require('../../assets/images/mine/listitem_arrow.png')}/>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.item_line}></View>
                            </View>
                        </TouchableOpacity>
                        <View style={styles.bottom}>
                            <Text style={[styles.bottom_info]}>全国服务热线:</Text>
                            <TouchableOpacity
                                activeOpacity={global.BaseAppConfigs.ActiveOpacityNum}
                                onPress={() => this._gotoCallPhone()}>
                                <Text style={[styles.bottom_info_num]}>400-777-3177</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
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
        fontSize: ScreenConfgs.getWidth(15)
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