import React, { Component } from 'react';
import BottomNavigation, { Tab } from 'react-native-material-bottom-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';

class BottomNav extends Component {
  render() {
    return (
      <BottomNavigation
      labelColor="white"
      rippleColor="white"
      >
      <Tab
        barBackgroundColor="#37474F"
        label="Movies & TV"
        icon={<Icon size={24} color="white" name="tv" />}
      />
      <Tab
        barBackgroundColor="#00796B"
        label="Music"
        icon={<Icon size={24} color="white" name="music-note" />}
      />
      <Tab
        barBackgroundColor="#5D4037"
        label="Books"
        icon={<Icon size={24} color="white" name="book" />}
      />
      <Tab
        barBackgroundColor="#3E2723"
        label="Newsstand"
        icon={<Icon size={24} color="white" name="newspaper" />}
      />
    </BottomNavigation>
    )
  }
}

export default BottomNav;
