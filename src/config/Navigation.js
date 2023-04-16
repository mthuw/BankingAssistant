import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Welcome from '../screens/Welcome';
import Home from '../screens/Home';
import ChatBot from '../screens/ChatBot';
import Transfer from '../screens/Transfer';


const MainStack = createNativeStackNavigator();
const ModalStack = createNativeStackNavigator();
const MainStackScreen = () => (
  <MainStack.Navigator>
    <MainStack.Screen
      name="Welcome"
      component={Welcome}
      options={{headerShown: false}}
    />
    <MainStack.Screen
      name="Home"
      component={Home}
      options={{headerShown: false}}
    />
    <MainStack.Screen
      name="ChatBot"
      component={ChatBot}
      options={{headerShown: false}}
    />
    <MainStack.Screen
      name="Transfer"
      component={Transfer}
      options={{headerShown: false}}
    />
  </MainStack.Navigator>
);

export default () => (
  <NavigationContainer>
    <MainStackScreen />
  </NavigationContainer>
);
