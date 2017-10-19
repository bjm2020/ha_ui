import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, Dimensions } from 'react-native';
import { Button } from './common';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/Octicons';

class DshTherm extends Component {
  render() {
      return (
        <View style={styles.main}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Thermostat</Text>
          </View>
          <View style={styles.content}>
              <Icon name="fan" size={80} color="#900" />
              <Text style={styles.contentText}>21° C</Text>
              <Icon2 name="settings" size={80} color="#900" />
          </View>
        </View>
      );
  }
}

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: 'column',
    alignContent: 'space-around'
  },
  header: {
    paddingTop: 10,
    paddingLeft: 10,
    alignItems: 'flex-start'
  },
  headerText: {
    fontSize: 20
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    alignContent: 'space-around'
  },
  contentText: {
    fontSize: 80,
    fontWeight: 'bold',
    color: 'white',
    justifyContent: 'space-around'
  }

});

export default DshTherm;
