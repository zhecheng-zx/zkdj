/**
 * Created by jiahailiang on 2016/11/16.
 */
import React, {Component} from 'react';
import {
    Text,
    View,
    Image,
    StyleSheet,
    ScrollView,
    Dimensions,
} from 'react-native';
import NavigationBar from 'react-native-navbar';
import {NavGoBack} from './NavGoBack'
import {toastShort} from './ToastUtils'
var ScreenWidth = Dimensions.get('window').width;
export default class ArticleDetails extends Component {
    constructor (props) {
        super (props);
        this.buttonGoBack = this.buttonGoBack.bind(this);
        this.state = {
            message:"",
            title:'',
        }
    }
    componentDidMount(){
        this.setState({
            message:this.props.message,
            title:this.props.title,
        });
    };
    buttonGoBack(){
        const {navigator} = this.props;
        return NavGoBack(navigator);
    };
    startAction(){
        toastShort('添加星标成功');
        // alert('添加星标成功');
    };
    render () {
        const leftButtonConfig = {
            title: '返回',
            handler: () => this.buttonGoBack(),
        };
        const titleConfig = {
            title:this.state.title
        };
        const startButton = {
            title:'关注',
            handler: () => this.startAction(),
        }
        return(

            <View style={ADstyles.bigViewStyles}>
                <View>
                    <NavigationBar
                        title={titleConfig}
                        leftButton={leftButtonConfig}
                        rightButton={startButton}
                        tintColor={'rgb(61,171,236)'}/>
                </View>
                <ScrollView style={{width:ScreenWidth}}>
                    <View style={ADstyles.relatedStyle}>
                        <Text style={{marginLeft:10,marginTop:20}}>作者:</Text>
                        <Text style={{marginLeft:10,marginTop:20}}>贾海亮</Text>
                        <Text style={{marginLeft:10,marginTop:20}}>时间:</Text>
                        <Text style={{marginLeft:10,marginTop:20}}>2016-11-16 14:47:00</Text>
                        <Text style={{marginLeft:10,marginTop:20}}>来源:</Text>
                        <Text style={{marginLeft:10,marginTop:20}}>微信</Text>
                    </View>
                    <View style={ADstyles.relatedStyle}>
                        <Text style={{marginLeft:10,marginTop:20}}>👍</Text>
                        <Text style={{marginLeft:10,marginTop:20}}>199</Text>
                        <Text style={{marginLeft:10,marginTop:20}}>评论数:</Text>
                        <Text style={{marginLeft:10,marginTop:20}}>99</Text>
                    </View>
                    <View style={ADstyles.keywordsStyle}>
                        <View style={{flexDirection:'row'}}>
                            <Text style={{marginLeft:10,marginTop:15,color:'blue'}}>相关词:</Text>
                            <Text style={{marginLeft:10,marginTop:15}}>微软</Text>
                        </View>
                        <View style={{flexDirection:'row',}}>
                            <Text style={{marginLeft:10,marginTop:15,color:'purple'}}>舆情词:</Text>
                            <Text style={{marginLeft:10,marginTop:15,flex:1,marginBottom:15}}>哈哈  哈哈  哈哈 哈哈  哈哈  哈哈  哈哈  哈哈  哈 哈哈  哈哈  哈哈  哈哈  哈哈  哈哈  哈哈  哈哈哈</Text>
                        </View>
                    </View>
                    <View>
                        <Text style={{marginLeft:10,marginRight:10,marginTop:15,fontSize:20}}>{this.state.message},{this.state.title}</Text>
                    </View>
                 </ScrollView>
            </View>
        )
    }
}
const ADstyles = StyleSheet.create({
    relatedStyle:{
        flex:1,
        flexDirection:'row',
    },
    bigViewStyles:{
        flex:1,
        flexDirection:'column',
    },
    keywordsStyle:{

        width:ScreenWidth - 20,
        backgroundColor:'rgb(242,242,242)',
        marginLeft:10,
        marginTop:5,

    },
})