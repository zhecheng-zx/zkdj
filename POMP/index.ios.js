/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    Alert
} from 'react-native';
import home from './iosView/views/home/firstJs';
import TouchableButton from  './iosView/views/util/button';

class POMP extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image source={require('./images/login/logo.png')} style={styles.logo}></Image>
                <View style={styles.border}>
                    <Image source={require('./images/login/userIcon.png')} style={styles.username}></Image>
                    <TextInput placeholder='用户名' placeholderTextColor='#999999' style={styles.inputText}></TextInput>
                </View>
                <View style={styles.border}>
                    <Image source={require('./images/login/pwdIcon.png')} style={styles.password}></Image>
                    <TextInput placeholder='密码' defaultValue="" secureTextEntry={true} placeholderTextColor='#999999' style={styles.inputText}></TextInput>
                </View>
                <View  style={styles.style_view_commit}>
                    <Text style={{color:'#fff'}}>
                        登录
                    </Text>
                </View>

                <View>
                    <TouchableButton
                        underlayColor='#4169e1'
                        style={styles.style_view_button}
                        onPress={this._home}
                        onClick = {this._home}
                        text='登录有点击效果'>
                    </TouchableButton>
                </View>
            </View>
        );
    }

    constructor(props) {
        super(props);
        this._home =this._home.bind(this);
    }
    _home (){
       Alert.alert('提示','你点击了登录按钮');

    }
}


const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#3dabec',
    },
    logo:{
        flexDirection:'row',
        width:124,
        height:124
    },
    inputText: {
        width:300,
        height:50,
        fontSize: 14,
        color:"#333",
        borderColor:'transparent',
        backgroundColor:'transparent',
        marginLeft:6,

    },
    border:{
        flexDirection:'row',
        alignItems:'flex-start',
        paddingLeft:10,
        paddingRight:10,
        paddingTop:0,
        marginTop:20,
        backgroundColor: '#6bc5fb',
        borderRadius:50,
        borderTopLeftRadius:50,
        borderTopRightRadius:50,
        borderBottomLeftRadius:50,
        borderBottomRightRadius:50
    },
    username:{
        flexDirection:'row',
        marginTop:14,
        width:24,
        height:23
    },
    password:{
        flexDirection:'row',
        marginTop:12,
        width:24,
        height:28
    },
    style_view_commit:{
        marginTop:15,
        marginLeft:10,
        marginRight:10,
        backgroundColor:'#63B8FF',
        borderColor:'#5bc0de',
        height:45,
        borderRadius:5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    style_view_button:{
        marginTop:15,
        marginLeft:10,
        marginRight:10,
        backgroundColor:'#63B8FF',
        borderColor:'#5bc0de',
        height:45,
        borderRadius:5,
        justifyContent: 'center',
        alignItems: 'center',
    }

});

AppRegistry.registerComponent('POMP', () => POMP);
