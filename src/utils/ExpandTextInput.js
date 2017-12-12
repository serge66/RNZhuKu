/*
    by selwyn --- 2017.09.11
    动态自适应textInut 

    state {
        multiline ：是否换行显示
        extValue ：初始值
        editable ：是否可编辑
        placeholder ：占位文字
    }
    props {
        title ：标题
        marginEdge ：用于TextInput上下留白高度 缺省值 ScreenConfgs.getHeight(10)
        secureTextEntry ：是否加密显示 缺省false
        clearButtonMode ：显示清空按钮方式 缺省'never'  枚举值： 'never' | 'while-editing' | 'unless-editing' | 'always'
        keyboardType ： * enum("default", 'numeric', 'email-address', "ascii-capable", 'numbers-and-punctuation', 'url', 'number-pad', 'phone-pad', 'name-phone-pad', 'decimal-pad', 'twitter', 'web-search')
                        * Determines which keyboard to open, e.g.numeric.
                        * The following values work across platforms: - default - numeric - email-address - phone-pad
    }

    inputMode ：输入类型 
    枚举值 {
        input 普通输入
        select 选择类型
        mutilInput 多行输入
    }
*/

import React, { Component } from 'react';
import {StyleSheet, Text, View, Platform } from 'react-native';

import { AutoGrowingTextInput } from 'react-native-autogrow-textinput';
import {ScreenConfgs} from '../utils/ScreenUtil';
import PropTypes from 'prop-types';

export default class ExpandTextInput extends Component {

    constructor(props) {
        super(props);

        this.state = {
            textValue: this.props.textValue,
            inputMode: this.props.inputMode,
            multiline: this.props.multiline,
            placeholder: this.props.placeholder,
            editable: this.props.editable,
        }
    }

    componentDidMount() {

        if (this.state.inputMode == 'input') {

            this.setState({
                multiline: false,
                placeholder: '请输入' + this.props.title,
                editable: true,
            })
        }
        else if (this.state.inputMode == 'select'){

            this.setState({
                multiline: true,
                placeholder: '请选择' + this.props.title,
                editable: false,
            })
        }
        else if (this.state.inputMode == 'mutilInput') {

            this.setState({
                multiline: true,
                placeholder: '请输入' + this.props.title,
                editable: true,
            })
        }
    }

    render() {
        return (
            <View style={styles.textInputContainer}>
                <Text style={{color:'red'}}>
                    {this.props.require === true ? '*':''}
                </Text>
                <Text style={styles.titleStyle}>
                    {this.props.title}
                </Text>
                <AutoGrowingTextInput
                    underlineColorAndroid='transparent'
                    keyboardType={this.props.keyboardType}
                    multiline={this.state.multiline}
                    clearButtonMode={this.props.clearButtonMode}
                    secureTextEntry={this.props.secureTextEntry}
                    value={this.state.textValue}
                    onChange={(event) => this._onChange(event)}
                    style={[styles.textInput, { marginTop: this.props.marginEdge, marginBottom: this.props.marginEdge}]}
                    placeholder={this.state.placeholder}
                    placeholderTextColor='#C7C7CD'
                    editable={this.state.editable}
                    ref={(r) => { this._textInput = r; }}
                    minHeight={28}
                    initialHeight={28}
                />
            </View>
        );
    }

    _onChange(event) {
        this.setState({ textValue: event.nativeEvent.text || '' });
        if (this.props.textCallback){
            this.props.textCallback(event.nativeEvent.text || '')
        }
    }
}

ExpandTextInput.defaultProps = {
    textValue: '',
    placeholder: '',
    multiline: true,
    editable: true,
    marginEdge: ScreenConfgs.getHeight(5),
    secureTextEntry: false,
    clearButtonMode: 'never',
}

ExpandTextInput.propTypes = {
    title: PropTypes.string,
    multiline: PropTypes.bool,
    editable: PropTypes.bool,
    secureTextEntry: PropTypes.bool,
}

const IsIOS = Platform.OS === 'ios';
const styles = StyleSheet.create({
    textInputContainer: {
        flexDirection: 'row',
        paddingLeft: ScreenConfgs.getWidth(15),
        paddingRight: ScreenConfgs.getWidth(15),
        backgroundColor:'white',
        alignItems:'center',
        flex:1
    },

    titleStyle:{
        fontSize:16,
        color:'#333333',
    },

    textInput: {
        marginLeft: ScreenConfgs.getWidth(10),
        paddingLeft: 5,
        paddingRight:5,
        fontSize: 16,
        flex: 1,
        alignSelf:'center'
    },
});
