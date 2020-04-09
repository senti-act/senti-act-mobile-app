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
import AchievementService from '../Networking/AchievementService';
import LinearGradient from 'react-native-linear-gradient';

const BagdeBox = props => {
  return (
    <View style={styles.bagdeBoxContainer}>
      <View style={{flex: 1, marginLeft: 10}}>
        <View
          style={{
            backgroundColor: 'black',
            width: 50,
            height: 50,
            borderRadius: 999999,
          }}
        />
      </View>
      <View style={{flex: 6, flexDirection: 'column', paddingTop: 10}}>
        <Text style={styles.bagdeBoxTitle}>{props.title}</Text>
        <Text style={styles.bagdeBoxDescription}>{props.description}</Text>
      </View>
    </View>
  );
};

const RulesBox = props => {
  return (
    <View style={styles.bagdeBoxContainer}>
      <View style={{flex: 1, marginLeft: 15}}>
        <LinearGradient
          colors={['#C0E9EE', '#80D0D8', '#46BAC6']}
          style={{
            width: 55,
            height: 55,
            borderRadius: 999999,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            style={{
              width: 30,
              height: 30,
            }}
            source={props.source}
          />
        </LinearGradient>
      </View>
      <View style={{flex: 6, flexDirection: 'column', margin: 10}}>
        <Text style={styles.bagdeBoxTitle}>{props.title}</Text>
        <Text style={styles.bagdeBoxDescription}>{props.description}</Text>
      </View>
    </View>
  );
};

const BagdeBoxProgress = props => {
  return (
    <View style={styles.bagdeBoxContainer}>
      <View style={{flex: 1, marginLeft: 10}}>
        <View
          style={{
            backgroundColor: 'black',
            width: 50,
            height: 50,
            borderRadius: 999999,
          }}
        />
      </View>
      <View style={{flex: 6, flexDirection: 'column', paddingTop: 10}}>
        <Text style={styles.bagdeBoxProgressTitle}>{props.title}</Text>
        <View style={{paddingLeft: 10, flexDirection: 'row'}}>
          <Progress.Bar
            progress={props.progress}
            width={240}
            height={8}
            color={'#FA821B'}
            style={{height: 10, alignSelf: 'center'}}
          />
          <Text
            style={{
              fontSize: 13,
              paddingLeft: 4,
              color: '#174A5A',
              fontWeight: '500',
            }}>
            {props.progress * 100}%
          </Text>
        </View>
        <Text style={styles.bagdeBoxDescription}>{props.description}</Text>
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
      userId: '1574ec1a-7443-11ea-9eaf-08606e6ce1c1',
      achievements: [],
    };
  }

  componentDidMount() {
    this.getAchievements();
  }

  getAchievements = () => {
    AchievementService.getForUser(this.state.userId)
      .then(x => {
        this.setState({achievements: x});
      })
      .catch(err => {
        alert(err);
      });
  };

  decide = () => {
    switch (this.state.status) {
      case 'badges': {
        //PUT BREAK HERE LATER !!!! --> karcsi !!
        return (
          <View
            style={{
              height: '100%',
              backgroundColor: 'white',
              borderRadius: 10,
              marginTop: 10,
            }}>
            <View style={styles.userBoxContainer}>
              <View style={{flex: 2, marginLeft: 10}}>
                <View
                  style={{
                    backgroundColor: 'black',
                    width: 90,
                    height: 90,
                    borderRadius: 999999,
                  }}
                />
              </View>
              <Text style={styles.userBoxPoints}>
                <Text style={{fontWeight: 'bold', fontSize: 16}}>1500</Text>{' '}
                points
              </Text>
              <Text style={styles.userBoxDescr}>
                Here you can see all your badges that you have won as you
                contribute to reducing your water usage. Unlock more badges on
                an ongoing basis.
              </Text>
            </View>
            {this.state.achievements.length > 0 ? (
              this.state.achievements.map(x => {
                return <BagdeBox title={x.name} description={x.description} />;
              })
            ) : (
              <Text>Cannot load achievements</Text>
            )}
            {/* <BagdeBox title='Expert' description='You have been an active player for 3 months and you have therefore earned the title as an expert.'></BagdeBox>
              <BagdeBoxProgress title='Water Expert' description='You have been reduced you water consumption by 10%.' progress={0.8}></BagdeBoxProgress>
              <BagdeBox title='Water Chuj' description='You have been reduced you water consumption by 10%.'></BagdeBox>
              <BagdeBoxProgress title='Karol Badge' description='siema kurwa' progress={0.2}></BagdeBoxProgress> */}
          </View>
        );
      }
      case 'leaderboard': {
      }
      case 'rules': {
        return (
          <View
            style={{
              backgroundColor: 'white',
              borderRadius: 15,
              flexDirection: 'column',
              marginTop: 10,
              marginBottom: 10,
            }}>
            <View style={styles.rulesView}>
              <RulesBox
                title="Competitions"
                description="Competitions will last one month, at the end of which all the points will be reset and a new competition will start."
                source={require('../Assets/start/trophy.png')}
              />
            </View>
            <View style={styles.rulesView}>
              <RulesBox
                title="Point calculation"
                description="The points awarded are based on % of improvement compared to last month's average, and bonus points according to your relative consumption."
                source={require('../Assets/start/trophy.png')}
              />
            </View>
            <View style={styles.rulesView}>
              <RulesBox
                title="Levels"
                description="You will gain levels the more you play the game, mainly through acquiring badges, but also logging in daily and sharing the game."
                source={require('../Assets/start/trophy.png')}
              />
            </View>
            <View style={styles.rulesView}>
              <RulesBox
                title="Badges"
                description="Badges are the main way of leveling up, and you will get them for all sorts of achievements, you can check some of them in the badges tab."
                source={require('../Assets/start/trophy.png')}
              />
            </View>
          </View>
        );
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
                flexDirection: 'row',
                borderRadius: 15,
              }}>
              <TouchableOpacity
                onPress={() => {
                  this.changeView('badges');
                }}
                style={styles.tab}>
                <Text style={styles.boldText}>Bagdes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  this.changeView('leaderboard');
                }}
                style={styles.tab}>
                <Text style={styles.boldText}>Leaderboard</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  this.changeView('rules');
                }}
                style={styles.tab}>
                <Text style={styles.boldText}>Game Rules</Text>
              </TouchableOpacity>
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
    flex: 1,
    alignSelf: 'flex-start',
    color: '#174A5A',
    fontSize: 16,
    fontWeight: 'bold',
    paddingLeft: 10,
  },
  bagdeBoxProgressTitle: {
    flex: 1,
    alignSelf: 'flex-start',
    color: '#174A5A',
    fontSize: 16,
    fontWeight: 'bold',
    paddingLeft: 10,
    paddingBottom: 10,
  },
  bagdeBoxDescription: {
    flex: 4,
    paddingLeft: 10,
    paddingTop: 10,
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
    flex: 1,
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
  },
  boldText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#174A5A',
  },
  tab: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rulesView: {
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },
});

export default HomeScreen;
