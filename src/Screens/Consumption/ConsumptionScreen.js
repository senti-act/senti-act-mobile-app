import * as React from 'react';
import { ProgressChart } from 'react-native-chart-kit';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
  TouchableHighlight,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import moment from 'moment';

var currentWeek = moment().format('W');
var currentMonth = moment().format('MMMM');
var currentYear = parseInt(moment().format('YYYY'));
var firstWeekDay = moment().day("Monday").year(currentYear).week(currentWeek).format('Do MMMM YYYY');
var lastWeekDay = moment().day("Sunday").year(currentYear).week(currentWeek).add(7, "days").format('Do MMMM YYYY');

class ConsumptionScreen extends React.Component {
  componentDidMount() { }

  constructor(props) {
    super(props);
    this.state = {
      currentConsumption: 15,
      previousConsumpion: 20,
      date: firstWeekDay + ' - ' + lastWeekDay,
      selectedButton: 'button1'
    }
  }

  clickHandler = (g) => {
    this.setState({ date: g });
  };

  buttonColorChange = (g, m) => {
    this.setState({ selectedButton: m, date: g })
  }

  increment = () => {
    if (!isNaN(this.state.date)) {
      this.setState({ date: this.state.date + 1 })
    }
    else if (this.state.date.length < 10) {
      var mAdd = moment().month(this.state.date).add(1, 'month').format("MMMM")
      this.setState({ date: mAdd })
    }
    else if (this.state.date.length > 10) {
      var first = moment(this.state.date, 'Do MMMM YYYY ').add('days', 7).format("Do MMMM YYYY  ");
      var last = moment(this.state.date, '- Do MMMM YYYY').add('days', 7).format("- Do MMMM YYYY ");
      this.setState({ date: first + last })
    }
  }

  decrement = () => {
    if (!isNaN(this.state.date)) {
      this.setState({ date: this.state.date - 1 })
    }
    else if (this.state.date.length < 10) {
      var mSub = moment().month(this.state.date).subtract(1, 'month').format("MMMM")
      this.setState({ date: mSub })
    }
    else if (this.state.date.length > 10) {
      var firstDate = moment(this.state.date, 'Do MMMM YYYY ').subtract('days', 7).format("Do MMMM YYYY ");
      var lastDate = moment(this.state.date, '- Do MMMM YYYY').subtract('days', 7).format("- Do MMMM YYYY");
      this.setState({ date: firstDate + lastDate })
    }
  }


  render() {
    const { navigation } = this.props;
    return (
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <View style={styles.header}>
            <LinearGradient colors={['#aacce5', '#c5e9f4']}
              style={{
                width: '100%',
                borderRadius: 10,
                flexDirection: 'row',
                padding: 3
              }}>
              <View style={{ width: '100%', position: "absolute" }}>
                <Image source={require('../../Assets/start/girlphone.png')} style={{ width: '40%', height: 100, alignSelf: 'flex-end' }}></Image>
              </View>
              <View style={{ width: '70%' }}>
                <Text style={styles.headerText}>
                  Get an overview of your consumption status
              </Text>
              </View>
            </LinearGradient>
          </View>
          <View style={styles.container}>
            <View
              style={{
                backgroundColor: 'white',
                borderRadius: 10,
                padding: 10,
                marginBottom: 5,
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 1,
                },
                shadowOpacity: 0.2,
                shadowRadius: 1.41,
                elevation: 2,
              }}>
              <View
                style={{
                  flex: 0.8,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginBottom: 10,
                  marginVertical: 15,
                }}>
                <TouchableOpacity onPress={() => this.decrement()}>
                  <Image
                    source={require('../../Assets/consumption/back.png')}
                    style={styles.datePickerButton}
                  />
                </TouchableOpacity>
                <Text style={{ color: "#174A5A", fontSize: 13 }}>{this.state.date}</Text>
                <TouchableOpacity onPress={() => this.increment()}>
                  <Image
                    source={require('../../Assets/consumption/next.png')}
                    style={styles.datePickerButton}
                  />
                </TouchableOpacity>
              </View>
              <View style={{ flexDirection: 'row', width: '100%', alignSelf: 'center' }}>
                <View style={{ padding: 10, width: '38%', paddingHorizontal: 2 }}>
                  <TouchableOpacity style={{
                    backgroundColor: this.state.selectedButton === "button1" ? 'orange' : 'white',
                    borderColor: this.state.selectedButton === "button1" ? 'orange' : '#174A5A',
                    marginRight: 5,
                    borderRadius: 50,
                    borderWidth: 2,
                    width: '100%',
                    justifyContent: 'center',
                    padding: 4
                  }}
                    onPress={() => this.buttonColorChange(firstWeekDay + ' - ' + lastWeekDay, 'button1')}>
                    <Text style={{
                      textAlign: 'center',
                      color: this.state.selectedButton === "button1" ? 'white' : '#174A5A'
                    }}>
                      Week</Text>
                  </TouchableOpacity>
                </View>
                <View style={{ padding: 10, width: '38%', paddingHorizontal: 2 }}>
                  <TouchableOpacity style={{
                    backgroundColor: this.state.selectedButton === "button2" ? 'orange' : 'white',
                    borderColor: this.state.selectedButton === "button2" ? 'orange' : '#174A5A',
                    marginRight: 5,
                    borderRadius: 50,
                    borderWidth: 2,
                    width: '100%',
                    justifyContent: 'center',
                    padding: 4
                  }}
                    onPress={() => this.buttonColorChange(currentMonth, 'button2')}>
                    <Text style={{
                      textAlign: 'center',
                      color: this.state.selectedButton === "button2" ? 'white' : '#174A5A'
                    }}>Month</Text>
                  </TouchableOpacity>
                </View>
                <View style={{ padding: 10, width: '38%', paddingHorizontal: 2 }}>
                  <TouchableOpacity style={{
                    backgroundColor: this.state.selectedButton === "button3" ? 'orange' : 'white',
                    borderColor: this.state.selectedButton === "button3" ? 'orange' : '#174A5A',
                    marginRight: 5,
                    borderRadius: 50,
                    borderWidth: 2,
                    width: '100%',
                    justifyContent: 'center',
                    padding: 4
                  }}
                    onPress={() => this.buttonColorChange(currentYear, 'button3')}>
                    <Text style={{
                      textAlign: 'center',
                      color: this.state.selectedButton === "button3" ? 'white' : '#174A5A'
                    }}>Year</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={{ marginVertical: 25 }}>
                <AnimatedCircularProgress
                  size={180}
                  width={10}
                  fill={75}
                  tintColor="#174A5A"
                  onAnimationComplete={() => console.log('onAnimationComplete')}
                  backgroundColor="white"
                  style={{
                    alignSelf: 'center'
                  }}>
                  {
                    () => (
                      <View>
                        <Text style={{ fontSize: 25, color: '#174A5A' }}>
                          {this.state.currentConsumption} L
                        </Text>
                        <Text style={{ fontSize: 18, color: '#95ACB4' }}>
                          ({this.state.previousConsumpion} L)
                        </Text>
                      </View>
                    )
                  }
                </AnimatedCircularProgress>
                <AnimatedCircularProgress
                  size={145}
                  width={10}
                  fill={89}
                  tintColor="#AFDFDB"
                  onAnimationComplete={() => console.log('onAnimationComplete')}
                  backgroundColor="white"
                  style={{
                    alignSelf: 'center',
                    position: 'absolute',
                    marginTop: 17
                  }}>
                </AnimatedCircularProgress>
                <View style={{ flexDirection: 'row', marginTop: 15 }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      flex: 1,
                      alignSelf: 'center',
                      justifyContent: 'center',
                    }}>
                    <TouchableHighlight
                      style={styles.circleMyConsumption}
                      underlayColor="#ccc">
                      <Text></Text>
                    </TouchableHighlight>
                    <Text style={styles.smallText}>Current period</Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      margin: 5,
                      flex: 1,
                      alignSelf: 'center',
                      justifyContent: 'center',
                    }}>
                    <TouchableHighlight
                      style={styles.circleAvgConsumption}
                      underlayColor="#ccc">
                      <Text></Text>
                    </TouchableHighlight>
                    <Text style={styles.smallText}>Previous period</Text>
                  </View>
                </View>
              </View>
              <View>
                <Text style={styles.boldText}>My consumption status</Text>
              </View>
              <View style={{ width: '78%', alignSelf: 'center' }}>
                <Text style={{ textAlign: 'center', color: '#174A5A', marginVertical: 10 }}>
                  To this date. you have used less water
                  than last week.
                </Text>
              </View>
              <View style={styles.buttonBottomRow}>
                <View style={{ width: '33%', marginHorizontal: 10 }}>
                  <TouchableOpacity style={styles.buttonStyle}
                    onPress={() => navigation.goBack()}>
                    <Text style={{ textAlign: 'center', color: '#174A5A' }}>Previous period</Text>
                  </TouchableOpacity>
                </View>
                <View style={{ width: '50%', marginHorizontal: 10 }}>
                  <TouchableOpacity style={styles.buttonStyle}
                    onPress={() => navigation.goBack()}>
                    <Text style={{ textAlign: 'center', color: '#174A5A' }}>Average of all players</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
  header: {
    width: '103%',
    marginVertical: 10,
  },
  headerText: {
    padding: 25,
    fontSize: 16,
    color: '#174A5A'
  },
  buttonStyle: {
    width: '100%',
    borderColor: '#174A5A',
    borderRadius: 15,
    borderWidth: 2,
    padding: 4
  },
  smallText: {
    fontSize: 13,
    color: '#174A5A',
    alignSelf: 'center',
    fontWeight: 'bold',
    marginLeft: 5,
  },
  boldText: {
    fontSize: 16,
    color: '#174A5A',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  circleMyConsumption: {
    borderRadius:
      Math.round(
        Dimensions.get('window').width + Dimensions.get('window').height,
      ) / 2,
    width: Dimensions.get('window').width * 0.04,
    height: Dimensions.get('window').width * 0.04,
    backgroundColor: '#2D5F6D',
    marginVertical: 5,
  },
  circleAvgConsumption: {
    borderRadius:
      Math.round(
        Dimensions.get('window').width + Dimensions.get('window').height,
      ) / 2,
    width: Dimensions.get('window').width * 0.04,
    height: Dimensions.get('window').width * 0.04,
    backgroundColor: '#AFDFDB',
    alignItems: 'center',
    marginVertical: 5,
  },
  datePickerButton: {
    width: 20,
    height: 20,
    tintColor: '#174A5A'
  },
  buttonBottomRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignSelf: 'center',
    width: '120%',
    marginVertical: 15
  }
});

export default ConsumptionScreen;
