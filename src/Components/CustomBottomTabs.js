import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
function CustomBottomTabs(props) {
  console.log(props);
  const {routes} = props.state;
  const {navigation, state} = props;
  return (
    <View
      style={{
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        position: 'relative',
      }}>
      <TouchableOpacity
        style={{
          position: 'absolute',
          height: 60,
          width: 60,
          backgroundColor: 'rgba(135,29,171,1)',
          left: '50%',
          top: '-50%',
          borderRadius: 60,
          justifyContent: 'center',
          alignItems: 'center',
          transform: [
            {
              translateX: -30,
            },
            {
              translateY: -10,
            },
          ],
          elevation: 24,
        }}>
        <Text
          style={{
            fontSize: 40,
            color: '#fff',
            lineHeight: 45,
          }}>
          +
        </Text>
      </TouchableOpacity>
      {routes.map((item, index) => {
        return (
          <TouchableOpacity
            key={item.key}
            style={{
              borderTopWidth: 4,
              borderColor: index === state.index ? 'rgba(75,0,130,1)' : 'white',
              paddingVertical: '4%',
              paddingHorizontal: '6%',
            }}
            onPress={() => navigation.navigate(item.name)}>
            <Text
              style={{
                fontSize: 12,
                color: index === state.index ? 'rgb(75,0,130)' : '#000',
              }}>
              {item.name}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default CustomBottomTabs;
