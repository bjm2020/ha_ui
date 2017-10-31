/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View
} from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './src/reducers';
import { Tabs } from './src/config/router';
import  Header from './src/components/Header';

import BottomNavigation, { Tab } from 'react-native-material-bottom-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';


const instructions = Platform.select({
});

export default class App extends Component<{}> {

  render() {
    return (
      <Provider store={createStore(reducers)}>
      <Tabs />
      </Provider>
    );
  }
}
