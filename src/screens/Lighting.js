import React, { Component } from 'react';
import { Text, View, ScrollView, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Header from '../components/Header';
import { Col, Row, Grid } from 'react-native-easy-grid';
import RoomList from '../components/RoomList';
import RoomDetail from '../components/RoomDetail';
import LightingList from '../components/LightingList';



class Lighting extends Component {

  static navigationOptions = {
    tabBarLabel: 'Lighting',
    tabBarIcon: () => (<Icon size={24} color="white" name="tv" />)
  }

  state = { selectedRoom: 'Den' }; //initial state

  handleRoomChange = (room) => {
    console.log("handle room:");
    console.log(room);
    console.log(this.state.selectedRoom);
  //  this.newRoom = room;
    this.setState({ selectedRoom: room }, () => this.render());
    console.log("Selected Room Changed (Lighting) to " + this.state.selectedRoom);
  }



  render() {
    console.log(this.state.selectedRoom + " rendering");
    return (
      <Grid>
        <Row size={10}>
          <Header />
        </Row>
        <Row size={90}>
        <Col style={styles.rooms} size={25}>
          <Row size={10}>
            <Text style={styles.text}>Lighting Control</Text>
          </Row>
          <Row size={90}>
            <RoomList callbackFromParent={this.handleRoomChange} />
          </Row>
        </Col>
        <Col style={styles.list} size={75}>
          <Row size={10}>
            <Text style={styles.text}> Bedroom </Text>
            <Text style={styles.text}> Total of 5 Light Sources </Text>
          </Row>
          <Row size={90}>
            {console.log("Before LightingList:" + this.state.selectedRoom)}
            <LightingList room={this.state.selectedRoom} />
          </Row>
        </Col>
        </Row>
      </Grid>

    );
  }
}
const styles = StyleSheet.create({
  rooms: {
    backgroundColor: '#3E3E3E'
  },
  list: {
    backgroundColor: '#494949'
  },
  text: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold'
  }
});

export default Lighting;
