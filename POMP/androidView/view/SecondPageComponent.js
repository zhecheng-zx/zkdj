/**
 * Created by zx on 2016/10/2.
 */
import React from 'react';
import {
    View,
    Navigator,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

const USER_MODELS={
    1:{name:'mot',age:23},
    2:{name:'测试',age:25}
};
import FirstPageComponent from './FirstPageComponent';

export default class SecondPageComponent extends React.Component{
    constructor(props){
        super(props);
        this.state={
            id:null
        }
    }
    componentDidMount(){
        //这里获取从FirstPageComponent传递来的参数 id;
        this.setState({
            id:this.props.id
        });
    }
    _pressButton(){
        const {navigator}=this.props;
        if(this.props.getUser){
            let user=USER_MODELS[this.props.id];
            this.props.getUser(user);
        }
        if(navigator){
            navigator.pop();
        }
    }
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.textA}>获得参数：id={this.state.id}</Text>
                <TouchableOpacity onPress={this._pressButton.bind(this)}>
                    <Text style={styles.textA}>点击跳回</Text>
                </TouchableOpacity>
            </View>
        );
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