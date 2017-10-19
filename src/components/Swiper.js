import React, { Component } from 'react';
import {StyleSheet, Text,View} from 'react-native';
import Swiper from 'react-native-swiper';

const styles = StyleSheet.create({
  wrapper: {
  },
  slide1: {
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#8E9293',
    fontSize: 30,
    fontWeight: 'bold',
  }
});

export default () =>
      <Swiper style={styles.wrapper} showsButtons={false}>
       <View style={styles.slide1}>
         <Text style={styles.text}>Hello Swiperdfsadffdafdsfadsfds</Text>
       </View>
       <View style={styles.slide2}>
         <Text style={styles.text}>Beautiful</Text>
       </View>
       <View style={styles.slide3}>
         <Text style={styles.text}>And simple</Text>
       </View>
     </Swiper>
