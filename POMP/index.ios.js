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
    TextInput
} from 'react-native';

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
            </View>
        );
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
    }
});

AppRegistry.registerComponent('POMP', () => POMP);
