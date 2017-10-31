import React, {Component} from 'react';
import {ScrollView, Text,View, FlatList, TouchableOpacity } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import axios from 'axios';
import LightingList from './LightingList';
//import AlbumDetail from './AlbumDetail';

class RoomList extends Component {
state = { rooms: [] }; //empty state

componentWillMount() {

axios.get('http://192.168.1.146/JSON?user=bjm2020@gmail.com&pass=Gcb!1209a&request=getlocations', {
  transformResponse: axios.defaults.transformResponse.concat(function (data,headers) {
    const remove = ["All","BLStat", "Counters", "Jon00 Network", "MediaController", "PHLocation", "Pushover 3P", "weatherXML"];
    remove.forEach(function(item) {
      Object.keys(data.location1).forEach(function (k) {
        if (data.location1[k] === item) {
          data.location1.splice(k,1);
        }
      });
    });
    return data;
  })
})
.then(response => this.setState({ rooms: response.data.location1 }));
//response => this.setState({albums: response.data})
}

renderRooms() {
    return this.state.rooms.map(room =>
        <ListItem title={`${room}`} />);
}

renderDetail(item) {
  console.log(item + " clicked");
  this.props.callbackFromParent(item);
}

render() {
//  console.log(this.state.rooms);
    return (
      <List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 }} style={{flex: 1}}>
      <FlatList data={this.state.rooms}
      renderItem = {({ item }) => (
      <TouchableOpacity onPress={() => this.renderDetail(item)}>
        <ListItem
        title={`${item}`}
        containerStyle={{ borderBottomWidth: 0 }}
        titleStyle={{color: 'white'}}
        />
      </TouchableOpacity>
      )}

        keyExtractor={item => item}
      />
    </List>
    //  {this.renderRooms()
    );

    }

}

export default RoomList;
