/**
 * Created by jiahailiang on 16/10/13.
 */
import React,{Component} from 'react';
import {
    View,
    Text,
    Image,
    ListView,
    StyleSheet,
    TouchableOpacity,
    Dimensions,
        } from 'react-native';
import NavigationBar from 'react-native-navbar';
import Affair from './Affair'
import AffairTow from './AffairTow'
//import TouchableButton from '../util/button';
var ScreenWidth = Dimensions.get('window').width;
export default class SpecialView extends Component {
    constructor(props) {
        super(props);
        var ds2 = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        dataSource: ds2.cloneWithRows(this._genRows()),
        this.state = {
            message:"",
            title:'',
            dataSource: ds2.cloneWithRows(this._genRows()),
        }
    };
    _genRows(){
        const dataBlob = [];
        for(let i = 0 ; i< 40 ; i ++ ){
            dataBlob.push(
                {title:'三胖哥第' + ( i + 1 ) + '次吹牛事件',
                    text:'起止时间: 2016-11-16 13:00:00 -- 2017-11-16 18:00:00' +i
                }
            );
        }
        return dataBlob;
    };
    _pressRow(title){
        var _this = this;
        const {navigator} = this.props;
        if (navigator) {
            navigator.push({
                name:'Affair',
                component:Affair,
                params:{
                    message:'朴槿惠-->朴小姐',
                    'title':title,
                    getResult:function (myMessage) {
                        _this.setState({
                            resultMessage:myMessage,
                        })
                    }
                }
            })
        }
    };
    componentDidMount(){
        this.setState({
            message:this.props.message,
            title:this.props.title,
            //dataSource: this.state.dataSource,
        });
        this._genRows();
    };
    _PressButton (title, Daliy) {
        var _this = this;
        const {navigator} = this.props;
        if (navigator) {
            navigator.push({
                name:'AffairTow',
                component:AffairTow,
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
    _renderRow(rowData, sectionID, rowID,highlightRow){
        return (
            <TouchableOpacity onPress={()=>this._pressRow(rowData.title)}>
                <View  style={styles.rightViewStyle}>
                    <View>
                        <Text style={styles.titleStyle}>
                            {rowData.title}
                        </Text>
                        <Text style={styles.textStyle}>
                            {rowData.text}
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    };
    render() {

        const titleConfig = {
            title:'专项舆情'
        };
        return (
            <View style={styles.container}>
                <View>
                    <NavigationBar
                        title={titleConfig}
                        tintColor={'rgb(61,171,236)'}/>
                </View>
                <View style={styles.menuCenter1}>
                        <View>
                            <TouchableOpacity onPress={this._PressButton.bind(this,'今日舆情','日报')}>
                                <Image source={require('../../../images/login/tian.png')}
                                       style={styles.buttonImageStyle2}/>
                                <Text style={styles.textCenter2}>今日舆情</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity onPress={this._PressButton.bind(this,'本周舆情','周报')}>
                                <Image source={require('../../../images/login/zhou.png')}
                                       style={styles.buttonImageStyle2}/>
                                <Text style={styles.textCenter2}>本周舆情</Text>
                            </TouchableOpacity>
                        </View>
                        <View pagingEnabled={1}>
                            <TouchableOpacity onPress={this._PressButton.bind(this,'本月舆情','月报')}>
                                <Image source={require('../../../images/login/yue.png')}
                                       style={styles.buttonImageStyle2}/>
                                <Text style={styles.textCenter2}>本月舆情</Text>
                            </TouchableOpacity>
                        </View>
                </View>
                <View style={{backgroundColor:'rgb(242,242,242)'}}>
                    <Text style={{fontSize:20,marginBottom:15,marginLeft:10,marginTop:15}}>事件列表</Text>
                </View>
                <View style={{flex:1,}}>
                    <ListView dataSource={this.state.dataSource} //设置数据源
                              renderRow={this._renderRow.bind(this)}//返回法人 cell
                    />
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        flexDirection:'column',

    },
    titleStyle:{
        marginTop:15,
        fontSize:16,
        marginLeft:10,
        marginRight:10,
        flex:1
    },
    textStyle:{
        width:ScreenWidth,
        marginBottom:10,
        marginLeft:10,
        marginTop:10,
        marginRight:10,
        color:'rgb(150,150,150)',

    },
    rightViewStyle:{
        flexDirection:'row',
        borderBottomColor:'#CCCCCC',//cell的分割线
        borderBottomWidth:1
    },
        menuCenter1:{
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
    },
    buttonImageStyle2:{
        width:30,
        height:30,
        alignItems:'center',
        justifyContent:'center',
        marginTop:15,
        alignSelf:'center'
    },
    textCenter2:{
        textAlign:'center',
        fontSize:16,
        marginTop:15,
        marginBottom:15
    },
    selfImageStyle:{
        flex:1,
        width:ScreenWidth/3
    }

});

