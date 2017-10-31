import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

class TempGauge extends Component {

state = { fill: 50 };


  render() {

    return (
      <AnimatedCircularProgress
    linecap='round'
    size={250}
    width={40}
    fill={this.state.fill}
    tintColor={this.props.tintColor}
    backgroundColor={this.props.backgroundColor} >
    {
      (fill) => (

        <Text style={styles.points}>
          { this.state.fill }°
        </Text>
        
      )
    }

  </AnimatedCircularProgress>
);
}
}
const styles = StyleSheet.create({
points: {
  backgroundColor: 'transparent',
  position: 'absolute',
  top: 72,
  left: 70,
  width: 90,
  textAlign: 'center',
  color: '#7591af',
  fontSize: 60,
  fontWeight: "100"
},
humidity: {
  fontSize: 30
}
});

export default TempGauge;
