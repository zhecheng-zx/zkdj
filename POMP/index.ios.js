/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    Navigator
} from 'react-native';
import Home from './iosView/views/home/firstJs';

class POMP extends Component {
    render() {
        let defaultName = 'Home';
        let defaultComponent = Home;
        return (
            <Navigator
                initialRoute={{name: defaultName, component: defaultComponent}}
                configureScene={(route)=> {
                    return Navigator.SceneConfigs.VerticalDownSwipeJump;
                }}
                renderScene={(route, navigator)=> {
                    let Component = route.component;
                    return <Component {...route.params} navigator={navigator}/>
                }}
            />
        )
    }
}

AppRegistry.registerComponent('POMP', () => POMP);
