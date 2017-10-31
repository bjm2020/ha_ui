import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import TempGauge from '../components/TempGauge';
import { Col, Row, Grid } from 'react-native-easy-grid';
import Button from '../components/common/Button';
import { RadioButtons } from 'react-native-radio-buttons';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

class AirCondition extends Component {

  static navigationOptions = {
    tabBarLabel: 'Air Conditioning',
    tabBarIcon: () => (<Icon size={24} color="white" name="tv" />)
  }

  state = { selectedOption: null, selectedOption2: null, fillCold: 50, fillHeat: 50 };

setTemperatureUp(setPoint) {
  if(setPoint === 'fillCold') {
  this.setState({fillCold: this.state.fillCold+1});
}
  else if(setPoint === 'fillHeat')
  this.setState({fillHeat: this.state.fillHeat+1});
}
setTemperatureDown(setPoint) {
  if(setPoint === 'fillCold')
  this.setState({fillCold: this.state.fillCold-1});
  else if(setPoint === 'fillHeat')
  this.setState({fillHeat: this.state.fillHeat-1});
}

  render() {
    const options = ["auto", "on"];
    const options2 = ["auto", "cool", "heat", "off"];

    function setSelectedOption(selectedOption){
    this.setState({
      selectedOption: selectedOption
    });
  }

  function setSelectedOption2(selectedOption){
  this.setState({
    selectedOption2: selectedOption
  });
}
    function renderOption(option, selected, onSelect, index){
  const radioStyle = selected ? {
      fontFamily: 'Roboto',
      fontSize: 40,
      fontWeight: '900',
      color: 'white',
      textDecorationLine: 'underline',
      textDecorationStyle: 'solid',
      textDecorationColor: '#FFFFFF' } :
      { fontFamily: 'Roboto',
        fontSize: 40,
        color: 'white',
        fontWeight: 'bold'
      };

  return (
    <TouchableWithoutFeedback onPress={onSelect} key={index}>
      <View><Text style={radioStyle}>{option}</Text></View>
    </TouchableWithoutFeedback>
  );
}
function renderContainer(optionNodes){
    return <View style={{justifyContent: 'space-around', flexDirection: 'row', flex: 1}} >{optionNodes}</View>;
  }

  function renderOption2(option, selected, onSelect, index){
const radioStyle = selected ? {
    fontFamily: 'Roboto',
    fontSize: 40,
    fontWeight: '900',
    color: 'white',
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
    textDecorationColor: '#FFFFFF' } :
    { fontFamily: 'Roboto',
      fontSize: 40,
      color: 'white',
      fontWeight: 'bold'
    };

return (
  <TouchableWithoutFeedback onPress={onSelect} key={index}>
    <View><Text style={radioStyle}>{option}</Text></View>
  </TouchableWithoutFeedback>
);
}
function renderContainer2(optionNodes){
  return <View style={{justifyContent: 'space-around', flexDirection: 'row', flex: 1}} >{optionNodes}</View>;
}

    return (
      <Grid style={styles.background}>
        <Row style={styles.margin} size={15}>
          <Col>
          <Text style={styles.blue}>Cooling<Text style={styles.controlTitle}>State</Text></Text>
          </Col>
          <Col>
          <Text style={styles.grey}>60°<Text style={styles.controlTitle}>Current Temp</Text></Text>
          </Col>
          <Col>
          <Text style={styles.green}>Off <Text style={styles.controlTitle}>Fan State</Text></Text>
          </Col>
          <Col>
          <Text style={styles.grey}>94% <Text style={styles.controlTitle}>Battery</Text></Text>
          </Col>
        </Row>
        <Row style={{borderBottomColor: 'green', borderBottomWidth: 3, width: '100%'}} />
        <Row style={styles.margin} size={15}>
          <Col>
            <Row style={{ justifyContent: 'space-around'}}>
            <Text style={styles.controlTitle}>fan</Text>
            <RadioButtons
              options={ options }
              onSelection={ setSelectedOption.bind(this) }
              selectedOption={this.state.selectedOption }
              renderOption={ renderOption }
              renderContainer={ renderContainer }
            />
            </Row>
          </Col>
          <Col>
            <Row style={{justifyContent: 'space-around'}}>
              <Text style={styles.controlTitle}>mode</Text>
              <RadioButtons
                options={ options2 }
                onSelection={ setSelectedOption2.bind(this) }
                selectedOption={this.state.selectedOption2 }
                renderOption={ renderOption2 }
                renderContainer={ renderContainer2 }
              />
            </Row>
          </Col>
        </Row>
        <Row style={styles.gauges} size={70}>
          <Col size={40} style={{alignItems: 'center'}}>
            <AnimatedCircularProgress
          linecap='round'
          size={200}
          width={25}
          fill={this.state.fillCold}
          tintColor="#00e0ff"
          backgroundColor="#3d5875" >
          {
            (fill) => (

              <Text style={styles.points}>
                { this.state.fillCold }°
              </Text>

            )
          }
          </AnimatedCircularProgress>
          </Col>
          <Col size={10}>
            <Row size={20}>
              <Button onPress={() => this.setTemperatureUp('fillCold')} sign='+' />
            </Row>
            <Row size={20}>
              <Text style={styles.controlTitle}>adjust temp</Text>
            </Row>
            <Row size={25}>
              <Button onPress={() => this.setTemperatureDown('fillCold')} sign='-' />
              </Row>
          </Col>
          <Col size={40} style={{alignItems: 'center'}}>
            <AnimatedCircularProgress
          linecap='round'
          size={200}
          width={25}
          fill={this.state.fillHeat}
          tintColor="#A74336"
          backgroundColor="#b8685e" >
          {
            (fill) => (

              <Text style={styles.points}>
                { this.state.fillHeat }°
              </Text>

            )
          }
          </AnimatedCircularProgress>
          </Col>
          <Col size={10}>
            <Row>
              <Button onPress={() => this.setTemperatureUp('fillHeat')} sign='+' />
            </Row>
            <Row>
              <Text style={styles.controlTitle}>adjust temp</Text>
            </Row>
            <Row>
              <Button onPress={() => this.setTemperatureDown('fillHeat')} sign='-' />
            </Row>
          </Col>
        </Row>
      </Grid>
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
  },
  smallHeaderText: {
    fontFamily: 'Roboto',
    fontSize: 20,
    fontWeight: '800',
  },
  text: {
    fontFamily: 'Roboto',
    fontSize: 40,
    fontWeight: '800',
  },
  green: {
    fontFamily: 'Roboto',
    fontSize: 40,
    fontWeight: '800',
    color: 'green',
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
    textDecorationColor: '#FFFFFF'
  },
  controlTitle: {
    fontFamily: 'Roboto',
    fontSize: 20,
    fontWeight: '800',
    color: 'grey'
  },
  red: {
    fontFamily: 'Roboto',
    fontSize: 40,
    fontWeight: '800',
    color: 'red'
  },
  blue: {
    fontFamily: 'Roboto',
    fontSize: 40,
    fontWeight: '800',
    color: 'blue'
  },
  white: {
    fontFamily: 'Roboto',
    fontSize: 40,
    fontWeight: '800',
    color: 'white'
  },
  background: {
      backgroundColor: '#3E3E3E',
      paddingTop: 50
  },
  margin: {
    marginLeft: 20,
    marginRight: 20
  },
  gauges: {
    justifyContent: 'space-around'
  },
  responderStyle: {
    backgroundColor: '#3E3E3E',
    elevation: 3,
    shadowColor: 'rgba(0,0,0,.7)',
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 1,
  },
  wheelWrapper: {
    borderRadius: 120,
    elevation: 5,
    padding: 0,
    shadowColor: 'rgba(0,0,0,.7)',
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 1,
    zIndex: 1,
  },
})

export default AirCondition;
