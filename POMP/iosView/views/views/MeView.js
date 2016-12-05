/**
 * Created by jiahailiang on 16/10/13.
 */
import React,{Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    ListView,
    TouchableOpacity,
    Dimensions
} from 'react-native';
import NavigationBar from 'react-native-navbar';
import px2dp from '../util/px2dp'
//import zhaixin from './common/zhaixian'
var ScreenWidth = Dimensions.get('window').width;

export default class MeView extends React.Component {
    constructor (props){
        super(props);

    }
    JumpAction (title) {
        var _this = this;
        const {navigator} = this.props;
        if (navigator) {
            navigator.push({
                name:'',
                //component:,
                params:{
                    title:title,
                    Daliy:Daliy,
                    getResult:function (myMessage) {
                        _this.setState({
                            resultMessage:myMessage,
                        })
                    }
                }
            })
        }
    }

    render (){
        const rightButtonConfig = {
            title: '功能',
            handler: () => alert('点击效果'),
        };
        const titleConfig = {
            title: '我'
        };

        return (
            <View style={{backgroundColor:'#F2F2F2',flex:1,flexDirection:'column'}}>
                <View>
                    <NavigationBar
                    title={titleConfig}
                    rightButton={rightButtonConfig}
                    tintColor={'rgb(61,171,236)'}/>
                </View>
                <View style={{flexDirection:'column',alignItems:'flex-start'}}>
                    <View style={styles.sampleViewStyle}>
                        <TouchableOpacity onPress={this.JumpAction.bind(this,'个人信息')} style={{flexDirection:'row'}}>
                            <Image source={require('../../../images/login/gerenxinxi.png')} style={styles.imageStyle}/>
                            <Text style={styles.textStyle}>个人信息</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.mb10}>
                        <TouchableOpacity onPress={this.JumpAction.bind(this,'套餐信息')} style={{flexDirection:'row'}}>
                            <Image source={require('../../../images/login/book.png')} style={styles.imageStyle}/>
                            <Text style={styles.textStyle}>套餐信息</Text>

                        </TouchableOpacity>
                    </View>
                    <View style={styles.sampleViewStyle}>
                        <TouchableOpacity onPress={this.JumpAction.bind(this,'我的星标')} style={{flexDirection:'row'}}>
                            <Image source={require('../../../images/login/start.png')} style={styles.imageStyle}/>
                            <Text style={styles.textStyle}>我的星标</Text>

                        </TouchableOpacity>
                    </View>
                    <View style={styles.mb10}>
                        <TouchableOpacity onPress={this.JumpAction.bind(this,'专报信息')} style={{flexDirection:'row'}}>
                            <Image source={require('../../../images/login/zhuanbao.png')} style={styles.imageStyle}/>
                        </TouchableOpacity>
                        <Text style={styles.textStyle}>专报信息</Text>
                    </View>
                    <View style={styles.sampleViewStyle}>
                        <TouchableOpacity onPress={this.JumpAction.bind(this,'文章导控')} style={{flexDirection:'row'}}>
                            <Image source={require('../../../images/login/wenzhangguanli.png')} style={styles.imageStyle}/>
                        </TouchableOpacity>
                        <Text style={styles.textStyle}>文章导控</Text>
                    </View>
                    <View style={styles.mb10}>
                        <TouchableOpacity onPress={this.JumpAction.bind(this,'事件导控')} style={{flexDirection:'row'}}>
                            <Image source={require('../../../images/login/shijian.png')} style={styles.imageStyle}/>
                        </TouchableOpacity>
                        <Text style={styles.textStyle}>事件导控</Text>
                    </View>
                    <View style={styles.sampleViewStyle}>
                        <TouchableOpacity onPress={this.JumpAction.bind(this,'公告')} style={{flexDirection:'row'}}>
                            <Image source={require('../../../images/login/gonggaoa.png')} style={styles.imageStyle}/>
                        </TouchableOpacity>
                        <Text style={styles.textStyle}>公告</Text>
                    </View>
                    <View style={styles.mb10}>
                        <TouchableOpacity onPress={this.JumpAction.bind(this,'帮助中心')} style={{flexDirection:'row'}}>
                            <Image source={require('../../../images/login/wen.png')} style={styles.imageStyle}/>
                        </TouchableOpacity>
                        <Text style={styles.textStyle}>帮助中心</Text>
                    </View>
                    <View style={styles.sampleViewStyle}>
                        <TouchableOpacity onPress={this.JumpAction.bind(this,'退出系统')} style={{flexDirection:'row'}}>
                            <Image source={require('../../../images/login/no.png')} style={styles.imageStyle}/>
                            <Text style={styles.textStyle}>退出系统</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );


    }
}
const styles = StyleSheet.create({
    sectionStyle:{
        backgroundColor:'gray',
        height:px2dp(25)
    },
    cellStyle:{
        flexDirection:'row',
        borderBottomColor:'#CCCCCC',
        borderBottomWidth:1,
        alignItems:'center'
    },
    imageStyle:{
        width:px2dp(70),
        height:px2dp(70),
        backgroundColor:'red',
        margin:px2dp(20)

    },
    textStyle:{
        marginLeft:1,
        alignSelf:'center',
        fontSize:px2dp(14)
    },
    imageStyle:{
        width:px2dp(20),
        height:px2dp(20),
        margin:px2dp(10),
    },
    sampleViewStyle:{
        flexDirection:'row',
        backgroundColor:'#FFF',
        width:ScreenWidth,
        borderBottomWidth:1,
        borderBottomColor:'#F2F2F2'
    },
    mb10:{
        marginBottom:px2dp(10),
        flexDirection:'row',
        backgroundColor:'#FFF',
        width:ScreenWidth
    }

});

