import React from 'react';
import {Text, TouchableOpacity} from 'react-native';


const Button = ({onPress, sign}) => {
    const {buttonStyle,textStyle} = styles;

    return (
        <TouchableOpacity onPress={onPress} style={buttonStyle}>
        <Text style={textStyle}>{sign}</Text>
        </TouchableOpacity>
    );

};

const styles = {
    textStyle: {
    alignSelf: 'center',
    color: '#A74336',
    fontSize: 40,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
    },
    buttonStyle: {
      borderWidth:1,
      borderColor:'rgba(0,0,0,0.2)',
      alignItems:'center',
      justifyContent:'center',
      width:60,
      height:60,
      backgroundColor:'#5C5C5C',
      borderRadius:100,
    }
};

export default Button;
