import * as React from 'react';
import {
  Text,
  View,
  ScrollView,
  Image,
  SafeAreaView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import ModalDropdown from 'react-native-modal-dropdown';

class AccountSettings extends React.Component {

  render() {
    const user = this.props.route.params.user
    return (
      <SafeAreaView style={{ height: '100%', width: '100%' }}>
        <ScrollView
          style={{ flex: 1 }}
          contentContainerStyle={{
            alignItems: 'center',
            flexDirection: 'column',
          }}>
          <View style={{ padding: 20 }}>
            <LinearGradient
              colors={['#a6d8d5', '#71c6c0', '#38b0a4']}
              style={{
                width: '100%',
                height: 80,
                borderRadius: 10,
                flexDirection: 'row',
              }}>
              <View style={{ flex: 1, height: '100%', justifyContent: 'center' }}>
                <Text style={{ fontSize: 24, alignSelf: 'center' }}>
                  picture here
                </Text>
              </View>
              <View style={{ flex: 1, height: '100%' }}>
                <Image
                  style={{ resizeMode: 'contain', width: '100%', height: '60%' }}
                  source={require('../../Assets/settings.png')}></Image>
              </View>
            </LinearGradient>
          </View>
          <View
            style={{
              backgroundColor: 'white',
              width: '90%',
              borderRadius: 10,
              flexDirection: 'column',
            }}>
            <View style={styles.box}>
              <Text style={styles.firstRowText}>Email</Text>
              <View style={{ justifyContent: 'center' }}>
                <Text style={styles.secondRowText}>{user.userName}</Text>
              </View>
            </View>
            <View style={styles.box}>
              <Text style={styles.firstRowText}>Password</Text>
              <View style={{ justifyContent: 'center' }}>
                <Text style={styles.secondRowText}>lol?</Text>
              </View>
            </View>
            <View style={styles.box}>
              <Text style={styles.firstRowText}>Name</Text>
              <View style={{ justifyContent: 'center' }}>
                <Text style={styles.secondRowText}>{user.firstName} {user.lastName}</Text>
              </View>
            </View>
            <View style={styles.box}>
              <Text style={styles.firstRowText}>Address</Text>
              <View style={{ justifyContent: 'center' }}>
                <Text style={styles.secondRowText}>{user.aux.sentiWaterworks.extendedProfile.address}</Text>
              </View>
            </View>
            <View style={styles.box}>
              <Text style={styles.firstRowText}>Post number</Text>
              <View style={{ justifyContent: 'center' }}>
                <Text style={styles.secondRowText}>{user.aux.sentiWaterworks.extendedProfile.postnr}</Text>
              </View>
            </View>
            <View style={styles.box}>
              <Text style={styles.firstRowText}>City</Text>
              <View style={{ justifyContent: 'center' }}>
                <Text style={styles.secondRowText}>{user.aux.sentiWaterworks.extendedProfile.city}</Text>
              </View>
            </View>
            <View style={styles.box}>
              <Text style={styles.firstRowText}>
                Number of adults in the household
              </Text>
              <View style={{ justifyContent: 'center' }}>
                <Text style={styles.secondRowText}>{user.aux.sentiWaterworks.extendedProfile.noOfAdults}</Text>
              </View>
            </View>
            <View style={styles.box}>
              <Text style={styles.firstRowText}>
                Number of children in the household
              </Text>
              <View style={{ justifyContent: 'center' }}>
                <Text style={styles.secondRowText}>{user.aux.sentiWaterworks.extendedProfile.noOfChildren}</Text>
              </View>
            </View>
            <View style={styles.box}>
              <Text style={styles.firstRowText}>Show my data in: </Text>
              <View style={{ height: '60%', paddingLeft: 30 }}>
                <ModalDropdown
                  options={['Liters', 'm3']}
                  textStyle={{ color: '#174A5A' }}
                  dropdownTextStyle={{ fontSize: 18, color: '#174A5A' }}
                  dropdownTextHighlightStyle={{
                    fontSize: 20,
                    color: '#174A5A',
                  }}></ModalDropdown>
              </View>
            </View>
          </View>
          <View
            style={{
              backgroundColor: 'white',
              borderRadius: 10,
              marginTop: 20,
              marginBottom: 20,
              width: '90%',
              flex: 2,
              height: 70,
              flexDirection: 'row',
            }}>
            <Text
              style={{
                width: '80%',
                paddingLeft: 20,
                alignSelf: 'center',
                color: '#174A5A',
              }}>
              Delete data and profile
            </Text>

            <TouchableOpacity></TouchableOpacity>
            <EvilIcons
              style={{ alignSelf: 'center', width: '20%', paddingLeft: 20 }}
              size={36}
              name={'trash'}
              color="#174A5A"
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = {
  box: {
    height: 70,
    flexDirection: 'column',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },
  firstRowText: {
    width: '100%',
    fontWeight: '700',
    height: '40%',
    paddingLeft: 30,
    paddingTop: 10,
    color: '#174A5A',
  },
  secondRowText: {
    width: '100%',
    height: '60%',
    paddingLeft: 30,
    color: '#174A5A',
  },
};

export default AccountSettings;
