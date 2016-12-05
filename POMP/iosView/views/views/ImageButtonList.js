/**
 * Created by jiahailiang on 2016/11/15.
 */
import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    Dimensions,
    ListView,

} from 'react-native';
// var Dimensions = require('Dimensions');//获取屏幕的宽高
 var ScreenWidth = Dimensions.get('window').width;
// var ScreenHeight = Dimensions.get('window').height;

import {NavGoBack} from './common/NavGoBack'
import NavigationBar from 'react-native-navbar';
import ModalDropdown from 'react-native-modal-dropdown';
import ADVIew from './common/ArticleDetails'
/*
* 属性（Props）

 Prop	            Type	        Optional	Default	        Description
 disabled	        bool	        Yes	f       alse	        是否禁用组件
 defaultIndex	    number	        Yes	        -1	            初始选择。 -1: 未选中。这个只会影响选项展示的高亮与否，不会改变初始的按钮文字。若要改变按钮初始文字请参考defaultValue。
 defaultValue	    string	        Yes	        Please select...	按钮初始文字。
 options	        arrayOf(string)	Yes	 	                    选项。 传null/undefined则下拉框会显示一个加载图标。
 style	            object	        Yes	 	                    按钮样式。
 textStyle	        object	        Yes	 	                    按钮文字样式。
 dropdownStyle	    object	        Yes	 	                    下拉框样式。
 renderRow	        func	        Yes	 	                    自定义选项行的渲染。 传null/undefined会使用默认的行渲染。
 onDropdownWillShow	func	        Yes	 	                    下拉框显示前触发。 若实现此方法并返回false可以阻止显示。
 onDropdownWillHide	func	        Yes	 	                    下拉框隐藏前触发。 若实现此方法并返回false可以阻止隐藏。
 onSelect	        func	        Yes	 	                    选择选项时触发并返回index和value。若实现此方法并返回false可以阻止选择。


 方法

 Method	                Description
 updatePosition()	    手动更新下拉框位置。如果控件放在scroll view里面，需要在scrollView的onScroll方法中调用此方法。
 show()	                显示下拉框。不会触发onDropdownWillShow。
 hide()	                隐藏下拉框。不会触发onDropdownWillHide。
 select(idx)	        选择指定的选项。不会触发onSelect。
 * */
class HostList extends Component {
    constructor (props) {
        super (props);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.buttonGoBack = this.buttonGoBack.bind(this);
        this.state = {
            message:"",
            title:'',
            dataSource: ds.cloneWithRows(this._genRows()),
        };
        // this.setState({
        //     dataSource: this.state.ds.cloneWithRows(this._genRows()),
        // })
    }
    _genRows(){
        const dataBlob = [];
        for(let i = 0 ; i< 70 ; i ++ ){
            dataBlob.push(
                {title:'没错我就是标题' + i,
                text:'微信 2016-11-16 13:00:00     🔥' +i
                }
            );
        }
        return dataBlob;
    }
    _pressRow(title){
        //alert("我是第"+rowID+'行');
        var _this = this;
        const {navigator} = this.props;
        if (navigator) {
            navigator.push({
                name:'ADView',
                component:ADVIew,
                params:{
                    message:'作词：李宗盛作曲：李宗盛想得却不可得' +
                    ' 你奈人生何该舍的舍不得 ' +
                    '只顾著跟往事瞎扯等你发现时间是贼了' +
                    ' 它早已偷光你的选择爱恋不过是一场高烧' +
                    ' 思念是紧跟着的好不了的咳是不能原谅 ' +
                    '却无法阻挡恨意在夜里翻墙是空空荡荡 ' +
                    '却嗡嗡作响谁在你心里放冷枪' +
                    '旧爱的誓言像极了一个巴掌' +
                    '每当你记起一句就挨一个耳光' +
                    '然后好几年都闻不得 闻不得女人香' +
                    '往事并不如烟 是的 在爱里念旧也不算美德可惜恋爱不像写歌' +
                    ' 再认真也成不了风格' +
                    '我问你见过思念放过谁呢不管你是累犯还是从无前科' +
                    '我认识的只有那合久的分了 没见过分久的合更多更详尽歌词 在 ※ Mojim.com　魔镜歌词网岁月你别催 ' +
                    '该来的我不推该还的还 ' +
                    '该给的我给岁月你别催 ' +
                    '走远的我不追我不过是想弄清原委谁能告诉我' +
                    ' 这是什么呢她的爱在心里 埋葬了 抹平了 几年了仍有余威是不能原谅 ' +
                    '却无法阻挡爱意在夜里翻墙是空空荡荡 ' +
                    '却嗡嗡作响谁在你心里放冷枪旧爱的誓言像极了一个巴掌每当你记起一句就挨一个耳光' +
                    '然后好几年都闻不得 闻不得女人香然后好几年都闻不得 ' +
                    '闻不得女人香想得却不可得 ' +
                    '你奈人生何想得却不可得 情爱里无智者',
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
    componentDidMount(){
        this.setState({
            message:this.props.message,
            title:this.props.title,
            //dataSource: this.state.dataSource,
        });
        this._genRows();
    }
    buttonGoBack(){
        const {navigator} = this.props;
        return NavGoBack(navigator);
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
    }
    render() {
        const leftButtonConfig = {
            title: '返回',
            handler: () => this.buttonGoBack(),
        };
        const titleConfig = {
            title:this.state.title
        };
        return (
            <View style={styles.container}>
                <View>
                    <NavigationBar
                        title={titleConfig}
                        leftButton={leftButtonConfig}
                        tintColor={'rgb(61,171,236)'}/>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                    <ModalDropdown options={['全部', '综合','新闻','博客','论坛','微博','微信','QQ群','电子报','视频','手机 WEB','其他']}
                                   defaultValue='载体'
                                   textStyle={{fontSize:20,padding:10}}
                                   //dropdownStyle={{}}
                    />
                    <ModalDropdown options={['全部', '今天','昨天','近七天','近三十天']}
                                   defaultValue='发布时间'
                                   textStyle={{fontSize:20,padding:10}}
                    />
                    <ModalDropdown options={['排重', '不排重']}
                                   defaultValue='排重'
                                   textStyle={{fontSize:20,padding:10}}
                    />
                    <ModalDropdown options={['热度降序']}
                                   defaultValue='排序'
                                   textStyle={{fontSize:20,padding:10}}
                    />
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
        flexDirection:'column'
    },
    tabStyle:{
        flex:1
    },
    rightViewStyle:{
        flexDirection:'row',
        borderBottomColor:'#CCCCCC',//cell的分割线
        borderBottomWidth:1
    },
    imageStyle:{
        width:80,
        height:80,
        margin:20,
        backgroundColor:'red'
    },
    titleStyle:{
        marginTop:15,
        fontSize:20,
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
    }


});



export default  HostList;
