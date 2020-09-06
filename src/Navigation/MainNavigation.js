import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from '../Screens/Home';
import About from '../Screens/About';
import Settings from '../Screens/Settings';

import CustomDrawer from '../Components/CustomDrawer';
import {View, Text} from 'react-native';
import CustomBottomTabs from '../Components/CustomBottomTabs';

/**
 *  Navigator Objects
 */
const Drawer = createDrawerNavigator();
const BottomTab = createBottomTabNavigator();

const HomeNavigator = () => {
  return (
    <BottomTab.Navigator
      initialRouteName={'Home'}
      tabBar={(props) => <CustomBottomTabs {...props} />}>
      <BottomTab.Screen name={'Home'} component={Home} />
      <BottomTab.Screen name={'About'} component={About} />
    </BottomTab.Navigator>
  );
};

function MainNavigation() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName={'Main'} //screen to be render at inital time
        drawerType={'slide'} // type of drawer reveal
        edgeWidth={100} //how far from edge can user activate drawer
        // overlayColor={'red'} // color of overlay
        drawerContent={(props) => <CustomDrawer {...props} />}
        //custom react element to render as content
        // receives state,navigation,
        // descriptors=> containing options for the drawer screen  descriptior[route.key].options
      >
        <Drawer.Screen name={'Main'} component={HomeNavigator} />
        <Drawer.Screen name={'Settings'} component={Settings} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
export default MainNavigation;
