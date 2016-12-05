/**
 * Created by jiahailiang on 2016/11/16.*/

import React,{Component} from 'react';
import {
    Text,
    View,
    Image,
    StyleSheet,
    Alert,
    TouchableOpacity,

} from 'react-native';
 import ScrollableTabView,{DefaultTabBar} from 'react-native-scrollable-tab-view';
 import NavigationBar from 'react-native-navbar';
import {NavGoBack} from './common/NavGoBack'
 import POArticles from './PublicOpinionArticles';
 import POChart from './PublicOpinionChart';
 import PODaliy from './PublicOpinionDaliy';
 import POGuide from './PublicOpinionGuide';
 import POReport from './PublicOpinionReports';
export default class Affair extends Component {
    constructor (props) {
        super (props);

        this.buttonGoBack = this.buttonGoBack.bind(this);
        this.state = {
            title:'',
        };
    };
    componentDidMount(){
        this.setState({
            title:this.props.title,
        })
    };
    buttonGoBack(){
        const {navigator} = this.props;
        return NavGoBack(navigator);
    };
    render () {
        const leftButtonConfig = {
            title: '返回',
            handler: () => this.buttonGoBack(),
        };
        const titleConfig = {
            title:this.state.title,
            //title:'本周舆情'
        };
        const tightB= {
            title:'搜索',
            handler:() => alert(this.state.title)
        };
        return(
            <View>
                <View>
                    <NavigationBar
                        title={titleConfig}
                        leftButton={leftButtonConfig}
                        rightButton={tightB}
                        tintColor={'rgb(61,171,236)'}/>
                </View>
                <View>
                    <ScrollableTabView
                    tabBarPosition='top'
                    renderTabBar={() => <DefaultTabBar/>}
                    tabBarUnderlineColor='#f00'
                    tabBarBackgroundColor='#00000000'
                    tabBarActiveTextColor='#f00'
                    tabBarInactiveTextColor='#000'
                    tabBarTextStyle={{fontSize: 17}}>
                    <POArticles tabLabel='文章' {...this.props}/>
                    <POChart tabLabel='图表' {...this.props}/>
                    <POGuide tabLabel='专报' {...this.props}/>
                    <POReport tabLabel='导控' {...this.props}/>
                </ScrollableTabView>
                </View>
            </View>
        )
    }

}
/**
 * Created by jiahailiang on 2016/11/16.
 */
// import React,{Component} from 'react';
// import {
//     Text,
//     View,
//     Image,
//     StyleSheet,
//     Alert,
//     TouchableOpacity,
//     Dimensions,
//     Navigator
// } from 'react-native';
// var ScreenWidth = Dimensions.get('window').width;
// import ScrollableTabView,{DefaultTabBar} from 'react-native-scrollable-tab-view';
// import NavigationBar from 'react-native-navbar';
// import {NavGoBack} from './common/NavGoBack';
// import Button from './common/Button';
// import POArticles from './PublicOpinionArticles';
// import POChart from './PublicOpinionChart';
// import PODaliy from './PublicOpinionDaliy';
// import POGuide from './PublicOpinionGuide';
// import POReport from './PublicOpinionReports';
// export default class AffairTow extends Component {
//     constructor (props) {
//         super (props);
//         this.buttonGoBack = this.buttonGoBack.bind(this);
//         this.state = {
//             title:'',
//             Daliy:'',
//         };
//     };
//     componentDidMount(){
//         this.setState({
//             title:this.props.title,
//             Daliy:this.props.Daliy,
//         })
//     };
//     buttonGoBack(){
//         const {navigator} = this.props;
//         return NavGoBack(navigator);
//     };
//     render () {
//         const leftButtonConfig = {
//             title: '返回',
//             handler: () => this.buttonGoBack(),
//         };
//         const titleConfig = {
//             title:this.state.title,
//         };
//         const tightB = {
//             handler:() =>alert('搜索')
//         };
//         return(
//             <View style={{flex:1}}>
//                 <View>
//                     <NavigationBar
//                         title={titleConfig}
//                         leftButton={leftButtonConfig}
//                         rightButton={tightB}
//                         tintColor={'rgb(61,171,236)'}/>
//                 </View>
//                 /*
//                 <Image style={{width:ScreenWidth,height:96,flexDirection:'column'}}
//                        source={require('../../../images/login/bg.png')}>
//                     <View style={{flexDirection:'row',justifyContent:'space-between'}}>
//                         <Button
//                             containerStyle={{marginTop:20, padding: 10, backgroundColor:'#00000000',
//                                 borderWidth: 0, borderColor: '#00000000',marginLeft: 10}}
//                             style={{ fontSize: 14, textAlign: 'center',color: '#b3b3b3'}}
//                             text={'返回'}
//                             onPress={()=>{this.buttonGoBack()}}
//                         />
//                         <Text style={{marginTop:30,fontSize:20,alignItems:'center',color:'white'}}>{this.state.title}</Text>
//                         <Button
//                             containerStyle={{marginTop:20, padding: 10, backgroundColor:'#00000000',
//                                 borderWidth: 0, borderColor: '#00000000', marginRight:10}}
//                             style={{ fontSize: 14, textAlign: 'center',color: '#b3b3b3'}}
//                             text={'搜索'}
//                             onPress={() => alert('点击了搜索按钮,将要进行搜索任务')}
//                         />
//                     </View>
//                     <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:15,marginBottom:5}}>
//                         <Image source={require('../../../images/login/alticles.png')} style={{width:25,height:25}}/>
//                         <Image source={require('../../../images/login/chart.png')} style={{width:25,height:25}}/>
//                         <Image source={require('../../../images/login/baobiao.png')} style={{width:25,height:25}}/>
//                     </View>
//                 </Image>
//                 */
//                 <ScrollableTabView
//                     tabBarPosition='top'
//                     renderTabBar={() => <DefaultTabBar/>}
//                     tabBarUnderlineColor='#f00'
//                     tabBarBackgroundColor='#00000000'
//                     tabBarActiveTextColor='#f00'
//                     tabBarInactiveTextColor='#000'
//                     tabBarTextStyle={{fontSize: 17}}>
//                     <POArticles tabLabel='文章' {...this.props}/>
//                     <POChart tabLabel='图表' {...this.props}/>
//                     <POGuide tabLabel='专报' {...this.props}/>
//                     <POReport tabLabel='导控' {...this.props}/>
//                 </ScrollableTabView>
//             </View>
//         )
//     }
//
// }