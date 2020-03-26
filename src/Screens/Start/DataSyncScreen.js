import * as React from 'react';
import { Text, View, TouchableOpacity, Image, ScrollView, CheckBox } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { TextInput } from 'react-native-paper';



class DataSyncScreen extends React.Component {
  componentDidMount() { }

  constructor(prop) {
    super()
  }
  render() {
    const { navigation } = this.props;
    return (

      <View style={{ padding: 20, height: '76%' }}>
        <View style={{ width: '100%', borderRadius: 10, height: '38%' }}>
          <LinearGradient colors={['#a6d8d5', '#71c6c0', '#38b0a4']}
            style={{
              width: '100%',
              borderRadius: 10,
              height: '86%'
            }} />
          <View style={{ width: '100%', position: "absolute" }}>
            <Image source={require('../../Assets/start/girlphone.png')} style={{ width: '49%', height: 120, alignSelf: 'flex-end' }}></Image>
          </View>
        </View>

        <View style={styles.contentContainer}>
          <View style={{ marginVertical: 22 }}>
            <Text style={{ fontSize: 15, color: '#2E5C6B', }}>Enter the following information to connect to your water usage data:</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <TextInput style={styles.textInputLong} mode='outlined' label='Address' underlineColor='#184B5B'
              theme={{ colors: { primary: '#2C5A69', background: '#003489' } }} />
          </View>
          <View style={{ flexDirection: 'row', marginBottom: 15 }}>
            <View style={{ alignSelf: 'flex-start', width: '50%' }}>
              <TextInput style={styles.textInputLong} mode='outlined' label='Post nr.' underlineColor='#184B5B'
                theme={{ colors: { primary: '#2C5A69', background: '#003489' } }} />
            </View>
            <View style={{ alignSelf: 'flex-start', width: '50%' }}>
              <TextInput style={styles.textInputLong} mode='outlined' label='City' underlineColor='#184B5B'
                theme={{ colors: { primary: '#2C5A69', background: '#003489' } }} />
            </View>
          </View>
          <View style={{ flexDirection: 'row', alignSelf: "center", width: '100%', flexWrap: 'wrap', justifyContent: 'center' }}>
            <View style={{ alignSelf: 'flex-start', width: '10%' }}>
              <CheckBox></CheckBox>
            </View>
            <View style={{ alignSelf: 'flex-end', width: '80%', marginLeft: 10 }}>
              <Text style={styles.contentFont}>
                Please note that we do not save your address. but
                use it to store you location so that we can make a
                regional breakdown of the game will you accept the
                terms?
              </Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row', alignSelf: "center", width: '100%' }}>
            <View style={{ width: '100%', marginVertical: 8, alignSelf: 'center' }}>
              <TouchableOpacity style={styles.buttonLeft}
                onPress={() => navigation.navigate('DataCheckScreen')}>
                <Text style={{ alignSelf: 'center', color: 'white' }}>Connect</Text>
              </TouchableOpacity>
            </View>

          </View>
        </View>
      </View >



    );
  }
}


const styles = {
  title: {
    alignSelf: 'center',
    color: '#2E5C6B',
    fontSize: 17,
    paddingBottom: 15,
    fontWeight: 'bold',
    padding: 0,
  },
  textInputLong: {
    backgroundColor: 'white',
    padding: 5,
    borderRadius: 20,
    width: '100%',
    height: 40,
  },
  buttonLeft: {
    backgroundColor: '#FA821B',
    borderRadius: 10,
    height: 35,
    justifyContent: 'center',
    alignSelf: 'center',
    marginVertical: 10,
    width: '33%'
  },
  buttonRight: {
    backgroundColor: '#FA821B',
    borderRadius: 10,
    width: '50%',
    height: 35,
    justifyContent: 'center',
    alignSelf: "flex-start",
    marginVertical: 10,

  },
  contentContainer: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    height: '100%',
    borderRadius: 10,
    marginBottom: 120
  },
  contentFont: {
    color: '#2E5C6B',
    fontSize: 12,
  },
};
export default DataSyncScreen;
