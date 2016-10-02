/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    Alert,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    Navigator
} from 'react-native';
import fetchJsonp from 'fetch-jsonp';
import TouchableButton from './iosView/views/util/button';
import FirstPageComponent from './androidView/view/FirstPageComponent';
import Index from './androidView/view/index';

class POMP extends React.Component{
    render(){
        let defaultName='Index';
        let defaultComponent=Index;
        return(
            <Navigator
                initialRoute={{name:defaultName,component:defaultComponent}}
                configureScene={(route)=>{
                    return Navigator.SceneConfigs.VerticalDownSwipeJump;
                }}
                renderScene={(route,navigator)=>{
                    let Component=route.component;
                    return <Component {...route.params} navigator={navigator} />
                }}
            />
        )
    }
}

AppRegistry.registerComponent('POMP', () => POMP);
