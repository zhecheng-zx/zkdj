/**
 * Created by jiahailiang on 16/10/13.
 */
import React from 'react';
import {
    Component,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Alert,
    ScrollView,
    Dimensions,
} from 'react-native';
import NavigationBar from 'react-native-navbar';
import ImageButtonListView from './ImageButtonList';
export default class StewardView extends React.Component {
    constructor(props){
        super (props);
        this.state = {
            resultMessage:'热点',
        };
    }
    PressButton (title) {
        var _this = this;
        const {navigator} = this.props;
        if (navigator) {
            navigator.push({
                name:'ImageButtonListVie',
                component:ImageButtonListView,
                params:{
                    message:'我是从首页来的qweqweqweqweqweqweqweqweq我是从首页来的qweqweqweqweqweqweqweqweq我是从首页来的qweqweqweqweqweqweqweqweq我是从首页来的qweqweqweqweqweqweqweqweq我是从首页来的qweqweqweqweqweqweqweqweq我是从首页来的qweqweqweqweqweqweqweqweq我是从首页来的qweqweqweqweqweqweqweqweq我是从首页来的qweqweqweqweqweqweqweqweq我是从首页来的qweqweqweqweqweqweqweqweq我是从首页来的qweqweqweqweqweqweqweqweq我是从首页来的qweqweqweqweqweqweqweqweq我是从首页来的qweqweqweqweqweqweqweqweq我是从首页来的qweqweqweqweqweqweqweqweq我是从首页来的qweqweqweqweqweqweqweqweq我是从首页来的qweqweqweqweqweqweqweqweq我是从首页来的qweqweqweqweqweqweqweqweq我是从首页来的qweqweqweqweqweqweqweqweq',
                    title:title,
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
            title: '🔍',
            handler: () => alert('点击了搜索按钮'),
        };
        const titleConfig = {
            title: '舆情管家',
        };
        return (
            <View style={{flex:1,flexDirection:'column'}}>
                <View>
                    <NavigationBar
                        title={titleConfig}
                        rightButton={rightButtonConfig}
                        tintColor={'rgb(61,171,236)'}/>
                </View>
                <ScrollView>
                    <View style={styles.flex1}>
                        <Image source={require('../../../images/login/funnel.png')} style={styles.lodou}/>
                        <View style={styles.rightContainer}>
                            <Text style={styles.textaaa}>相关</Text>
                            <Text style={styles.textaaa}>舆情</Text>
                            <Text style={styles.textaaa}>负面</Text>
                            <Text style={styles.textaaa}>预警</Text>
                        </View>
                    </View>
                    <View style={{backgroundColor:'rgb(242,242,242)',}}>
                        <Text></Text>
                    </View>

                    <View style={styles.menuCenter}>
                        <View>
                            <TouchableOpacity onPress={this.PressButton.bind(this,'热点')}>
                            <Image source={require('../../../images/TabBarImages/01.png')}
                                   style={styles.buttonImageStyle}/>
                            <Text style={styles.textCenter}>热点</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity onPress={this.PressButton.bind(this,'相关')}>
                            <Image source={require('../../../images/TabBarImages/02.png')}
                                   style={styles.buttonImageStyle}/>
                            <Text style={styles.textCenter}>相关</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity onPress={this.PressButton.bind(this,'舆情')}>
                            <Image source={require('../../../images/TabBarImages/03.png')} style={styles.buttonImageStyle}/>
                            <Text style={styles.textCenter}>舆情</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.menuCenter2}>
                        <View>
                            <TouchableOpacity onPress={this.PressButton.bind(this,'负面')}>
                            <Image source={require('../../../images/TabBarImages/04.png')} style={styles.buttonImageStyle}/>
                            </TouchableOpacity>
                            <Text style={styles.textCenter}>负面</Text>
                        </View>
                        <View >
                            <TouchableOpacity onPress={this.PressButton.bind(this,'正面')}>
                            <Image source={require('../../../images/TabBarImages/05.png')} style={styles.buttonImageStyle}/>
                            </TouchableOpacity>
                            <Text style={styles.textCenter}>正面</Text>
                        </View>
                        <View>
                            <TouchableOpacity onPress={this.PressButton.bind(this,'预警')}>
                            <Image source={require('../../../images/TabBarImages/06.png')} style={styles.buttonImageStyle}/>
                            </TouchableOpacity>
                            <Text style={styles.textCenter}>预警</Text>
                        </View>
                    </View>
                    <View style={{backgroundColor:'rgb(242,242,242)',marginTop:5}}>
                        <Text style={styles.textStyle3}>栏目分类</Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <Text style={styles.textStyle2}>新媒体</Text>
                        <Text style={styles.textStyle2} onPress={this.PressButton.bind(this,'微博')}>微博舆情</Text>
                        <Text style={styles.textStyle2} onPress={this.PressButton.bind(this,'微信')}>微信舆情</Text>
                    </View>
                    <View style={{backgroundColor:'rgb(242,242,242)',}}>
                        <Text></Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <Text style={styles.textStyle2} onPress={this.PressButton.bind(this,'关注站点信息')}>关注站点信息</Text>
                        <Text style={styles.textStyle2} onPress={this.PressButton.bind(this,'关注站点信息')}>关注站点信息</Text>
                    </View>
                    <View style={{backgroundColor:'rgb(242,242,242)',}}>
                        <Text></Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <Text style={styles.textStyle2} onPress={this.PressButton.bind(this,'关注站点信息')}>关注站点信息</Text>
                        <Text style={styles.textStyle2} onPress={this.PressButton.bind(this,'关注站点信息')}>关注站点信息</Text>
                    </View>
                    <View style={{backgroundColor:'rgb(242,242,242)',}}>
                        <Text></Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <Text style={styles.textStyle2} onPress={this.PressButton.bind(this,'关注站点信息')}>关注站点信息</Text>
                        <Text style={styles.textStyle2} onPress={this.PressButton.bind(this,'关注站点信息')}>关注站点信息</Text>
                    </View>
                    <View style={{backgroundColor:'rgb(242,242,242)',}}>
                        <Text></Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <Text style={styles.textStyle2} onPress={this.PressButton.bind(this,'关注站点信息')}>关注站点信息</Text>
                        <Text style={styles.textStyle2} onPress={this.PressButton.bind(this,'关注站点信息')}>关注站点信息</Text>
                    </View>
                    <View style={{backgroundColor:'rgb(242,242,242)',}}>
                        <Text></Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <Text style={styles.textStyle2} onPress={this.PressButton.bind(this,'关注站点信息')}>关注站点信息</Text>
                        <Text style={styles.textStyle2} onPress={this.PressButton.bind(this,'关注站点信息')}>关注站点信息</Text>
                    </View>
                    <View style={{backgroundColor:'rgb(242,242,242)',}}>
                        <Text></Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <Text style={styles.textStyle2} onPress={this.PressButton.bind(this,'关注站点信息')}>关注站点信息</Text>
                        <Text style={styles.textStyle2} onPress={this.PressButton.bind(this,'关注站点信息')}>关注站点信息</Text>
                    </View>
                </ScrollView>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    lodou:{
        width:245,
        height:240,
    },
    flex1:{
        flexDirection:'row',
        justifyContent:'center',
        marginTop:5
    },
    menuCenter:{
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
         marginTop:10,
        paddingLeft:10,
        paddingRight:10
    },
    menuCenter2:{
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        marginTop:25,
        paddingLeft:10,
        paddingRight:10
    },
    // menuOption:{
    //     flex:1,
    //     flexDirection:'column',
    //     alignItems:'center',
    // },
    textCenter:{
        textAlign:'center',
        fontSize:18
    },
    rightContainer: {
        flexDirection:'column',
        marginTop:22
    },
    textStyle2:{
        color:'rgb(88,164,237)',
        fontSize:20,
        padding:20,
    },
    textStyle3:{
        fontSize:24,
        color:'black',
        marginLeft:20,
        padding:17
    },
    textStyle4:{
        fontSize:24,
        color:'rgb(61,171,236)',
        marginTop:20,
        marginLeft:20,
    },
    buttonImageStyle:{
        width:45,
        height:45,

    },
    textaaa:{
        fontSize:20,
        // marginTop:30,
        alignItems:'flex-start',
        //padding:15,
        paddingTop:30
    }
});
