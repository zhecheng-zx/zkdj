
import React, { Component } from 'react';
import {
    ToolbarAndroid,
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    Alert,
} from 'react-native';
import EditView from '../lib/EditView';
import LoginButton from '../lib/LoginButton';
import NetUitl from '../lib/NetUtil';
import TabNavGator from '../../iosView/views/views/TabBarView'
import {toastShort} from '../../iosView/views/views/common/ToastUtils'
export default class LoginActivity extends Component {
    constructor(props) {
        super(props);
        this.userName = "";
        this.password = "";
        this.onPressCallback = this.onPressCallback.bind(this);
    }

    render() {
        return (

            <View style={LoginStyles.loginview}>
                <View style={{flexDirection: 'row',height:100,marginTop:1,
                    justifyContent: 'center',
                    alignItems: 'flex-start',}}>
                    <Image source={require('../../images/login/logo.png') } style={LoginStyles.logo2}/>
                </View>
                <View style={{marginTop:180}}>
                    <EditView  name='输入用户名/注册手机号' onChangeText={(text) => {
                        this.userName = text;
                    }}/>
                    <EditView name='输入密码' onChangeText={(text) => {
                        this.password = text;
                    }}/>
                    <LoginButton name='登录' onPressCallback={this.onPressCallback}/>
                    <Text style={{color:"#4A90E2",textAlign:'center',marginTop:10}} >忘记密码？</Text>
                </View>
            </View>
        )
    }

    onPressCallback = () => {
        if (this.userName === ''){
            toastShort('用户名不能为空...')
            return;
        }
        if (this.password ===''){
            toastShort('密码不能为空...')
            return;
        }
        //这是新建数组
        let formData = new FormData();
        formData.append("uname",this.userName);
        formData.append("upwd",this.password);
        let url = "http://172.168.30.38:3000/login";
        NetUitl.postJson(url,formData,(result1) => {
            if (result1.status == 0) {
                this.onLoginSuccess();
                 toastShort(result1.msg);
            } else {
                toastShort(result1.msg);
            }
        })

    };
    //跳转到第二个页面去
    onLoginSuccess(){
        const { navigator } = this.props;
        if (navigator) {
            navigator.push({
                name : 'TabNavGator',
                component : TabNavGator,
            });
        }
    }
}

const LoginStyles = StyleSheet.create({
    loginview: {
        flex: 1,
        padding: 50,
        backgroundColor: '#3dabec'
    },
    logo2:{
        flexDirection:'row',
        width:200,
        height:200
    },
});
