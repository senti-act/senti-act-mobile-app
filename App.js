import * as React from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { createAppContainer } from 'react-navigation';
import { createSwitchNavigator } from 'react-navigation';
import { TouchableOpacity } from 'react-native-gesture-handler';
import LineIcons from 'react-native-vector-icons/SimpleLineIcons';
import HomeScreen from './src/Screens/HomeScreen';
import Header from './src/Components/Header'
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
import SubmitTipScreen from './src/Screens/Tips/SubmitTipScreen';
import DisplayTips from './src/Screens/Tips/DisplayTips';
//Consumption screens
import ConsumptionScreen from './src/Screens/Consumption/ConsumptionScreen';
import SpendingsScreen from './src/Screens/Consumption/SpendingsScreen';

const Tab = createBottomTabNavigator();
const TipsStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const CompetitionStack = createStackNavigator();
const SpendingsStack = createStackNavigator();
const StartStack = createStackNavigator();
const LoginStack = createStackNavigator();
const GuideStack = createStackNavigator();
const Main = createStackNavigator();
const RootStack = createStackNavigator();

function tipsStack() {
  return (
    <TipsStack.Navigator
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
      <TipsStack.Screen
        name="Tips and tricks"
        component={TipsScreen}
        // options={({ navigation }) => ({
        //   header: () => <Header title="Shifts" />,
        // })}
      />
      <TipsStack.Screen name="Display" component={DisplayTips} />
      <TipsStack.Screen
        name="Submit tips"
        component={SubmitTipScreen}
        options={{ headerTitle: 'Add your tips and tricks' }}
      />
    </TipsStack.Navigator>
  );
}

function profileStack() {
  return (
    <ProfileStack.Navigator
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
      <ProfileStack.Screen name="Profile" component={ProfileScreen} />
      <ProfileStack.Screen name="Account" component={AccountSettings} />
      <ProfileStack.Screen name="Notifications" component={Notifications} />
      <ProfileStack.Screen name="Privacy policy" component={Privacy} />
      <ProfileStack.Screen name="FAQ" component={FAQ} />
      <ProfileStack.Screen name="About" component={About} />
    </ProfileStack.Navigator>
  );
}

// HomeStack
function competitionStack() {
  return (
    <CompetitionStack.Navigator
      initialRouteName="Competition"
      screenOptions={{
        header: () => <Header title="Competition" />,
        gestureEnabled: true,
      }}
      headerMode="float"
      >
      <CompetitionStack.Screen name="Competition" component={HomeScreen} />
    </CompetitionStack.Navigator>
  );
}

function spendingsStack() {
  return (
    <SpendingsStack.Navigator
      initialRouteName="My water status"
      screenOptions={{
        header: () => <Header title="My water status" />,
        gestureEnabled: true,
        headerTitleAlign: 'center',
        headerTintColor: '#174a5a',
        headerBackTitleVisible: false,
      }}
      headerMode="float">
      <SpendingsStack.Screen name="My water consumption" component={SpendingsScreen} options={{ title: 'My water status' }} />
      <SpendingsStack.Screen name="ConsumptionScreen" component={ConsumptionScreen} options={{ title: 'My water consumption' }} />
    </SpendingsStack.Navigator>
  );
}

// First stack to be executed when app starts running
function startStack() {

  return (
    <StartStack.Navigator
      initialRouteName="WelcomeScreen"

      screenOptions={{

        gestureEnabled: true,
        headerStyle: {
          height: '100%',
        },
        headerTitleStyle: {
          fontSize: 20,
          paddingVertical: 10,
        },
        headerTitleAlign: 'center',
        headerTintColor: '#174a5a',
        //headerBackTitleVisible: false,
      }}
      headerMode="float">
      <StartStack.Screen name="WelcomeScreen" component={WelcomeScreen} options={{ headerShown: false }} />
      <StartStack.Screen name="InstructionsScreen" component={InstructionsScreen} options={{ headerShown: false }} />
      <StartStack.Screen name="DataSyncScreen" component={DataSyncScreen} options={{ title: 'Connect to your data' }} />
      <StartStack.Screen name="DataCheckScreen" component={DataCheckScreen} options={{ title: 'Good luck we found a match' }} />
      <StartStack.Screen name="RegistrationScreen" component={RegistrationScreen} options={{ title: 'Complete your profile' }} />
      <StartStack.Screen name="startGuideSkipStack" component={startGuideSkipStack} options={{ headerShown: false }} />
      <StartStack.Screen name="GuideScreen" component={GuideScreen} options={{ title: '' }} />
      <StartStack.Screen name='StartLoginScreen' component={StartLoginScreen} options={{ title: '', headerTransparent: true }} />
      <StartStack.Screen name='Login' component={loginStack} options={{ headerShown: false }} />
    </StartStack.Navigator>
  );
}

// Part of the startStack
function loginStack() {
  return (
    <LoginStack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerTransparent: false,
        gestureEnabled: true,
        headerStyle: {
          height: '100%',
        },
        headerTitleStyle: {
          fontSize: 20,
          paddingVertical: 10,
        },
        headerTitleAlign: 'center',
        headerTintColor: '#174a5a',
        headerBackTitleVisible: false,
      }}
      headerMode="float">
      <LoginStack.Screen name="LoginScreen" component={LoginScreen} options={{ title: 'Log in', headerShown: false, }} />
      <LoginStack.Screen name="ReportScreen" component={ReportScreen} options={{ title: 'Do you have coronavirus? ' }} />
      <LoginStack.Screen name="RegistrationScreen" component={RegistrationScreen} options={{ title: 'Registration' }} />
    </LoginStack.Navigator>
  );
}

// Part of the startStack
function startGuideSkipStack() {
  return (
    <GuideStack.Navigator
      initialRouteName="startGuideSkipStack"
      screenOptions={{
        gestureEnabled: true,
        headerStyle: {
          height: '15%',
        },
        headerTitleStyle: {
          fontSize: 20,
          paddingVertical: 10,
        },
        headerTitleAlign: 'center',
        headerTintColor: '#174a5a',
        headerBackTitleVisible: false,
      }}
      headerMode="float">
      <GuideStack.Screen name="StartGuideScreen" component={StartGuideScreen} options={{ headerShown: false }} />
      <GuideStack.Screen name="GuideScreen" component={GuideScreen} options={{ headerShown: false }} />
      <GuideStack.Screen name="Login" component={loginStack} options={{ headerShown: false }} />
    </GuideStack.Navigator>
  );
}

// Bottom tabbar navigation
function tabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Competition') {
            iconName = focused ? 'trophy' : 'trophy';
            size = focused ? 30 : 28;
          } else if (route.name === 'Spendings') {
            iconName = focused ? 'drop' : 'drop';
            size = focused ? 30 : 28;
          } else if (route.name === 'Tips') {
            iconName = focused ? 'info' : 'info';
            size = focused ? 30 : 28;
          } else if (route.name === 'Profile') {
            iconName = focused ? 'user' : 'user';
            size = focused ? 30 : 28;
          }
          return <LineIcons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'white',
        inactiveTintColor: 'white',
        activeBackgroundColor: '#1f657a',
        inactiveBackgroundColor: '#174A5A',
        style: { height: 90,
        backgroundColor:'#174A5A' },
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
      <RootStack.Screen name="WelcomeScreen" component={startStack} options={{ headerShown: false }} />
      <RootStack.Screen name="navigation" component={tabNavigation} options={{ headerShown: false }} />
    </RootStack.Navigator>
  </NavigationContainer>
  );
}
