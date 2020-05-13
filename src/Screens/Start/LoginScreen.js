import * as React from 'react';
import { Text, View, TouchableOpacity, Image, ActivityIndicator, Dimensions, KeyboardAvoidingView } from 'react-native';
import { TextInput } from 'react-native-paper';
import UserService from '../../Networking/UserService';
import Auth from '../../Networking/Auth';
import AsyncStorage from '@react-native-community/async-storage';
import { AuthContext } from '../../Context/AuthContext';

const { width, height } = Dimensions.get('screen');

class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nickname: '',
      //cbroberg
      password: '',
      //webhouse
      organisation: '',
      //hfsundbyvester
      users: [],
      loading: false,
    };
  }

  componentDidMount() {
    this.getAllUsers()
  }

  getAllUsers() {
    UserService.getAllUsers().then(x => {
      this.setState({
        users: x
      })
    }).catch(err => {
      console.log(err)
    })
  }

  handleLogin = (setToken) => {
    this.setState({ loading: true });
    if (this.state.nickname.length > 0 && this.state.password.length > 0 && this.state.organisation.length > 0) {
      Auth.auth(this.state.organisation, this.state.nickname, this.state.password)
        .then(async token => {
          try {
            await AsyncStorage.setItem('token', token.token);
            if (this.state.users.length > 0) {
              if (this.state.users.find(users => users.uuid === token.uuid)) {
                this.setState({ loading: false });
                await this.setUser()
                setToken(token.token)
                // this.props.navigation.navigate('navigation');
              } else {
                UserService.registerUser(this.state.nickname, token.uuid).then(async () => {
                  this.setState({ loading: false });
                  await this.setUser()
                  setToken(token.token)
                  // this.props.navigation.navigate('navigation');
                })
                  .catch(err => {
                    alert(JSON.stringify(err));
                  })
              }
            }
            this.setState({ loading: false });
          } catch (e) {
            this.setState({ loading: false });
            alert(e.message);
          }
        })
        .catch(() => {
          this.setState({ loading: false });
          alert('Cannot login. Wrong data');
        });
    } else {
      this.setState({ loading: false });
    }
  };

  setUser = () => {
    return new Promise((resolve, reject) => {
      Auth.getMe()
        .then(async x => {
          console.log(x)
          try {
            await AsyncStorage.setItem('user', JSON.stringify(x));
            resolve();
          } catch (e) {
            reject(e);
          }
        })
        .catch(e => {
          reject(e);
        });
    });
  };

  render() {
    const { navigation } = this.props;
    return (
    <AuthContext.Consumer>
      {({setToken})=>(
      <View style={{ alignItems: "center", width: '100%', backgroundColor: 'white', padding: 30, paddingVertical: 50, height: '100%' }}>
        <KeyboardAvoidingView style={styles.wholePageContainer}
          behavior={Platform.OS === 'android' ? null : 'padding'}
          enabled>
          <Text style={styles.title}>Welcome to</Text>
          <Image source={require('../../Assets/start/logo.png')} style={styles.logo}></Image>
          <Image source={require('../../Assets/start/group.png')} style={styles.picture}></Image>
          <TextInput style={styles.textInputLong} mode='outlined' label='Nickname' underlineColor='#184B5B'
            theme={{ colors: { primary: '#2C5A69', background: '#003489' } }}
            onChangeText={text => this.setState({ nickname: text })}
            autoCapitalize="none"
            autoCorrect={false} />
          <TextInput style={styles.textInputLong} mode='outlined' label='Password' underlineColor='#184B5B'
            theme={{ colors: { primary: '#2C5A69', background: '#003489' } }}
            onChangeText={text => this.setState({ password: text })}
            autoCapitalize="none"
            autoCorrect={false} />
          <TextInput style={styles.textInputLong} mode='outlined' label='OrganisationID' underlineColor='#184B5B'
            theme={{ colors: { primary: '#2C5A69', background: '#003489' } }}
            onChangeText={text => this.setState({ organisation: text })}
            autoCapitalize="none"
            autoCorrect={false} />
          <View style={{ flexDirection: 'row', padding: 10, width: '100%', justifyContent: 'space-between' }}>
            <TouchableOpacity
            //onPress={() => navigation.navigate('ReportScreen')}
            >
              <Text style={{ color: 'black', fontSize: 14 }}>Unable to login?</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('DataSyncScreen')}>
              <Text style={{ justifyContent: 'flex-end', color: 'black', fontSize: 14, fontWeight: 'bold' }}>Sign up</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.buttonStyle}
            onPress={() => this.handleLogin(setToken)}
            //onPress={() => navigation.navigate('navigation')}
            >
            <Text style={{ alignSelf: 'center', color: 'white', fontSize: 14, fontWeight: '500' }}>Login</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>

        {this.state.loading ? (
          <View style={styles.overlay}>
            <ActivityIndicator size="large" color="white" />
            <Text style={{ color: 'white' }}>Logging in</Text>
          </View>) : null}
      </View >
      )}
      </AuthContext.Consumer>
    )
  }
}

const styles = {
  buttonStyle: {
    backgroundColor: '#FA821B',
    borderRadius: 10,
    padding: 10,
    width: '40%',
    justifyContent: 'center',
    marginVertical: 20,
    alignSelf: 'center'
  },
  title: {
    fontSize: 25,
    color: '#49717D',
    justifyContent: 'center',
  },
  logo: {
    height: '8%',
    resizeMode: 'contain',
    margin: 5,
    marginBottom: 15
  },
  picture: {
    height: '34%',
    resizeMode: 'contain',
    margin: 5,
  },
  textInputLong: {
    backgroundColor: 'white',
    padding: 5,
    borderRadius: 20,
    width: '100%',
    height: 40,
  },
  overlay: {
    height: height,
    width: width,
    position: 'absolute',
    zIndex: 100,
    elevation: 5,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  wholePageContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
};

export default LoginScreen;
