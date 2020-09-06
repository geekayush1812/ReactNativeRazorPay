import 'react-native-gesture-handler';
import React from 'react';
import MainNavigation from './src/Navigation/MainNavigation';
import {StatusBar} from 'react-native';

const App = () => {
  return (
    <>
      <StatusBar
        backgroundColor={'#f1f1f1'}
        barStyle={'dark-content'}></StatusBar>
      <MainNavigation></MainNavigation>
    </>
  );
};
export default App;
