import * as React from 'react';
import {
  Text,
  View,
  ScrollView,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

class ProfileScreen extends React.Component {
  constructor(props) {
    super();
  }

  componentDidMount() {}

  render() {
    const {route, navigation} = this.props;

    return (
      <SafeAreaView style={{height: '100%', width: '100%'}}>
        <ScrollView
          style={{flex: 1, marginTop: 10}}
          contentContainerStyle={{
            alignItems: 'center',
            flexDirection: 'column',
          }}>
          <View style={{flex: 4, paddingHorizontal: 20, paddingBottom: 20}}>
            <LinearGradient
              colors={['#a6d8d5', '#71c6c0', '#38b0a4']}
              style={{
                width: '100%',
                height: 120,
                borderRadius: 10,
                flexDirection: 'row',
              }}>
              <View style={{flex: 1, height: '100%', justifyContent: 'center'}}>
                <Text
                  style={{
                    fontSize: 20,
                    alignSelf: 'center',
                    paddingLeft: 20,
                    color: '#1a1352',
                  }}>
                  Good morning, Christian!
                </Text>
              </View>
              <View style={{flex: 1, height: '110%'}}>
                <Image
                  style={{width: '90%', height: '115%'}}
                  source={require('../../Assets/easy.png')}></Image>
              </View>
            </LinearGradient>
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
              onPress={() => navigation.navigate('Account')}>
              <Text style={styles.text}>Account setting</Text>
              <Ionicons size={28} name={'ios-arrow-forward'} color="#174A5A" />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.touchable}
              onPress={() => navigation.navigate('Notifications')}>
              <Text style={styles.text}>Notifications</Text>
              <Ionicons size={28} name={'ios-arrow-forward'} color="#174A5A" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchable}>
              <Text
                style={styles.text}
                onPress={() => navigation.navigate('Privacy policy')}>
                Privacy Policy
              </Text>
              <Ionicons size={28} name={'ios-arrow-forward'} color="#174A5A" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchable}>
              <Text
                style={styles.text}
                onPress={() => navigation.navigate('FAQ')}>
                FAQ
              </Text>
              <Ionicons size={28} name={'ios-arrow-forward'} color="#174A5A" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchable}>
              <Text
                style={styles.text}
                onPress={() => navigation.navigate('About')}>
                About Senti.act
              </Text>
              <Ionicons size={28} name={'ios-arrow-forward'} color="#174A5A" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchable}>
              <Text style={styles.text}>Create user in the household</Text>
              <Ionicons size={28} name={'ios-arrow-forward'} color="#174A5A" />
            </TouchableOpacity>
          </View>

          <TouchableOpacity
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
            <AntDesign size={20} name={'poweroff'} color="black" />
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
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
