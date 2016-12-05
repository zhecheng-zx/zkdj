/**
 * Created by jiahailiang on 2016/11/8.
 */
 import React, { PropTypes } from 'react';
 import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';

 const propTypes = {
  onPress: PropTypes.func,
  disabled: PropTypes.bool,
  style: Text.propTypes.style,
  containerStyle: View.propTypes.style,
  text: PropTypes.string
};
 //这个箭头函数真是绝了,还可以这个样纸!
 const Button = ({ onPress, disabled, style, containerStyle, text }) => (
 <TouchableOpacity
 style={containerStyle}
 onPress={onPress}
 disabled={disabled}
 >
 <Text style={style}>
 {text}
 </Text>
 </TouchableOpacity>
 );

 Button.propTypes = propTypes;

 Button.defaultProps = {
  onPress() {},
  disabled: false
};

 export default Button;

