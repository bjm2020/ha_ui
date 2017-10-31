import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

class Header extends Component {
  render() {
      return (
        <View style={styles.main}>
          <View style={styles.time}>
            <Text style={styles.text}> 3:20 PM </Text>
            <Text style={styles.text}> May 24, 2013 </Text>
          </View>
          <View style={styles.alerts}>
            <Text style={styles.text}>You have got 1 new alert</Text>
          </View>
        </View>
      );
  }

}

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    flex: 1
  },
  time: {
    flex: 1/4,
    backgroundColor: 'black'
  },
  alerts: {
    flex: 3/4,
    backgroundColor: 'darkslategrey'
  },
  text: {
    color: 'white'
  }
});

export default Header;
