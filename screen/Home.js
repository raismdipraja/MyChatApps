import React, {useState} from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MyChat from './MyChat';
import Profil from './Profil';
import { Icon } from 'react-native-vector-icons';

const Drawer = createDrawerNavigator();

function Home() {
  return (
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="MyChat" component={MyChat} />
        <Drawer.Screen
          name="Profil"
          component={Profil}
          // options={{
          //   drawerIcon: ({ color, size }) => (
          //     <Icon name="heart" size={size} color={color} />
          //   ),
          // }}
        />
      </Drawer.Navigator>
  );
}

export default Home;
