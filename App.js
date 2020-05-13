import React, {useState, useEffect, useRef,} from 'react';
import {Text, View, SafeAreaView, AppState} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {TouchableOpacity} from 'react-native-gesture-handler';
import LineIcons from 'react-native-vector-icons/SimpleLineIcons';
import HomeScreen from './src/Screens/HomeScreen';
import Header from './src/Components/Header';
import DeviceInfo from 'react-native-device-info';
import AsyncStorage from '@react-native-community/async-storage';
import Auth from '../senti-act-mobile-app/src/Networking/Auth';
import {AuthContext} from './src/Context/AuthContext'
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
import UserService from './src/Networking/UserService';
import moment from 'moment';
import NotifService from './src/NotificationManager/NotifService'

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
// const TipsStack = createStackNavigator();
// const ProfileStack = createStackNavigator();
// const CompetitionStack = createStackNavigator();
// const SpendingsStack = createStackNavigator();
// const StartStack = createStackNavigator();
// const LoginStack = createStackNavigator();
// const GuideStack = createStackNavigator();
// const RootStack = createStackNavigator();

// First stack to be executed when app starts running
const StartStack = ()=> {
  return (
    <Stack.Navigator
      initialRouteName="WelcomeScreen"
      screenOptions={{...stackOptions()}}

      headerMode="float">
      <Stack.Screen
        name="WelcomeScreen"
        component={WelcomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="InstructionsScreen"
        component={InstructionsScreen}
        options={{title: 'Why play Senti.act?'}}
      />
      <Stack.Screen
        name="DataSyncScreen"
        component={DataSyncScreen}
        options={{title: 'Connect to your data'}}
      />
      <Stack.Screen
        name="DataCheckScreen"
        component={DataCheckScreen}
        options={{title: 'Good luck, we found a match'}}
      />
      <Stack.Screen
        name="RegistrationScreen"
        component={RegistrationScreen}
        options={{title: 'Complete your user profile'}}
      />
      <Stack.Screen
        name="startGuideSkipStack"
        component={startGuideSkipStack}
        options={{headerShown: false}}
      />
      {/* <StartStack.Screen
        name="GuideScreen"
        component={GuideScreen}
        options={{title: ''}}
      /> */}
      <Stack.Screen
        name="ReportScreen"
        component={ReportScreen}
        options={{title: 'Something went wrong? '}}
      />
      <Stack.Screen
        name="StartLoginScreen"
        component={StartLoginScreen}
        options={{title: '', headerTransparent: true}}
      />
      <Stack.Screen
        name="Login"
        component={loginStack}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
// Part of the startStack
const startGuideSkipStack = () => {
  return (
    <Stack.Navigator
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
      <Stack.Screen
        name="StartGuideScreen"
        component={StartGuideScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="GuideScreen"
        component={GuideScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
// Part of the startStack
const loginStack = () => {
  return (
    <Stack.Navigator
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
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{title: 'Log in', headerShown: false}}
      />
      <Stack.Screen
        name="RegistrationScreen"
        component={RegistrationScreen}
        options={{title: 'Registration'}}
      />
    </Stack.Navigator>
  );
}

// HomeStack
const competitionStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Competition"
      screenOptions={{...stackOptions()}}
      headerMode="float">
      <Stack.Screen name="Competition" component={HomeScreen} />
    </Stack.Navigator>
  );
}

const spendingsStack=()=> {
  return (
    <Stack.Navigator
      initialRouteName="My water status"
      screenOptions={{...stackOptions()}}
      headerMode="float">
      <Stack.Screen
        name="My water consumption"
        component={SpendingsScreen}
      />
      <Stack.Screen
        name="ConsumptionScreen"
        component={ConsumptionScreen}
        options={{title: 'Consumption'}}
      />
    </Stack.Navigator>
  );
}

const tipsStack=()=> {
  return (
    <Stack.Navigator
      initialRouteName="Tips and tricks"
      screenOptions={{...stackOptions()}}
      headerMode="float">
      <Stack.Screen
        name="Tips and tricks"
        component={TipsScreen}
        options={({navigation}) => ({
          headerRight: () => (
            <View style={{paddingRight: 16}}>
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
      <Stack.Screen
        name="Display"
        component={DisplayTips}
        options={({route}) => ({title: route.params.title})}
      />
      <Stack.Screen
        name="Submit tips"
        component={SubmitTipScreen}
        options={{headerTitle: 'Add your tips and tricks'}}
      />
    </Stack.Navigator>
  );
}

const stackOptions = () => {
  return { headerStyle: {
    backgroundColor: '#EEF3F7',
    height:
      Platform.OS === 'android' ? 60 : DeviceInfo.hasNotch() ? 100 : 70,
    shadowRadius: 0,
    shadowOffset: {
      height: 0,
    },
  },
  headerTitleStyle: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#174A5A',
    letterSpacing: 1,
  },
  headerTintColor: '#174A5A',
  headerBackTitleVisible: false,
  headerLeftContainerStyle:{
    marginLeft:20
  },
  headerBackTitleStyle: {
    paddingLeft: 30,
  },
}
}


const profileStack=()=> {
  return (
    <Stack.Navigator
      initialRouteName="Profile"
      screenOptions={{...stackOptions()}}
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

// Bottom tabbar navigation
const TabNavigation = () => {
  return (
    <Tab.Navigator
      name='navigation'
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Competition') {
            iconName = focused ? 'trophy' : 'trophy';
            size = focused ? 30 : 28;
            color= focused ?'#0AB4A1':'white';
          } else if (route.name === 'Consumption') {
            iconName = focused ? 'drop' : 'drop';
            size = focused ? 30 : 28;
            color= focused ?'#0AB4A1':'white';
          } else if (route.name === 'Tips') {
            iconName = focused ? 'info' : 'info';
            size = focused ? 30 : 28;
            color= focused ?'#0AB4A1':'white';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'user' : 'user';
            size = focused ? 30 : 28;
            color= focused ?'#0AB4A1':'white';
          }
          return <LineIcons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'white',
        inactiveTintColor: 'white',
        inactiveBackgroundColor: '#174A5A',
        style: {
          padding:5,
          height: 100,
          backgroundColor: '#174A5A',
        },
        labelStyle: {fontSize: 12,},
      }}>
      <Tab.Screen name="Competition" component={competitionStack} />
      <Tab.Screen name="Consumption" component={spendingsStack} />
      <Tab.Screen name="Tips" component={tipsStack} />
      <Tab.Screen name="Profile" component={profileStack} />
    </Tab.Navigator>
  );
}

export default function App(props) {

  const notif = new NotifService(onRegister,onNotif);
  const onRegister=(token)=> {console.log(token)}
  const onNotif=(notif) =>{console.log(notif)}

  const [token,setToken] = useState(null);

  useEffect(() => {
    checkToken()

    AppState.addEventListener("change", _handleAppStateChange);
    console.log('listener added')

    return () => {
      AppState.removeEventListener("change", _handleAppStateChange);
      console.log('listener removed')

    };
  }, []);

  const _handleAppStateChange = async nextAppState => {
    if (nextAppState === "active") {
      var id = await AsyncStorage.getItem('id')
      var today = moment().format('YYYY-MM-DD')
      UserService.getUserActivity(id).then(x=>{
        if (x.length < 1 || moment(x.date).format('YYYY-MM-DD') !== today) {
          //here we call the endpoint for daily point calculation
          UserService.getPoints(id).then(x=>{
            notif.localNotif('You have gained', `${x} points today.`);
          }).catch(err =>{
            console.log(err)
          })
          // then we post a new session
          UserService.postSession(id).then(x=>{
            console.log(x)
          }).catch(err=>{
            console.log(err)
          })
        }        
      }).catch(err=>{
        console.log(err)
      })
    }
  };

  const checkToken = async () => {
    try {
      const value = await AsyncStorage.getItem('token');
      if (value !== null) {
        setUser().then(() => {
            //this.props.navigation.navigate('navigation');
            setToken(value);
          }).catch(e => {
            console.log('error',e)
          });
      } else {
        setToken(null);
        //this.props.navigation.navigate('dupa');
      }
    } catch (e) {
      console.log(e);
    }
  };

  const setUser = () => {
    return new Promise((resolve, reject) => {
      Auth.getMe().then(async x => {
          try {
            await AsyncStorage.setItem('user', JSON.stringify(x));
            resolve();
          } catch (e) {
            reject(e);
          }
        }).catch(e => {
          reject(e);
        });
    });
  };

    return (
      <AuthContext.Provider value={{ token, setToken }}>
        <NavigationContainer>
          {token === null ? <StartStack/>: <TabNavigation/>}
        </NavigationContainer>
      </AuthContext.Provider>
    );



// //   <RootStack.Screen
// //   name="WelcomeScreen"
// //   component={startStack}
// //   options={{headerShown: false}}
// // /> 
// <RootStack.Screen
//          name="navigation"
//          component={tabNavigation}
//          options={{headerShown: false}}
//        /> */
    }