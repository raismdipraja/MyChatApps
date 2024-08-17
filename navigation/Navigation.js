import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screen/Login';
import Home from '../screen/Home';
import MyChat from '../screen/MyChat';
import Profil from '../screen/Profil';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MyChat"
        component={MyChat}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Profil"
        component={Profil}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default (Navigator = () => {
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
});
