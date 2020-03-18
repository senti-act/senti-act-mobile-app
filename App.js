import * as React from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/Screens/HomeScreen';
import SpendingsScreen from './src/Screens/SpendingsScreen';
import TipsScreen from './src/Screens/TipsScreen';
import LaundryScreen from './src/Screens/LaundryScreen';
import FaucetScreen from './src/Screens/FaucetTipsScreen';
import BathingScreen from './src/Screens/BathTipsScreen';
import ToiletScreen from './src/Screens/ToiletTipsScreen';
import DishesScreen from './src/Screens/DishesTipsScreen';
import WaterWasteScreen from './src/Screens/WaterWasteTipsScreen';
import ProfileScreen from './src/Screens/ProfileScreen';
import AccountSettings from './src/Screens/AccountSettings';
import Notifications from './src/Screens/Notifications';
import Privacy from './src/Screens/Privacy';
import FAQ from './src/Screens/FAQ';
import About from './src/Screens/About';
import ConsumptionScreen from './src/Screens/ConsumptionScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function tipsStack() {
  return (
    <Stack.Navigator
      initialRouteName="Tips and tricks"
      screenOptions={{
        gestureEnabled: true,
        headerStyle: {
          backgroundColor: 'trasparent',
          height: 100,
        },
        headerTitleStyle: {
          fontSize: 24,
        },
        headerTintColor: '#174a5a',
        headerBackTitleVisible: false,
      }}
      headerMode="float">
      <Stack.Screen name="Tips and tricks" component={TipsScreen} />
      <Stack.Screen name="Laundry tips" component={LaundryScreen} />
      <Stack.Screen name="Bathing tips" component={BathingScreen} />
      <Stack.Screen name="Faucet tips" component={FaucetScreen} />
      <Stack.Screen name="Toilet tips" component={ToiletScreen} />
      <Stack.Screen name="Dish cleaning tips" component={DishesScreen} />
      <Stack.Screen name="Water waste tips" component={WaterWasteScreen} />
    </Stack.Navigator>
  );
}

function competitionStack() {
  return (
    <Stack.Navigator
      initialRouteName="Competition"
      screenOptions={{
        gestureEnabled: true,
        headerStyle: {
          backgroundColor: 'trasparent',
          height: 80,
        },
        headerTitleStyle: {
          fontSize: 24,
        },
        headerTintColor: '#174a5a',
        headerBackTitleVisible: false,
      }}
      headerMode="float">
      <Stack.Screen name="Competition" component={HomeScreen} />
    </Stack.Navigator>
  );
}


function profileStack() {
  return (
    <Stack.Navigator
      initialRouteName="Profile"
      screenOptions={{
        gestureEnabled: true,
        headerStyle: {
          backgroundColor: 'transparent',
          height: 100,
        },
        headerTitleStyle: {
          fontSize: 24,
        },

        headerTintColor: '#174a5a',
        headerBackTitleVisible: false,
      }}
      headerMode="float">
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Account" component={AccountSettings} />
      <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen name="Privacy policy" component={Privacy} />
      <Stack.Screen name="FAQ" component={FAQ} />
      <Stack.Screen name="About" component={About} />
    </Stack.Navigator>
  );
}

function spendingsStack() {
  return (
    <Stack.Navigator
      initialRouteName="My water status"
      screenOptions={{
        gestureEnabled: true,
        headerStyle: {
          backgroundColor: '#BCC6CC',
          height: 50,
        },
        headerTitleStyle: {
          fontSize: 17,
          textAlign: 'center',
          fontWeight: 'bold',
        },
        //   headerTintColor: '#174a5a',
        //   headerBackTitleVisible: false,
      }}
      headerMode="float">
      <Stack.Screen name="My water consumption" component={SpendingsScreen} />
      <Stack.Screen name="ConsumptionScreen" component={ConsumptionScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={{ flex: 0, backgroundColor: '#F2F2F2', }} />
      <SafeAreaView style={{ flex: 1, backgroundColor: '#174A5A' }}>
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
            style: { height: 80 },
          }}>
          <Tab.Screen name="Competition" component={competitionStack} />
          <Tab.Screen name="Spendings" component={spendingsStack} />
          <Tab.Screen name="Tips" component={tipsStack} />
          <Tab.Screen name="Profile" component={profileStack} />
        </Tab.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
}
