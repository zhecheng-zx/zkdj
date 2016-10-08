/**
 * Created by zx on 2016/10/2.
 */
import React from 'react';
import {
    View,
    Navigator,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

import SecondPageComponent from './SecondPageComponent';

export default class FirstPageComponent extends React.Component{
    constructor(props){
        super(props);
        this.state={
            id:2,
            user:null
        }
    }
    _pressButton(){
        let _this=this;
        const {navigator} =this.props;
        if(navigator){
            navigator.push({
                name:'SecondPageComponent',
                component:SecondPageComponent,
                //从SecondPageComonent获取user
                getUser: function (user) {
                    _this.setState({
                        user:user
                    });
                    console.log(user);
                }
            });
        }
    }
    render(){
        if(this.state.user){
            return(
                <View style={styles.container}>
                    <Text style={style.text}>用户信息：{JSON.stringify(this.state.user)}</Text>
                </View>
            );
        }else{
            return(
                <View style={styles.container}>
                    <TouchableOpacity onPress={this._pressButton.bind(this)}>
                        <View>
                            <Text style={styles.textA}>查询ID为{this.state.id}的用户信息</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            );
        }
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop:30,
        //justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#3dabec'
    },
    textA:{
        flexDirection:'row',
        width:200,
        height:30,
        color:'blue'
    }
});