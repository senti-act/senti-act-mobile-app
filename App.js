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
import SubmitTipScreen from './src/Screens/SubmitTipScreen';
import ProfileScreen from './src/Screens/ProfileScreen';
import AccountSettings from './src/Screens/AccountSettings';
import Notifications from './src/Screens/Notifications';
import Privacy from './src/Screens/Privacy';
import FAQ from './src/Screens/FAQ';
import About from './src/Screens/About';
import ConsumptionScreen from './src/Screens/ConsumptionScreen';
import DataSyncScreen from './src/Screens/Start/DataSyncScreen';
import GuideScreen from './src/Screens/Start/GuideScreen';
import StartGuideScreen from './src/Screens/Start/StartGuideScreen';
import InstructionsScreen from './src/Screens/Start/InstructionsScreen';
import LoginScreen from './src/Screens/Start/LoginScreen';
import RegistrationScreen from './src/Screens/Start/RegistrationScreen';
import WelcomeScreen from './src/Screens/Start/WelcomeScreen';
import StartLoginScreen from './src/Screens/Start/StartLoginScreen';
import DataCheckScreen from './src/Screens/Start/DataCheckScreen';
import LineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';

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
                //onPress={() => alert('Submit screen coming up soon!')}
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
          backgroundColor: '#f2f2f2',
          height: 75,
        },
        headerTitleStyle: {
          fontSize: 24,
        },
        headerTitleAlign: 'center',
        headerTintColor: '#174a5a',
        //headerBackTitleVisible: false,
      }}
      headerMode="float">
      <Stack.Screen name="My water consumption" component={SpendingsScreen} />
      <Stack.Screen name="ConsumptionScreen" component={ConsumptionScreen} />
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      <Stack.Screen name="InstructionsScreen" component={InstructionsScreen} />
      <Stack.Screen name="DataSyncScreen" component={DataSyncScreen} />
      <Stack.Screen name="DataCheckScreen" component={DataCheckScreen} />
      <Stack.Screen name="RegistrationScreen" component={RegistrationScreen} />
      <Stack.Screen name="StartGuideScreen" component={StartGuideScreen} />
      <Stack.Screen name="GuideScreen" component={GuideScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>
  );
}
function loginStack() {
  return (
    <Stack.Navigator
      initialRouteName='Log in'
      screenOptions={{
        gestureEnabled: true,
        headerStyle: {
          backgroundColor: 'white',
          height: 65,
        },
        headerTitleStyle: {
          fontSize: 24,
        },
        headerTitleAlign: 'center',
        headerTintColor: '#174a5a',
        //headerBackTitleVisible: false,
      }}
      headerMode="float">
      <Stack.Screen name="StartLoginScreen" component={StartLoginScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="CompetitionScreen" component={HomeScreen} />
    </Stack.Navigator>
  )
}

// function startStack() {
//   return (
//     <Stack.Navigator
//       initialRouteName='Welcome'
//       screenOptions={{
//         gestureEnabled: true,
//         headerStyle: {
//           backgroundColor: 'white',
//           height: 65,
//         },
//         headerTitleStyle: {
//           fontSize: 24,
//         },
//         headerTitleAlign: 'center',
//         headerTintColor: '#174a5a',
//         //headerBackTitleVisible: false,
//       }}
//       headerMode="float">
// <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
// <Stack.Screen name="InstructionsScreen" component={InstructionsScreen} />
// <Stack.Screen name="DataSyncScreen" component={DataSyncScreen} />
// <Stack.Screen name="DataCheckScreen" component={DataCheckScreen} />
// <Stack.Screen name="RegistrationScreen" component={RegistrationScreen} />
// <Stack.Screen name="StartGuideScreen" component={StartGuideScreen} />
// <Stack.Screen name="GuideScreen" component={GuideScreen} />
//     </Stack.Navigator>
//   );
// }

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={{ flex: 0, backgroundColor: '#F2F2F2' }} />
      <SafeAreaView style={{ flex: 1, backgroundColor: '#174A5A' }}>
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
      </SafeAreaView>
    </NavigationContainer>
  );
}
