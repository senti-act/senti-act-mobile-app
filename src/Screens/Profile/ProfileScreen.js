import * as React from 'react';
import {
  Text,
  View,
  ScrollView,
  Image,
  SafeAreaView,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import UserService from '../../Networking/UserService'
import AsyncStorage from '@react-native-community/async-storage';
import { AuthContext } from '../../Context/AuthContext';
const { height, width } = Dimensions.get('window');

class ProfileScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      id:'1574ec1a-7443-11ea-9eaf-08606e6ce1c1',
      user:{},
      sentiUser:{}
    }
  }

  componentDidMount(){
    this.getUserById()
    this.getSentiUser()
  }

  getUserById(){
    var id = this.state.id 
    UserService.getById(id).then(x => {
      this.setState({
        user:x
      })
    }).catch(err =>{
      console.log(err)
    })
  }

  async getSentiUser(){
    var user = await AsyncStorage.getItem('user');
    user = JSON.parse(user)
    this.setState({
      sentiUser:user
    })
  }

  render() {
    const { route, navigation } = this.props;

    return (
    <AuthContext.Consumer>
      {({setToken})=>(
      <SafeAreaView style={{ height: '100%', width: '100%' }}>
        <ScrollView
          style={{ flex: 1, marginTop: 10 }}
          contentContainerStyle={{
            alignItems: 'center',
            flexDirection: 'column',
          }}>
          <View style={{ flex: 1, paddingHorizontal: 20, marginTop:50, marginBottom:20}}>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  width: '100%',
                  height: 135,
                  backgroundColor: '#71c6c0',
                  alignSelf: 'center',
                  borderRadius: 15,
                }}>
                <View
                  style={{
                    flex: 1,
                    borderRadius: 15,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{ paddingLeft: 20, fontSize: 18, color: '#174a5a' }}>
                  Good morning, {this.state.sentiUser.firstName}
                  </Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    borderRadius: 15,
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                  }}>
                  <Image
                    style={{ width: width / 2.6, height: width / 2.5 }}
                    source={require('../../Assets/easy.png')}
                  />
                </View>
              </View>
          
          </View>

          <View
            style={{
              backgroundColor: 'white',
              width: '90%',
              borderRadius: 10,
              flexDirection: 'column',
              flex: 6,
            }}>
            <TouchableOpacity
              style={styles.touchable}
              onPress={() => navigation.navigate('Account', {user: this.state.sentiUser})}>
              <Text style={styles.text}>Account setting</Text>
              <Ionicons style={{flex:1,textAlign:'right',marginRight:30}} size={28} name={'ios-arrow-forward'} color="#174A5A" />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.touchable}
              onPress={() => navigation.navigate('Notifications')}>
              <Text style={styles.text}>Notifications</Text>
              <Ionicons style={{flex:1,textAlign:'right',marginRight:30}} size={28} name={'ios-arrow-forward'} color="#174A5A" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchable} 
              onPress={() => navigation.navigate('Privacy policy')}>
              <Text
                style={styles.text}>
                Privacy Policy
              </Text>
              <Ionicons style={{flex:1,textAlign:'right',marginRight:30}} size={28} name={'ios-arrow-forward'} color="#174A5A" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchable}
              onPress={() => navigation.navigate('FAQ')}>
              <Text
                style={styles.text}>
                FAQ
              </Text>
              <Ionicons style={{flex:1,textAlign:'right',marginRight:30}} size={28} name={'ios-arrow-forward'} color="#174A5A" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchable}
              onPress={() => navigation.navigate('About')}>
              <Text
                style={styles.text}>
                About Senti.act
              </Text>
              <Ionicons style={{flex:1,textAlign:'right',marginRight:30}} size={28} name={'ios-arrow-forward'} color="#174A5A" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchable}>
              <Text style={styles.text}>Create user in the household</Text>
              <Ionicons style={{flex:1,textAlign:'right',marginRight:30}} size={28} name={'ios-arrow-forward'} color="#174A5A" />
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            onPress={async () => {
              try {
                await AsyncStorage.removeItem('token');
                setToken(null)
                //this.props.navigation.navigate('WelcomeScreen');
              } catch (e) {
                alert(e.message);
              }
            }}
            style={[
              styles.touchable,
              {
                backgroundColor: 'white',
                borderRadius: 10,
                marginTop: 20,
                marginBottom: 20,
                width: '90%',
                flex: 2,
              },
            ]}>
            <Text style={styles.text}>Log out</Text>
            <AntDesign style={{flex:1,textAlign:'right',marginRight:30}} size={20} name={'poweroff'} color="black" />
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
        )}
      </AuthContext.Consumer>
    );
  }
}

const styles = {
  touchable: {
    height: 70,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
    alignItems: 'center',
  },
  text: {
    width: '80%',
    paddingLeft: 20,
    alignSelf: 'center',
    color: '#174A5A',
    fontSize: 15,
  },
};

export default ProfileScreen;
