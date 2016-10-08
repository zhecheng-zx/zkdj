/**
 * Created by zx on 2016/10/1.
 */
import React,{Component} from 'react';
import {
    AppRegistry,
    Alert,
    Navigator,
    StyleSheet,
    TextInput,
    Text,
    View,
    Image
} from 'react-native';
import TouchableButton from '../../iosView/views/util/button';
import FirstPageComponent from './FirstPageComponent';
class IndexView extends Component{
    render() {
        return (
            <View style={styles.container}>
                <Image source={require('../../images/login/logo.png')} style={styles.logo}></Image>
                <View style={styles.border}>
                    <Image source={require('../../images/login/userIcon.png')} style={styles.username}></Image>
                    <TextInput placeholder='用户名' name='userName' placeholderTextColor='#999999' style={styles.inputText} onChangeText={this._getUserName}></TextInput>
                </View>
                <View style={styles.border}>
                    <Image source={require('../../images/login/pwdIcon.png')} style={styles.password}></Image>
                    <TextInput placeholder='密码' name="passWord" defaultValue="" secureTextEntry={true} placeholderTextColor='#999999' style={styles.inputText} onChangeText={this._getPassword}></TextInput>
                </View>
                <View>
                    <TouchableButton
                        underlayColor='#4169e1'
                        style={styles.style_view_button}
                        onPress={this._home.bind(this)}
                        text='登录有点击效果'>
                    </TouchableButton>
                </View>
            </View>
        );
    }
    constructor(props){
        super(props);
        this._getUserName=this._getUserName.bind(this);
        this._getPassword=this._getPassword.bind(this);
    }
    _getUserName(val){
        var userName = val;
        this.setState({
            userName: userName
        });
    }
    _getPassword(val){
        var password = val;
        this.setState({
            password: password
        });
    }
    _home(){
        //Alert.alert("提示","你点击了登录按钮！");
        let _this=this
        const {navigator}=this.props;
        if(navigator){
            navigator.push({
                name : 'FirstPageComponent',
                component:FirstPageComponent
            });
        }
    }
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        //justifyContent: 'center',
        paddingTop:50,
        alignItems: 'center',
        backgroundColor: '#3dabec'
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
        backgroundColor:'transparent'
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
        paddingLeft:10,
        paddingRight:10,
        marginTop:20,
        marginLeft:10,
        marginRight:10,
        backgroundColor:'#63B8FF',
        borderColor:'#5bc0de',
        width:344,
        height:45,
        borderRadius:23,
        justifyContent: 'center',
        alignItems: 'center',
    }
});
module.exports=IndexView;