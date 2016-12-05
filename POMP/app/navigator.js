import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Navigator
} from 'react-native';
import Main from './uiVIew/main';
export default class navigator extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let defaultName = 'Main';
        let defaultComponent = Main;
        return (
            <Navigator
                initialRoute = {{name : defaultName , component: defaultComponent}}
                configureScene = {(route) => {
                    return Navigator.SceneConfigs.VerticalDownSwipeJump;
                }}
                renderScene={(route,navigator) => {
                    let Component = route.component;
                    return <Component {...route.params} navigator = {navigator} />
                }}
            />
        );
    }

};