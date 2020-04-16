import * as React from 'react';
import { Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { TextInput } from 'react-native-paper';
import CheckBox from 'react-native-check-box';

class DataSyncScreen extends React.Component {
  constructor() {
    super()
    this.state={
      isChecked:false,
    }
  }

  handleClick = () => {
    this.setState({
      isChecked: !this.state.isChecked,
    });
  };

  render() {
    const { navigation } = this.props;
    return (
      <View style={{ padding: 20 }}>
        <View style={{ borderRadius: 10, paddingBottom:10}}>
          <LinearGradient colors={['#a6d8d5', '#71c6c0', '#38b0a4']}
            style={{
              width: '100%',
              borderRadius: 10,
              height: 150
            }} />
          <View style={{ width: '100%', position: "absolute" }}>
            <Image source={require('../../Assets/start/girlphone.png')} style={{ width: '49%', height: 150, alignSelf: 'flex-end' }}></Image>
          </View>
        </View>

        <View style={styles.contentContainer}>
            <Text style={{ fontSize: 15, color: '#2E5C6B', marginTop: 22, marginBottom:22 }}>Enter the following information to connect to your water usage data:</Text>
            <TextInput style={{backgroundColor: 'white',padding: 5,borderRadius: 20,width: '100%',height: 40,}} mode='outlined' label='Address' underlineColor='#184B5B'
              theme={{ colors: { primary: '#2C5A69', background: '#003489' } }} />
            <View style={{ flexDirection: 'row', marginBottom: 15 }}>
              <TextInput style={{backgroundColor: 'white',padding: 5,borderRadius: 20,width: '50%',height: 40}} mode='outlined' label='Post nr.' underlineColor='#184B5B'
                theme={{ colors: { primary: '#2C5A69', background: '#003489' } }} />
              <TextInput style={{backgroundColor: 'white',padding: 5,borderRadius: 20,width: '50%',height: 40}} mode='outlined' label='City' underlineColor='#184B5B'
                theme={{ colors: { primary: '#2C5A69', background: '#003489' } }} />
            </View>
           <View style={{flexDirection: 'row', marginTop:10 }}>
              <CheckBox
                onClick={this.handleClick}
                isChecked={this.state.isChecked}
                checkedCheckBoxColor={'#FA831B'}
                uncheckedCheckBoxColor={'#FA831B'}
                style={{marginRight:10}}/>
                <Text style={styles.termsText}>
                Please note that we do not save your address, but use it to store you location so that we can make a
                regional breakdown of the game will you accept the terms?
                </Text>
            </View>
              <TouchableOpacity style={styles.buttonLeft}
                onPress={() => navigation.navigate('DataCheckScreen')}>
                <Text style={{ alignSelf: 'center', color: 'white' }}>Connect</Text>
              </TouchableOpacity>
        </View>
      </View >
    );
  }
}

const styles = {
  buttonLeft: {
    backgroundColor: '#FA821B',
    borderRadius: 10,
    height: 35,
    justifyContent: 'center',
    alignSelf: 'center',
    marginVertical: 20,
    width: 110
  },
  contentContainer: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    borderRadius: 10,
  },
  termsText: {
    color: '#174A5A',
    fontSize: 12,
    marginRight:20
  },
};
export default DataSyncScreen;
