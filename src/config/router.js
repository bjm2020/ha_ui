import React from 'react';
import { TabNavigator } from 'react-navigation';
import { NavigationComponent } from 'react-native-material-bottom-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Dashboard from '../screens/Dashboard';
import Lighting from '../screens/Lighting';
import Settings from '../screens/Settings';

export const Tabs = TabNavigator({
  Dashboard: { screen: Dashboard },
   Lighting: { screen: Lighting },
   Settings: { screen: Settings }
 }, {
   tabBarComponent: NavigationComponent,
   tabBarPosition: 'bottom',
   tabBarOptions: {
     bottomNavigationOptions: {
       labelColor: 'white',
       rippleColor: 'white',
       style: { height: 104},
       innerStyle: {paddingBottom: 48},
       tabs: {
         Dashboard: {
           barBackgroundColor: '#37474F'
         },
         Lighting: {
           barBackgroundColor: '#00796B'
         },
         Settings: {
           barBackgroundColor: '#EEEEEE',
           labelColor: '#434343', // like in the standalone version, this will override the already specified `labelColor` for this tab
           activeLabelColor: '#212121',
           activeIcon: <Icon size={24} color="#212121" name="newsstand" />
         }
       }
     }
   }
 });
