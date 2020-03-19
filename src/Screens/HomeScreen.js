import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
const {height, width} = Dimensions.get('window');
import jebani from '../Assets/competition.png';
import * as Progress from 'react-native-progress';

const BagdeBox = props => {
  return (
    <View
    style={styles.bagdeBoxContainer}>
    <View style={{flex: 1, marginLeft:10}}>
      <View style={{backgroundColor: 'black', width:50, height: 50, borderRadius: 999999}}></View>
    </View>
    <View style ={{flex:6, flexDirection:'column', paddingTop:10}}>
    <Text
      style={styles.bagdeBoxTitle}>
      {props.title}
    </Text>
    <Text
      style={styles.bagdeBoxDescription}>
      {props.description}
    </Text>
    </View>
  </View>
  );
};

const BagdeBoxProgress = props => {
  return (
    <View
    style={styles.bagdeBoxContainer}>
    <View style={{flex: 1, marginLeft:10}}>
      <View style={{backgroundColor: 'black', width:50, height: 50, borderRadius: 999999}}></View>
    </View>
    <View style ={{flex:6, flexDirection:'column', paddingTop:10}}>
    <Text
      style={styles.bagdeBoxProgressTitle}>
      {props.title}
    </Text>
    <View style={{paddingLeft:10, flexDirection:'row'}}>
    <Progress.Bar progress={props.progress} width={240} height={8} color={'#FA821B'} style={{height:10, alignSelf:'center'}}/>    
    <Text style={{fontSize:13, paddingLeft:4, color: '#174A5A', fontWeight:'500'}}>{props.progress *100}%</Text>
    </View>
    <Text
      style={styles.bagdeBoxDescription}>
      {props.description}
    </Text>
    </View>
  </View>
  );
};

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
          <View style={{height:'100%', backgroundColor:'white', borderRadius: 10, marginTop:10}}> 
          <View style={styles.userBoxContainer}>
            <View style={{flex: 2,marginLeft:10}}>
              <View style={{backgroundColor: 'black', width:90, height: 90, borderRadius: 999999}}></View>
            </View>
            <Text style={styles.userBoxPoints}>
              <Text style={{fontWeight: 'bold', fontSize:16}}>1500</Text> points
            </Text>
            <Text style={styles.userBoxDescr}>
              Here you can see all your badges that you have won as you
              contribute to reducing your water usage. Unlock more badges on an
              ongoing basis.
            </Text>
          </View>
              <BagdeBox title='Expert' description='You have been an active player for 3 months and you have therefore earned the title as an expert.'></BagdeBox>
              <BagdeBoxProgress title='Water Expert' description='You have been reduced you water consumption by 10%.' progress={0.8}></BagdeBoxProgress>
              <BagdeBox title='Water Chuj' description='You have been reduced you water consumption by 10%.'></BagdeBox>
              <BagdeBoxProgress title='Karol Badge' description='siema kurwa' progress={0.2}></BagdeBoxProgress>

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
  bagdeBoxContainer: {
    height: 120,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
    alignItems: 'center',
    flex: 1,
  },
  bagdeBoxTitle: {
    flex:1,
    alignSelf: 'flex-start',
    color: '#174A5A',
    fontSize: 16,
    fontWeight: 'bold',
    paddingLeft:10,
  },
  bagdeBoxProgressTitle: {
    flex:1,
    alignSelf: 'flex-start',
    color: '#174A5A',
    fontSize: 16,
    fontWeight: 'bold',
    paddingLeft:10,
    paddingBottom:10,
  },
  bagdeBoxDescription:{
    flex: 4,
    paddingLeft: 10,
    paddingTop:10,
    alignSelf: 'flex-start',
    color: '#174A5A',
    fontSize: 14,
  },
  userBoxContainer: {
    height: 150,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
    alignItems: 'center',
    flex: 1,
  },
  userBoxPoints: {
    flex:1,
    paddingLeft: 20,
    alignSelf: 'center',
    textAlign: 'center',
    color: '#174A5A',
    fontSize: 12,
  },
  userBoxDescr: {
    flex: 5,
    paddingLeft: 20,
    alignSelf: 'center',
    color: '#174A5A',
    fontSize: 14,
  }

});

export default HomeScreen;
