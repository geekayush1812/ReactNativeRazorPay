import React from 'react';
import {
  View,
  ImageBackground,
  Image,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
} from 'react-native';
import {useIsDrawerOpen} from '@react-navigation/drawer';
function CustomDrawer(props) {
  const isDrawerOpen = useIsDrawerOpen();
  const {routes} = props.state;
  const {navigation, state} = props;
  return (
    <>
      <StatusBar
        animated
        backgroundColor={isDrawerOpen ? 'rgba(75,0,130,0.8)' : '#f1f1f1'}
        barStyle={isDrawerOpen ? 'light-content' : 'dark-content'}
      />
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <View style={{height: '25%'}}>
          <ImageBackground
            style={{
              width: '100%',
              height: '100%',
            }}
            source={require('../assets/purple_bg.jpg')}>
            <View
              style={{
                width: '100%',
                height: '100%',
                justifyContent: 'space-around',
                alignItems: 'flex-start',
                paddingHorizontal: '8%',
                paddingVertical: '5%',
              }}>
              <View
                style={{
                  height: 80,
                  width: 80,
                  borderRadius: 80,
                  borderWidth: 4,
                  borderColor: '#fff',
                  overflow: 'hidden',
                }}>
                <Image
                  style={{height: '100%', width: '100%'}}
                  source={require('../assets/profile.jpg')}
                />
              </View>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: 'bold',
                  letterSpacing: 0.5,
                  color: '#f1f1f1',
                }}>
                Sophie Stewart
              </Text>
              <View style={{flexDirection: 'row'}}>
                <Text style={{color: '#d1d1d1', marginRight: '5%'}}>
                  734 Followers
                </Text>
                <Image
                  style={{height: 20, width: 20}}
                  source={require('../assets/member.png')}
                />
              </View>
            </View>
          </ImageBackground>
        </View>
        <ScrollView style={{paddingVertical: '4%'}}>
          {routes.map((item, index) => {
            return (
              <TouchableOpacity
                key={item.key}
                style={{
                  backgroundColor:
                    index === state.index ? 'rgba(75,0,130,0.12)' : 'white',
                  paddingVertical: '4%',
                  paddingHorizontal: '6%',
                  marginRight: '15%',
                  borderTopRightRadius: 12,
                  borderBottomRightRadius: 12,
                }}
                onPress={() => navigation.navigate(item.name)}>
                <Text
                  style={{
                    fontSize: 16,
                    color: index === state.index ? 'rgb(75,0,130)' : '#000',
                  }}>
                  {item.name}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
    </>
  );
}
export default CustomDrawer;
