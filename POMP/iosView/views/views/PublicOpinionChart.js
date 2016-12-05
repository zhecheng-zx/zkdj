/**
 * Created by jiahailiang on 2016/11/17.
 */
import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    Dimensions
} from 'react-native'
import Chart from 'react-native-chart';
import {NavGoBack} from './common/NavGoBack'
import NavigationBar from 'react-native-navbar';
class POChart extends Component {
    constructor (props) {
        super (props);
        this.buttonGoBack = this.buttonGoBack.bind(this);
    }
    buttonGoBack(){
        const {navigator} = this.props;
        return NavGoBack(navigator);
    }
    render() {
        const { width,height } = Dimensions.get('window');

        return (
            <View style={styles.container}>
                <View style={{justifyContent:'center',alignItems:'center'}}>
                    <Chart
                        style={styles.chart}
                        data={data}
                        verticalGridStep={5}
                        type='bar'
                        showDataPoint={true}
                        color={'#e1cd00'}
                    />
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: 'white',
        flexDirection:'column'
    },
    chart: {
        height:200,
        width:300
    },
});

const data = [
    [0, 1],
    [1, 3],
    [3, 7],
    [4, 9],
];

export default  POChart;