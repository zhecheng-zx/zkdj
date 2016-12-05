/**
 * Created by jiahailiang on 2016/11/10.
 */
import React, {
    Component,
} from 'react';
import {
    Image,
    ListView,
    StyleSheet,
    Text,
    View,
} from 'react-native';

var REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';
export default class NewsList extends Component{
    constructor () {//构造器
        super ();
        this.state = {
            //初始化 State才会有下面的 dataSource和 loaded 两个属性,弱语言不用声明类型
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
                //rowHasChanged是ListView必须要实现的一个function，否则会报错，当然也可以采用lambda表达式的写法，
            }),
            loaded: false,
        };
        }
    componentDidMount() { this.fetchData(); }
    fetchData(){
        fetch(REQUEST_URL)
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(responseData.movies),
                    //this.state.dataSource.cloneWithRows(responseData.movies)
                    //这段代码的意思是填充ListView中的数据
                    // dataSource: this.state.dataSource.cloneWithRows(responseData.movies)
                    //这段代码的意思是将填充好数据的ListView对象的句柄指向成员变量dataSource，当然也可以称之为引用。
                    loaded: true,
                });
            }).done();
    }
    render () {
        if (!this.state.movies) {
            return this.renderLoadingView();
        }
        return(
            <ListView
            dataSource={this.state.dataSource}
                //只能返回只有一个根节点的组建，不能返回多个，上面代码中，ListView中的三个属性都是原生属性，将我们实例化并且填充好数据的ListView赋值给dataSource
            renderRow={this.renderMovie}
            //将renderMovie方法的返回值赋值给renderRow，不做过多解释。
            style={NewStyles.ListViewStyl}
            />
        )
    }
    renderLoadingView(){
        return (
            <View style={NewStyles.container}>
                <Text>loading...</Text>
            </View>
        );
    }
    //再写一个方法，用于返回单行数据，
    renderMovie(movie) {
        return(
            <View>
                <Image source={{uri:movie.posters.thumbnail}}
                style={NewStyles.thumbnail}/>
                <View style={NewStyles.rightContainer}>
                    <Text style={NewStyles.title}>{movie.title}</Text>
                    <Text style={NewStyles.year}>{movie.year}</Text>
                    //其中{movie.year}等，都是(responseData)看到的服务器返回的json数据的key
                </View>
            </View>
        );
    }
}
const NewStyles = StyleSheet.create ({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    thumbnail: {
        width: 53,
        height: 81,
    },
    title: {
        fontSize: 20,
        marginBottom: 8,
        textAlign: 'center',
    },
    year: {
        textAlign: 'center',
    },
    rightContainer: {
        flex: 1,
    },
    ListViewStyl:{
        paddingTop: 20,
        backgroundColor: '#F5FCFF'
    },

});
