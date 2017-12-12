import React, {Component} from 'react'
import {StyleSheet, View, Image, Text, ImageBackground,
    TouchableOpacity, ToastAndroid, SectionList, FlatList,
    RefreshControl} from 'react-native';
import {connect} from 'react-redux';
import Images from '../../images/ImageList'
import {NavigationActions} from "react-navigation";
import {requestUserCompanyMenuData} from '../../redux/actions/UserCompanyMenuAction';
import {LoginRoutesConfig} from '../../routes/RoutesConfigs';
import ToastUtil from '../../utils/ToastUtils';
let thiz;

var AllMenu = [];
var Dimensions = require('Dimensions');//获取屏幕的宽高
var ScreenWidth = Dimensions.get('window').width;
var ScreenHeight = Dimensions.get('window').height;

class WorkbenchHome extends Component {
  constructor(props) {
    super(props);
    thiz = this;
      this.state = {
          isLoading: false,
      };
  }

  _gotoAppHome() {
    console.log(this)
    let navigateAction = NavigationActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({routeName: LoginRoutesConfig.AppHome})]
    });
      this
          .props
          .screenProps
          .dispatch(navigateAction);
    console.log('---goto AppHome');
  }

  componentDidMount() {

      this._initItem()
      console.log('------------xxxxxxxxxxxxxxyyyyyyyyyyyy');
      console.log(this.props.screenProps);

    console.log('---WorkbenchHome componentDidMount');
    console.log('WorkbenchHome componentDidMount this.props.loginIn.isSuccess:'
      + this.props.loginIn.isSuccess
      + '----this.props.loginIn.status:' + this.props.loginIn.status);

    const {dispatch, loginIn} = this.props;
    if (loginIn.status == 'success' && loginIn.isSuccess && loginIn.data.token) {
      console.log('componentDidMount  token:' + loginIn.data.token)
      thiz
        .props
        .dispatch(requestUserCompanyMenuData(loginIn.data.token));
        // .dispatch(requestUserCompanyMenuData('kkkkk'));
    } else {
      // this._gotoLogin();
      this.timer = setTimeout(() => {
        this._gotoAppHome();
      }, 100);
    }
  }
    _getModuleDefault() {
        const {dispatch, loginIn} = this.props;
        if (loginIn.data.token !== null) {
            var url = 'http://api.test.zhu-ku.com/zhuku/ws/system/sysroleapp/selectUserRoleAll/'
                + "v7r51MVRTcMzE5LB";
            var header = {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json;charset=utf-8',
                    // 'Content-Type': 'multipart/form-data', 'Content-Type': 'application/json',
                },
                mode: 'cors',
                credentials: 'include',
            }

            this.setState({
                isLoading: true
            })
            console.log('url:' + url)
            fetch(url, header)
                .then((response) => {
                    console.log('============')
                    console.log('response:'+response.json())
                    console.log('============')
                    return response.json()

                })
                .then((responseJson) => {

                    if (responseJson.statusCode == '0000') {
                        this._initItem(responseJson.returnData);

                    } else {
                        ToastAndroid.show('获取权限失败：' + responseJson.statusDesc + login.tokenCode, ToastAndroid.SHORT);
                    }
                    this.setState({
                        isLoading: false
                    })
                })
                .catch((error) => {
                    alert(error)
                    this.setState({
                        isLoading: false
                    })
                })
        }
    }
    _renderItem = ({ info }) => null

    _renderSectionHeader = ({ section }) =>
        <View>
          <Text style={styles.viewItemHeader}>{section.title}</Text>
          <FlatList
              data={section.data}
              style={styles.flastList}
              numColumns={4}
              renderItem={this._renderFlatListItem}
              keyExtractor={(item, index) => { item.name }}
          />
        </View>

    _renderFlatListItem = ({ item }) =>
        <TouchableOpacity onPress={item.onPress}>
          <View style={styles.viewRow}>
            <Image source={item.img} style={styles.imageItem} />
            <Text style={styles.textItem}>{item.name}</Text>
          </View>
        </TouchableOpacity>
//   shouldComponentUpdate(nextProps, nextState) {
//     console.log('WorkbenchHome shouldComponentUpdate this.props.loginIn.isSuccess:' + this.props.loginIn.isSuccess
//         + '----this.props.loginIn.status:' + this.props.loginIn.status);
//     console.log('WorkbenchHome shouldComponentUpdate nextProps.loginIn.isSuccess:' + nextProps.loginIn.isSuccess
//         + '----nextProps.loginIn.status:' + nextProps.loginIn.status);
//     // return true;
// }

componentDidUpdate(prevProps, prevState) {
  console.log('---<<<<<<<');
  console.log(this.props.userCompanyMenu);
  console.log('--->>>>>>>>');
  if(this.props&&this.props.userCompanyMenu
    &&this.props.userCompanyMenu.status=='error'){
      ToastUtil.show('登录失效,请重新登录');
      this._gotoAppHome();
  }
  
}


componentWillUnmount() {
  this.timer && clearTimeout(this.timer);
};

  render() {
      return (
          // this.state.isLoading ?
          //     <View style={styles.load}>
          //         <Progress.CircleSnail style={{ margin: 10, alignSelf: 'center' }} color={['red', 'green', 'blue', 'black', 'yellow']} size={30} />
          //         <Text>正在加载...</Text>
          //     </View>
          //     :
          <SectionList
              style={styles.background}
              renderSectionHeader={this._renderSectionHeader}
              renderItem={({ info }) => null}
              sections={AllMenu}
              refreshing={this.state.isLoading}
              onRefresh={this.onRefresh.bind(this)}
              keyExtractor={(item, index) => { item.name }}

          />

      )
  }
    onRefresh() {
        // AllMenu = []
        // thiz._getModuleDefault()
    }
    _initItem() {

        var OAData = []
        var YXData = []
        var CGData = []
        var TJData = []
        //OA模块数据是固定的
        var data0 = { name: '外勤签到', img: Images.oaWQQD, onPress: () => alert('外勤签到') }
        var data1 = { name: '考勤打卡', img: Images.oaKQDK }
        var data2 = { name: '审批', img: Images.oaSP }
        var data3 = { name: '日志', img: Images.oaRZ }
        var data4 = { name: '任务', img: Images.oaRW }
        var data5 = { name: '公告', img: Images.oaGG }
        var data6 = { name: '证书', img: Images.oaZS }
        var data7 = { name: '印章', img: Images.oaYZ }
        var data8 = { name: '资产', img: Images.oaZC }
        var data9 = { name: '车辆', img: Images.oaCL }
        //把数据添加到办公子模块
        OAData.push(data0)
        OAData.push(data1)
        OAData.push(data2)
        OAData.push(data3)
        OAData.push(data4)
        OAData.push(data5)
        OAData.push(data6)
        OAData.push(data7)
        OAData.push(data8)
        OAData.push(data9)

        //循环找出拥有权限的模块

                YXData.push({ name: '项目信息', img: Images.yxXMXY })
                YXData.push({ name: '营销任务', img: Images.yxYXRW })
                YXData.push({ name: '同行分析', img: Images.yxTHFX })
                YXData.push({ name: '投标管理', img: Images.yxTBGL })
                YXData.push({ name: '业绩PK', img: Images.yxYJPK })
                YXData.push({ name: '客户看板', img: Images.yxKHKB })
            //采购
                CGData.push({ name: '供应商', img: Images.cgGYS })
                CGData.push({ name: '物资采购', img: Images.cgWZCG })
                CGData.push({ name: '供应商评价', img: Images.cgGYSPJ })
                CGData.push({
                    name: '供应商往来', img: Images.cgGYSWL, onPress: () => alert('供应商往来')
                })
            //统计
                TJData.push({ name: '管理统计', img: Images.tjGLTJ })
                TJData.push({ name: '项目统计', img: Images.tjXMTJ })


        var OAMenu = { key: 0, title: '办公', data: OAData }//把办公子模块添加到办公模块
        var YXMenu = { key: 1, title: '营销', data: YXData }//把营销子模块添加到营销模块
        var CGMenu = { key: 2, title: '采购', data: CGData }//把采购子模块添加到采购模块
        var TJMenu = { key: 3, title: '统计', data: TJData }//把统计子模块添加到统计模块
        AllMenu.push(OAMenu);//讲办公添加到模块集合
        AllMenu.push(YXMenu);//讲营销添加到模块集合
        AllMenu.push(CGMenu);//讲采购添加到模块集合
        AllMenu.push(TJMenu);//讲统计添加到模块集合

    }
}

function mapStateToProps(state) {
  const {loginIn, userCompanyMenu} = state;
  return {loginIn, userCompanyMenu}
}

export default connect(mapStateToProps)(WorkbenchHome);
const styles = StyleSheet.create({
    load: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    background: {
        flex: 1,
        backgroundColor: 'white'
    },

    viewItemHeader: {
        flex: 1,
        backgroundColor: '#eeeeee',
        alignItems: 'center',
        paddingLeft: 20,
        paddingTop: 5,
        paddingBottom: 5,
    },

    viewRow: {
        // flexDirection: 'row',//设置横向布局
        justifyContent: 'center',
        alignItems: 'center',
        width: ScreenWidth / 4,
        padding: 10,
    },

    imageItem: {
        height: 40,
        width: 40,
    },

    textItem: {
        textAlignVertical: 'center',
        color: '#5C5C5C',
        fontSize: 12,
    },

    flastList: {
    },
})