/**
 * Created by jiahailiang on 2016/10/25.

import React,{Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    Alret
} from 'react-native';
import NavigationBar from 'react-native-navbar';
export default class StewardView extends React.Component {

    render (){
        const rightButtonConfig = {
            title: '功能',
            handler: () => alert('点击效果'),
        };
        const backButton = {
            title: '返回',
            // navigator:() => pop(),
            onPress:()=>{
                const { navigator } = this.props;
                if (navigator) {
                    navigator.pop();
                }
            }
        };
        const titleConfig = {
            title: '今日舆情',
        };

        return (
            <View>
                <View style={{ flex: 1,}}>
                    <NavigationBar
                        title={titleConfig}
                        rightButton={rightButtonConfig}
                        leftButton={backButton}
                        tintColor={'rgb(61,171,236)'}/>
                </View>
                <View style={styles.flex4}>
                    <Image source={require('../../../images/TabBarImages/contact_bg.png')}
                           style={styles.meStyle}/>
                    <View>
                        <Text style={styles.textStyle4}>个人信息</Text>
                    </View>
                </View>
                <View style={styles.flex4}>
                    <Image source={require('../../../images/TabBarImages/contact_bg.png')}
                           style={styles.meStyle}/>
                    <View>
                        <Text style={styles.textStyle4}>套餐信息</Text>
                    </View>
                </View>
            </View>
        );
        // function onJump(){
        //     const { navigator } = this.props;
        //     if (navigator) {
        //         navigator.pop();
        //     }
        // }
    }
}
const styles = StyleSheet.create({

    flex4:{
        flex:1,
        flexDirection:'row',
        backgroundColor:'blue'
    },
    meStyle:{
        width:64,
        height:64,
        top:0
    },
    textStyle4:{
        flexDirection:'column',
        top:5,
        fontSize:36,
    }
});
 */
//图表
/**/
import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    Dimensions
} from 'react-native'
import Chart from 'react-native-chart';
import {NavGoBack} from './common/NavGoBack'
import NavigationBar from 'react-native-navbar';

class SimpleChart extends Component {
    constructor (props) {
        super (props);
        this.buttonGoBack = this.buttonGoBack.bind(this);
    }
    buttonGoBack(){
        const {navigator} = this.props;
        return NavGoBack(navigator);
    }
    render() {
        const leftButtonConfig = {
            title: '返回',
            handler: () => this.buttonGoBack(),
        };
        const titleConfig = {
            title: '今日舆情',
        };
        const { width,height } = Dimensions.get('window');

        return (
            <View style={styles.container}>
                <View>
                    <NavigationBar
                        title={titleConfig}
                         leftButton={leftButtonConfig}
                        tintColor={'rgb(61,171,236)'}/>
                </View>
                <View style={{justifyContent:'center',alignItems:'center'}}>
                <Chart
                    style={styles.chart}
                    data={data}
                    verticalGridStep={5}
                    type='bar'
                    showDataPoint={true}
                    color={'#e1cd00'}
                />
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: 'white',
        flexDirection:'column'
    },
    chart: {
        height:200,
        width:300
    },
});

const data = [
    [0, 1],
    [1, 3],
    [3, 7],
    [4, 9],
];

export default  SimpleChart;
