/**
 * Created by jiahailiang on 16/9/14.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableHighlight
} from 'react-native';
/*
class TouchableButton extends Component {
    render() {
        return (
            <TouchableHighlight
                underlayColor={this.props.underlayColor}
                activeOpacity={0.5}
                style={this.props.style}
                onPress={this.props.onPress}
            >
                <Text style={{fontSize:16,color:'#fff'}}>{this.props.text}</Text>
            </TouchableHighlight>
        );
    }
}
module.exports = TouchableButton;*/
/*
****作用定义一个模块，在别的地方用。
* 上面是ES5和ES6的混合的写法   ES5让模块给别的地方用的方法是   module.exports= 模块名称；
* 引用的方法是：var 模块名称=require(“路径/文件名”)
* 下面的是用ES6写的     使用 export default
* 引用的话   使用 import 自定义名称 from 路径/名称*/
/******定义组件类的方法******
 * ES5
 * var 组件名=React.createClass({……});
 * ES6
 * class 组件名 extends Component{};
 * */
/***************给组件定义方法******************
 * ES5
 * var 组件名 = React.createClass({
 *      方法名 : function(){
 *      },
 *      render:function(){
 *          return (
 *              ……
 *          );
 *      }，
 * });
 * ES6
 * class 组件名 extends Component{
 *      方法名(){
 *      }
 *      render(){
 *          return (
 *              ……
 *          );
 *      }
 * }
 * */
/********定义组件的属性类型和默认属性*******
 * static defaultProps      默认属性
 * static propTypes         属性类型
 *ES6 ---举个栗子
 * class 组件名 extends Component{
 *    static defaultProps = {
 *        autoPlay: false,
 *        maxLoops: 10,
 *    };  // 注意这里有分号
 *    static propTypes = {
 *        autoPlay: React.PropTypes.bool.isRequired,
 *        maxLoops: React.PropTypes.number.isRequired,
 *        posterFrameSrc: React.PropTypes.string.isRequired,
 *        videoSrc: React.PropTypes.string.isRequired,
 *    };  // 注意这里有分号
 *    render() {
 *        return (
 *            <View />
 *        );
 *    } // 注意这里既没有分号也没有逗号
 * }
 *
 * */
/*********初始化state**********
 * ES6
 * class 组件名 extends Component{
 *      constructor(props){
 *          super(props);
 *          this.state = {
 *              loopsRemaining:this.props.maxLoops;
 *          };
*       }
 * }
 * */
export default class TouchableButton extends Component{
    render(){
        return(
            <TouchableHighlight
                underlayColor={this.props.underlayColor}
                activeOpacity={0.5}
                style={this.props.style}
                onPress = {this.props.onPress}
            >
                <Text style={{fontSize:16,color:'#ffffff'}}>{this.props.text}</Text>
            </TouchableHighlight>
        )
    }
}