import * as React from 'react';
import {
  Text,
  View,
  Button,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
const {height, width} = Dimensions.get('window');
import jebani from '../Assets/competition.png';

class HomeScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      value: 0,
      status: 'badges',
      text: 'Reduce your water consumption and earn badges',
    };
  }

  componentDidMount() {}

//   static navigationOptions = ({ navigation }) => {
//     const {state} = navigation;
//     return {
//       title: `chuju`,
//     };
//   };

  decide = () => {
    switch (this.state.status) {
      case 'badges': {
        //PUT BREAK HERE LATER !!!! --> karcsi !!
        return (
          <View
            style={{
              height: 150,
              flexDirection: 'row',
              borderBottomWidth: 1,
              borderBottomColor: 'lightgray',
              alignItems: 'center',
              flex: 1,
              backgroundColor:'white',
              borderRadius: 10,
              marginTop:20
            }}>
            <View style={{flex: 2}}>
              <View
                style={{
                  backgroundColor: 'black',
                  width:90,
                  height: 90,
                  borderRadius: 999999,
                }}></View>
            </View>

            <Text
              style={{
                flex:1,
                paddingLeft: 20,
                alignSelf: 'center',
                textAlign: 'center',
                color: '#174A5A',
                fontSize: 15,
              }}>
              <Text style={{fontWeight: 'bold', fontSize:16}}>1500</Text> points
            </Text>

            <Text
              style={{
                flex: 4,
                paddingLeft: 20,
                alignSelf: 'center',
                color: '#174A5A',
                fontSize: 15,
              }}>
              Here you can see all your badges that you have won as you
              contribute to reducing your water usage. Unlock more badges on an
              ongoing basis.
            </Text>
            {/* <Ionicons size={28} name={'ios-arrow-forward'} color="#174A5A" /> */}
          </View>
        );
      }
      case 'leaderboard': {
      }
      case 'rules': {
      }
    }
  };

  changeView = status => {
    switch (status) {
      case 'badges':
        this.setState({text: 'Reduce your water consumption and earn badges'});
        break;
      case 'leaderboard':
        this.setState({
          text:
            'Points and location in relation to yourself and your fellow players',
        });
        break;
      case 'rules':
        this.setState({
          text:
            'Get help and insight into the rules of the game The Senti.act game',
        });
        break;
      default:
        break;
    }
    // this.props.navigation.setParams({ title: status })
    this.setState({status});
  };

  render() {
    return (
      <>
        <View style={styles.MainContainer}>
          <ScrollView style={{paddingHorizontal: 20}}>
            <View style={{flex: 1, marginTop: 40}}>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  width: '100%',
                  height: 135,
                  backgroundColor: '#33AFA3',
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
                    style={{paddingLeft: 20, fontSize: 18, color: '#174a5a'}}>
                    {this.state.text}
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
                    style={{width: width / 2.6, height: width / 2.5}}
                    source={jebani}
                  />
                </View>
              </View>
            </View>
            <View
              style={{
                flex: 1,
                marginTop: 20,
                height: 50,
                alignSelf: 'center',
                flexDirection: 'row',
              }}>
              <TouchableOpacity
                onPress={() => {
                  this.changeView('badges');
                }}
                style={{flex: 1, backgroundColor: 'red'}}><Text>Bagdes</Text></TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  this.changeView('leaderboard');
                }}
                style={{flex: 1, backgroundColor: 'blue'}}><Text>Leaderboard</Text></TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  this.changeView('rules');
                }}
                style={{flex: 1, backgroundColor: 'green'}}><Text>Game Rules</Text></TouchableOpacity>
            </View>
            <View style={{width: '100%', flex: 1}}>
              {this.decide(this.state.status)}
            </View>
          </ScrollView>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: 'center',
    flex: 1,
  },
});

export default HomeScreen;
