import React, {Component} from 'react';
import {ScrollView, Text,View, FlatList } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import axios from 'axios';
import RoomDetail from './RoomDetail';
//import AlbumDetail from './AlbumDetail';

class LightingList extends Component {
state = { lights: [], selectedRoom: 'Den'}; //empty state

constructor(props) {
  super(props);
  this.room = this.props.room;
}

componentWillReceiveProps(nextProps) {
//  console.log("new props");
//  console.log(nextProps);
  this.room = nextProps.room;
  this.componentWillMount();
//  console.log(this.state.selectedRoom);
}
componentWillMount() {
//console.log("LightingList:" + this.room);
axios.get('http://192.168.1.146/JSON?user=bjm2020@gmail.com&pass=Gcb!1209a&request=getstatus&location1=' + this.room + '&location2=1st%20Floor')
.then(response => this.filterLights(response.data.Devices));//this.setState({ rooms: response.data.location1 }));
//response => this.setState({albums: response.data})
}

filterLights(data) {
  //console.log(data);
  const newArray = [];
  //console.log(data[0].device_type_string);
  data.forEach(function (device) {
    if (device.device_type_string === 'Z-Wave Switch Multilevel') {
      newArray.push(device);
    //  console.log("AfterSplit");
    //  console.log(data);
    }
  });
  //console.log(newArray);
  this.setState({ lights: newArray });
}

render() {
//  console.log(this.state.lights);
    return (
      <List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 }} style={{flex: 1}}>
      <FlatList data={this.state.lights}
      renderItem = {({ item }) => (
        <RoomDetail
        room={`${item.name}`}
        reference={item.ref}
        status={item.status}
        value={item.value}
        />
      )}
        keyExtractor={item => item.ref}
      />
    </List>
    //  {this.renderRooms() */

    );

    }

}

export default LightingList;
