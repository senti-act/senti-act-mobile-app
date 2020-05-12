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
import AsyncStorage from '@react-native-community/async-storage';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import RNPickerSelect from 'react-native-picker-select';
import ImagePicker from 'react-native-image-picker';
import UserService from '../../Networking/UserService'
const { height, width } = Dimensions.get('window');

class AccountSettings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      avatarSource: '',
    };
  }
 
  pickImage = async () => {
     // More info on all the options is below in the API Reference... just some common use cases shown here
      const options = {
        title: 'Select Avatar',
        storageOptions: {
          skipBackup: true,
          path: 'images',
        },
      };
    /**
      * The first arg is the options object for customization (it can also be null or omitted for default options),
      * The second arg is the callback which sends object: response (more info in the API Reference)
      */
    ImagePicker.showImagePicker(options, async (response)=> {
      // console.log('Response = ', response); 

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        // const source = { uri: response.uri };
        // const source = response.uri

        // You can also display the image using data:
        const source =  'data:image/jpeg;base64,' + response.data 
        await AsyncStorage.setItem('avatar', source);

        this.setState({avatarSource: source,});

        //endpoint to udpate user picture here 
        //this.updatePicture()
      }
    });
  }

  // updatePicture=async()=>{
  //   var id = await AsyncStorage.getItem('id');
  //   data={image:this.state.avatarSource}
  //   UserService.updateUser(id,data).then(x=>{
  //     console.log(x)
  //     // var id = await AsyncStorage.getItem('user');
  //     UserService.getById(id).then( async x=>{
  //       await AsyncStorage.setItem('user',JSON.stringify(x))
  //       var user =  await AsyncStorage.getItem('user');
  //       console.log(user)
  //     }).catch(err=>{
  //       console.log(err)
  //     })
  //   }).catch(err=>{
  //     console.log(err)
  //   })
  // }

  async componentDidMount (){
    var avatar =  await AsyncStorage.getItem('avatar');
    this.setState({
      avatarSource: avatar,
    });    
    // user = JSON.parse(user)
    // // var imagData = 'data:image/png;base64,' + btoa(user[0].image.data);
    // var img = Buffer.from(user[0].image.data,'base64')
    // let base64String = btoa(String.fromCharCode(...new Uint8Array(user[0].image.data)));
  }

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
          <View style={{ flex: 1, paddingHorizontal: 20, marginVertical: 20 }}>
            <View
              style={{ flex: 1, flexDirection: 'row', width: '100%', height: 80, backgroundColor: '#38b0a4', alignSelf: 'center', borderRadius: 15, }}>
              <View style={{ flex: 1, borderRadius: 15, alignItems: 'flex-start', justifyContent: 'center', marginTop: 15, marginLeft: 20 }}>
                <Text
                  style={{ paddingLeft: 20, fontSize: 18, color: '#174a5a' }}>
                  <TouchableOpacity onPress={()=>this.pickImage()} style={{ backgroundColor: '#F6F6F6', width: 80, height: 80, borderRadius: 500 }}>
                  <Image source={{uri:this.state.avatarSource}} style={{flex:1, borderRadius: 500,}} />
                  </TouchableOpacity>
                </Text>
              </View>
              <View
                style={{ flex: 1, borderRadius: 15, alignItems: 'flex-end', justifyContent: 'flex-end', marginTop: 90, marginRight: 20 }}>
                <Image
                  style={{ width: width / 4.5, height: width / 6 }}
                  source={require('../../Assets/settings.png')}
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
            }}>
            <View style={styles.box}>
              <Text style={styles.firstRowText}>Email</Text>
              <View style={{ justifyContent: 'center' }}>
                <Text style={styles.secondRowText}>{user.email}</Text>
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
              <RNPickerSelect
                  onValueChange={value => {
                    this.setState({
                      category: value,
                    });
                  }}
                  placeholder={{label: 'Select',value: null,color: '#2E5C6B',
                  }}
                  items={[
                    {label: 'Liters', value: '1'},
                    {label: 'M3', value: '2'}
                  ]}
                  style={{
                    inputAndroid: {
                      color: '#174A5A',                    
                    },
                    iconContainer: {
                      right: 10,
                      top: -4,
                    },
                    placeholder: {
                      color: '#174A5A',                    
                    },
                    inputIOS:{
                      color: '#174A5A',                    
                    }
                  }}
                  useNativeAndroidPickerStyle={false}
                />
              </View>
            </View>
          </View>
          <TouchableOpacity
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
            <EvilIcons
              style={{ alignSelf: 'center', width: '20%', paddingLeft: 20 }}
              size={36}
              name={'trash'}
              color="#174A5A"
            />
          </TouchableOpacity>
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
