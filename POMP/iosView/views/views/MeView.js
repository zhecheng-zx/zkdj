/**
 * Created by jiahailiang on 16/10/13.
 */
import React from 'react';
import {View,Text} from 'react-native';
import NavigationBar from 'react-native-navbar';
export default class StewardView extends React.Component {
    render (){
        const rightButtonConfig = {
            title: '功能',
            handler: () => alert('点击效果'),
        };
        const titleConfig = {
            title: '我',
        };
        return (
            <View style={{ flex: 1, }}>
                <NavigationBar
                    title={titleConfig}
                    rightButton={rightButtonConfig}
                    tintColor={'rgb(61,171,236)'}/>
                <Text>第四页</Text>
            </View>
        );
    }

}