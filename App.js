import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './src/Screens/HomeScreen';
import SettingsScreen from './src/Screens/SettingsScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Gaston" component={HomeScreen} />
        <Tab.Screen name="David" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

