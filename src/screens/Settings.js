import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

class Settings extends Component {

  static navigationOptions = {
    tabBarLabel: 'Settings',
    tabBarIcon: () => (<Icon size={24} color="white" name="tv" />)
  }

  render() {
    return (
<View>
  <Text>Coming Soon</Text>
</View>



    );
  }
}

export default Settings;
