/**
 * Created by jiahailiang on 2016/11/25.
 */
import React,{Component} from 'react';
import {
    View,
    Dimensions,
    StyleSheet,
} from 'react-native';
var ScreenWidth = Dimensions.get('window').width;
export default class zhaixian extends Component{
    render(){
        return(
            <View style={styles.zhaixian}></View>
        )
    }
}
const styles = StyleSheet.create({
   zhaixian:{
       height:1,
       width:ScreenWidth,
       backgroundColor:'rgb(242,242,242)'
   }
});