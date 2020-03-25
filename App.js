import * as React from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native-gesture-handler';
import LineIcons from 'react-native-vector-icons/SimpleLineIcons';

import HomeScreen from './src/Screens/HomeScreen';
//Start screens
import DataSyncScreen from './src/Screens/Start/DataSyncScreen';
import GuideScreen from './src/Screens/Start/GuideScreen';
import StartGuideScreen from './src/Screens/Start/StartGuideScreen';
import InstructionsScreen from './src/Screens/Start/InstructionsScreen';
import RegistrationScreen from './src/Screens/Start/RegistrationScreen';
import WelcomeScreen from './src/Screens/Start/WelcomeScreen';
import DataCheckScreen from './src/Screens/Start/DataCheckScreen';
import ReportScreen from './src/Screens/Start/ReportScreen';
import StartLoginScreen from './src/Screens/Start/StartLoginScreen';
import LoginScreen from './src/Screens/Start/LoginScreen';
//Profile screens
import ProfileScreen from './src/Screens/Profile/ProfileScreen';
import AccountSettings from './src/Screens/Profile/AccountSettings';
import Notifications from './src/Screens/Profile/Notifications';
import Privacy from './src/Screens/Profile/Privacy';
import FAQ from './src/Screens/Profile/FAQ';
import About from './src/Screens/Profile/About';
//Tips screens
import TipsScreen from './src/Screens/Tips/TipsScreen';
import LaundryScreen from './src/Screens/Tips/LaundryScreen';
import FaucetScreen from './src/Screens/Tips/FaucetTipsScreen';
import BathingScreen from './src/Screens/Tips/BathTipsScreen';
import ToiletScreen from './src/Screens/Tips/ToiletTipsScreen';
import DishesScreen from './src/Screens/Tips/DishesTipsScreen';
import WaterWasteScreen from './src/Screens/Tips/WaterWasteTipsScreen';
import SubmitTipScreen from './src/Screens/Tips/SubmitTipScreen';
//Consumption screens
import ConsumptionScreen from './src/Screens/Consumption/ConsumptionScreen';
import SpendingsScreen from './src/Screens/Consumption/SpendingsScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const StartStack = createStackNavigator();
const RootStack = createStackNavigator();


function tipsStack() {
  return (
    <Stack.Navigator
      initialRouteName="Tips and tricks"
      screenOptions={{
        gestureEnabled: true,
        headerStyle: {
          backgroundColor: 'trasparent',
          backgroundColor: '#f2f2f2',
          height: 75,
        },
        headerTitleStyle: {
          fontSize: 24,
        },
        headerTitleAlign: 'center',
        headerTintColor: '#174a5a',
        headerBackTitleVisible: false,
      }}
      headerMode="float">
      <Stack.Screen
        name="Tips and tricks"
        component={TipsScreen}
        options={({ navigation }) => ({
          headerRight: () => (
            <View style={{ paddingRight: 16 }}>
              <TouchableOpacity
                onPress={() => navigation.navigate('Submit tips')}
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 50,
                  height: 50,
                  backgroundColor: '#FF8000',
                  borderRadius: 25,
                }}>
                <LineIcons name={'pencil'} size={25} color={'white'} />
              </TouchableOpacity>
            </View>
          ),
        })}
      />
      <Stack.Screen name="Laundry tips" component={LaundryScreen} />
      <Stack.Screen name="Bathing tips" component={BathingScreen} />
      <Stack.Screen name="Faucet tips" component={FaucetScreen} />
      <Stack.Screen name="Toilet tips" component={ToiletScreen} />
      <Stack.Screen name="Dish cleaning tips" component={DishesScreen} />
      <Stack.Screen name="Water waste tips" component={WaterWasteScreen} />
      <Stack.Screen
        name="Submit tips"
        component={SubmitTipScreen}
        options={{ headerTitle: 'Add your tips and tricks' }}
      />
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
          backgroundColor: '#f2f2f2',
          height: 75,
        },
        headerTitleStyle: {
          fontSize: 24,
        },
        headerTitleAlign: 'center',
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
          backgroundColor: '#f2f2f2',
          height: 75,
        },
        headerTitleStyle: {
          fontSize: 24,
        },
        headerTitleAlign: 'center',
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
          backgroundColor: 'transparent',
          backgroundColor: '#f2f2f2',
          height: 75,
        },
        headerTitleStyle: {
          fontSize: 24,
        },
        headerTitleAlign: 'center',
        headerTintColor: '#174a5a',
        headerBackTitleVisible: false,
      }}
      headerMode="float">
      <Stack.Screen name="My water consumption" component={SpendingsScreen} />
      <Stack.Screen name="ConsumptionScreen" component={ConsumptionScreen} />
    </Stack.Navigator>
  );
}


function loginStack() {

  return (
    <StartStack.Navigator
      initialRouteName="WelcomeScreen"

      screenOptions={{
        headerTransparent: true,
        gestureEnabled: true,
        headerStyle: {
          height: '20%',
        },
        headerTitleStyle: {
          fontSize: 20,
        },
        headerTitleAlign: 'center',
        headerTintColor: '#174a5a',
        //headerBackTitleVisible: false,
      }}
      headerMode="float">
      <StartStack.Screen name="WelcomeScreen" component={WelcomeScreen} options={{ headerShown: false }} />
      <StartStack.Screen name="InstructionsScreen" component={InstructionsScreen} options={{ headerShown: false }} />
      <StartStack.Screen name="DataSyncScreen" component={DataSyncScreen} options={{ headerShown: false }} />
      <StartStack.Screen name="DataCheckScreen" component={DataCheckScreen} options={{ title: '' }} />
      <StartStack.Screen name="RegistrationScreen" component={RegistrationScreen} options={{ title: '' }} />
      <StartStack.Screen name="StartGuideScreen" component={StartGuideScreen} options={{ title: '' }} />
      <StartStack.Screen name="GuideScreen" component={GuideScreen} options={{ title: '' }} />
      <StartStack.Screen name='StartLoginScreen' component={StartLoginScreen} options={{ title: '' }} />
      <StartStack.Screen name='LoginScreen' component={LoginScreen} options={{ title: '' }} />
    </StartStack.Navigator>
  );
}
function tabNavigation() {

  return (

    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Competition') {
            iconName = focused ? 'trophy' : 'trophy';
            size = focused ? 34 : 30;
          } else if (route.name === 'Spendings') {
            iconName = focused ? 'drop' : 'drop';
            size = focused ? 34 : 30;
          } else if (route.name === 'Tips') {
            iconName = focused ? 'info' : 'info';
            size = focused ? 34 : 30;
          } else if (route.name === 'Profile') {
            iconName = focused ? 'user' : 'user';
            size = focused ? 34 : 30;
          }
          return <LineIcons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'white',
        inactiveTintColor: 'white',
        activeBackgroundColor: '#1f657a',
        inactiveBackgroundColor: '#174A5A',
        style: { height: 85 },
        labelStyle: { fontSize: 12, paddingBottom: 5 },

      }}>
      <Tab.Screen name="Competition" component={competitionStack} />
      <Tab.Screen name="Spendings" component={spendingsStack} />
      <Tab.Screen name="Tips" component={tipsStack} />
      <Tab.Screen name="Profile" component={profileStack} />
    </Tab.Navigator>


  );
}


export default function App() {
  return (
    <NavigationContainer >
      <RootStack.Navigator>
        <RootStack.Screen name="WelcomeScreen" component={loginStack} options={{ headerShown: false }} />
        <RootStack.Screen name="navigation" component={tabNavigation} options={{ headerShown: false }} />
      </RootStack.Navigator>
    </NavigationContainer>

  );
}
