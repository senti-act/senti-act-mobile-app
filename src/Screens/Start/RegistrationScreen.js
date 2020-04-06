import * as React from 'react';
import {Text, View, TouchableOpacity, Image, ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {TextInput} from 'react-native-paper';
import RNPickerSelect from 'react-native-picker-select';
import Ionicons from 'react-native-vector-icons/Ionicons';
import UserService from '../../Networking/UserService';
import CheckBox from 'react-native-check-box';

class RegistrationScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {},
      nickname: '',
      adults: 0,
      children: 2,
      isChecked: false,
    };
  }

  registerUser() {
    if (this.state.isChecked) {
      UserService.registerUser(
        this.state.nickname,
        this.state.adults,
        this.state.children,
      )
        .then(() => {
          alert('succesfully created new user');
        })
        .catch(err => {
          alert(JSON.stringify(err));
        });
    } else {
      alert(
        'You need to accept terms and conditions in order to create an account',
      );
    }
  }

  handleClick = () => {
    this.setState({
      isChecked: !this.state.isChecked,
    });
  };

  render() {
    const { navigation } = this.props;

    const numbers =
    [
        {label: '1', value: '1'},
        {label: '2', value: '2'},
        {label: '3', value: '3'},
        {label: '4', value: '4'},
        {label: '5', value: '5'},
        {label: '6', value: '6'},
    ]

    return (
      <ScrollView>
        <View style={{padding: 20, height: '100%', marginBottom: 25}}>
          <View style={{width: '100%', borderRadius: 10, height: '25%'}}>
            <LinearGradient
              colors={['#a6d8d5', '#71c6c0', '#38b0a4']}
              style={{
                width: '100%',
                borderRadius: 10,
                height: '85%',
                flexDirection: 'row',
              }}
            />
            <View style={{width: '95%', position: 'absolute', marginTop: -20}}>
              <Image
                source={require('../../Assets/start/family.png')}
                style={{width: 120, height: 145, alignSelf: 'center'}}></Image>
            </View>
          </View>

          <View style={styles.contentContainer}>
              <Text style={styles.contentFont}>
                You need to sign-in to complete your profile:
              </Text>
            <View style={{flexDirection: 'column'}}>
              <TextInput
                style={styles.textInputLong}
                mode="outlined"
                label="E-mail"
                onChangeText={text => this.setState({nickname: text})}
                theme={{colors: {primary: '#18495A'}}}
                autoCapitalize="none"
                autoCorrect={false}
                returnKeyType={'next'}
              />
              <TextInput
                style={styles.textInputLong}
                mode="outlined"
                label="Password"
                theme={{colors: {primary: '#18495A'}}}
                autoCapitalize="none"
                autoCorrect={false}
                returnKeyType={'next'}
              />
              <TextInput
                style={styles.textInputLong}
                mode="outlined"
                label="Repeat password"
                underlineColor="#184B5B"
                theme={{colors: {primary: '#18495A'}}}
                autoCapitalize="none"
                autoCorrect={false}
              />
            </View>
              <Text style={styles.contentFont}>
                To better analyze your data, we need to know how many children
                and adults are in the household.
              </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                flexWrap: 'wrap',
                width: '100%',
                justifyContent: 'space-between',
              }}>
              <View
                style={styles.viewPicker}>
                <RNPickerSelect
                  onValueChange={value => {
                    this.setState({
                      adults: value,
                    });
                  }}
                  placeholder={{
                    label: 'Number of adults',
                    value: null,
                    color: '#2E5C6B',
                  }}
                  items={numbers}
                  style={{
                    inputAndroid: {
                      color: 'black',
                      borderWidth: 2,
                      borderRadius: 10,
                      borderColor: '#2E5C6B',
                      paddingRight: 25,
                    },
                    iconContainer: {
                      top: -4,
                      right: 10,
                    },
                    placeholder: {
                      color: '#2E5C6B',
                      fontSize: 12,
                      fontWeight: 'bold',
                      paddingLeft: 10,
                    },
                  }}
                  useNativeAndroidPickerStyle={false}
                  Icon={() => {
                    return (
                      <Ionicons
                        size={23}
                        name={'ios-arrow-down'}
                        color="#174A5A"
                      />
                    );
                  }}
                />
              </View>
              <View
                style={styles.viewPicker}>
                <RNPickerSelect
                  onValueChange={value => {
                    this.setState({
                      children: value,
                    });
                  }}
                  placeholder={{
                    label: 'Number of children',
                    value: null,
                    color: '#2E5C6B',
                  }}
                  items={numbers}
                  style={{
                    inputAndroid: {
                      color: 'black',
                      borderWidth: 2,
                      borderRadius: 10,
                      borderColor: '#2E5C6B',
                      paddingRight: 25,
                    },
                    iconContainer: {
                      right: 10,
                      top: -4,
                    },
                    placeholder: {
                      color: '#2E5C6B',
                      fontSize: 12,
                      fontWeight: 'bold',
                      paddingLeft: 10,
                    },
                  }}
                  useNativeAndroidPickerStyle={false}
                  Icon={() => {
                    return (
                      <Ionicons
                        size={23}
                        name={'ios-arrow-down'}
                        color="#174A5A"
                      />
                    );
                  }}
                />
              </View>
            </View>

            <View style={{flexDirection: 'row', marginTop: 20}}>
              <CheckBox
                onClick={this.handleClick}
                isChecked={this.state.isChecked}
                leftText={'CheckBox'}
                checkedCheckBoxColor={'#FA831B'}
                uncheckedCheckBoxColor={'#FA831B'}
                //key={this.props.key}
              />
                <Text style={styles.termsText}>
                  Yes, I accept the terms and conditions for personal data
                  policy
                </Text>
            </View>

            <View style={{flexDirection: 'row', alignSelf: 'center'}}>
              <View style={{width: '100%'}}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() =>
                      navigation.navigate('startGuideSkipStack')
                      //this.registerUser()
                    //alert(this.state.adults)
                  }>
                  <Text style={{alignSelf: 'center', color: 'white'}}>Yes</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = {
  textInputLong: {
    backgroundColor: 'white',
    borderRadius: 20,
    width: '100%',
    height: 40,
    borderColor: '#18495A',
    paddingBottom:5,
  },
  button: {
    backgroundColor: '#FA821B',
    borderRadius: 10,
    width: '33%',
    height: 35,
    justifyContent: 'center',
    alignSelf: 'center',
    marginVertical: 10,
  },
  contentContainer: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    height: '100%',
    borderRadius: 10,
    marginBottom: 120,
  },
  contentFont: {
    color: '#174A5A',
    fontSize: 14,
    paddingVertical:18
  },
  termsText: {
    color: '#174A5A',
    fontSize: 12,
  },
  viewPicker:{
    justifyContent: 'center',
    width: '48%',
    marginTop: 10,
    alignSelf: 'flex-end',
    borderWidth: 1,
    height: 40,
    borderRadius: 6,
    borderColor: '#18495A',
  }
};

export default RegistrationScreen;
