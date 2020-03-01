import * as React from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/Screens/HomeScreen';
import SpendingsScreen from './src/Screens/SpendingsScreen';
import TipsScreen from './src/Screens/TipsScreen';
import ProfileScreen from './src/Screens/ProfileScreen';
import AccountSettings from './src/Screens/AccountSettings';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();



function tipsStack() {
  return (
    <Stack.Navigator
      initialRouteName='Tips og råd'
      screenOptions={{
        gestureEnabled: true,
        headerStyle: {
          backgroundColor: 'trasparent',
          height:120
          
        },
        headerTitleStyle: {
          fontSize:24
        },
        headerTintColor: '#174a5a',
        headerBackTitleVisible: false
      }}
      headerMode='float'>
      <Stack.Screen name="Tips og råd" component={TipsScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Competition') {
              iconName = focused ? 'trophy' : 'trophy';
              size = focused ? 32 : 24;
            } else if (route.name === 'Spendings') {
              iconName = focused ? 'tint' : 'tint';
              size = focused ? 32 : 24;
            } else if (route.name === 'Tips') {
              iconName = focused ? 'info' : 'info';
              size = focused ? 32 : 24;
            } else if (route.name === 'Profile') {
              iconName = focused ? 'user' : 'user';
              size = focused ? 32 : 24;
            }

            return <FontAwesome name={iconName} size={size} color={color} />;
            // return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'white',
          inactiveTintColor: 'white',
          activeBackgroundColor: '#174A5A',
          inactiveBackgroundColor: '#174A5A',
          style: { height: 104 }
        }}
      >
        <Tab.Screen name="Competition" component={HomeScreen} />
        <Tab.Screen name="Spendings" component={SpendingsScreen} />
        <Tab.Screen name="Tips" component={tipsStack} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}



