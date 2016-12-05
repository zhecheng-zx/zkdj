/**
 * Created by jiahailiang on 2016/11/8.
 */
import Toast from 'react-native-root-toast';
let toast;
/**
 * 冒一个时间比较短的 Toast
 * @param content
 * */
export const toastShort = (content) => {
    "use strict";
    if (toast !== undefined) {
        Toast.hide(toast);
    }
    toast = Toast.show(content.toString(),{
        duration: Toast.durations.SHORT,
        position: Toast.positions.CENTER,
        shadow: true,
        animation: true,
        hideOnPress: true,
        delay: 0

    });
};
/*
* 冒一个时间比较久的 Toast
* @param content
* */
export const toastLong = (content) => {
    "use strict";
    if (toast !== undefined) {
        Toast.hide(toast);
    }
    toast = Toast.show(content.toString(),{
        duration:Toast.durations.LONG,
        position:Toast.durations.CENTER,
        shadow: true,
        hideOnPress: true,
        delay:0
    });
};