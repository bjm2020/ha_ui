import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Header from '../components/Header';
import DshTerm from '../components/Dashboard/Dsh_Thermostat';


class Dashboard extends Component {

  static navigationOptions = {
    tabBarLabel: 'Dashboard',
    tabBarIcon: () => (<Icon size={24} color="white" name="tv" />)
  }
  render() {
    return (
<View style={styles.main}>
  <View style={styles.box1}>
  <Header />
  </View>
  <View style={styles.box2}>
        <View style={styles.box2content}>
          <ScrollView pagingEnabled={true} horizontal={true}
          decelerationRate={0}
          snapToInterval={(width *.50) - 60}
          snapToAlignment={'center'}
          >
            <DshTerm />
            <DshTerm />
            <DshTerm />
            <DshTerm />
          </ScrollView>
        </View>
        <View style = {styles.box2content}>
        <ScrollView horizontal={true} style={styles.scroll}>

        </ScrollView>
        </View>
 </View>
 <View style={styles.box,styles.box3}>
        <View>
          <Text>Quad 2-1</Text>
        </View>
 </View>
</View>



    );
  }
}

const { width,height } = Dimensions.get('window');
const box_count = 4;
const box_height = height/box_count;

const styles = StyleSheet.create({
  main: {
    flexDirection: 'column',
    flex: 1
  },
  box1: {
    flex: 0.05,
    paddingTop: 50,
    backgroundColor: '#2196F3'
  },
  box: {
    flex: .60
  },
  box2: {
    flex: 0.70,
    flexDirection: 'row',
    backgroundColor: '#8BC34A'
  },
  box2content: {
    flex: 0.50,
    flexDirection: 'row'
  },
  box3: {
    flex: .30,
    backgroundColor: '#e3aa1a'
  },
  scroll: {
    alignContent: 'space-around'
  }

});

export default Dashboard;
