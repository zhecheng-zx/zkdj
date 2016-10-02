/**
 * Created by zx on 2016/10/2.
 */
import React from 'react';
import {
    View,
    Navigator,
    Text,
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
            <View>
                <Text>获得参数：id={this.state.id}</Text>
                <TouchableOpacity onPress={this._pressButton.bind(this)}>
                    <Text>点击跳回</Text>
                </TouchableOpacity>
            </View>
        );
    }
}