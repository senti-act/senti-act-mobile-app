import * as React from 'react';
import {
  Text,
  View,
  ScrollView,
  Image,
  SafeAreaView,
  SectionList,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Switches from 'react-native-switches';

const List = [
  {
    title: 'Let Senti.act notify you of your water consumption',
    data: ['Push notifications', 'Weekly report', 'Competition results'],
  },
];
function Item({title}) {
  return (
    <View style={styles.box}>
      <Text style={styles.text}>{title}</Text>
      <Switches
        onChange={() => null}
        colorSwitchOff={'#677180'}
        colorSwitchOn={'#db750f'}
        shape={'pill'}
        showText={false}
        buttonSize={29}
        sliderWidth={60}
        buttonOffsetRight={4}
      />
    </View>
  );
}
class Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pushNotif: false,
      weeklyNotif: false,
      competitionNotif: false,
    };
  }

  componentDidMount() {}

  render() {
    return (
      <SafeAreaView style={{height: '100%', width: '100%'}}>
        <ScrollView
          style={{flex: 1}}
          contentContainerStyle={{
            alignItems: 'center',
            flexDirection: 'column',
          }}>
          <View style={{padding: 20}}>
            <LinearGradient
              colors={['#a6d8d5', '#71c6c0', '#38b0a4']}
              style={{
                width: '100%',
                height: 110,
                borderRadius: 10,
                flexDirection: 'row',
              }}>
              <View style={{flex: 1, height: '117%'}}>
                <Image
                  style={{resizeMode: 'contain', width: '160%', height: '100%'}}
                  source={require('../../Assets/notifications.png')}></Image>
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
            <SectionList
              sections={List}
              renderItem={({item}) => <Item title={item} />}
              renderSectionHeader={({section: {title}}) => (
                <Text style={styles.boldText}>{title}</Text>
              )}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = {
  box: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
    paddingRight: 20,
  },
  text: {
    fontSize: 15,
    fontWeight: 'normal',
    paddingLeft: 30,
    color: '#174A5A',
  },
  boldText: {
    fontSize: 14,
    fontWeight: '700',
    paddingLeft: 30,
    color: '#174A5A',
    paddingTop: 10,
    paddingBottom: 10,
  },
};

export default Notifications;
