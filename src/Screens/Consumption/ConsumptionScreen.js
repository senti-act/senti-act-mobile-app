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
import UserService from '../../Networking/UserService';
const { height, width } = Dimensions.get('window');

var lastWeekDay = moment().format('YYYY-MM-DD');
var firstWeekDay = moment(lastWeekDay).subtract(7, "days").format('YYYY-MM-DD');

class ConsumptionScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentConsumption: 0,
      previousConsumpion: 0,
      selectedButton: 'button1',
      type:'week',
      firstDate:firstWeekDay,
      lastDate:lastWeekDay
    }
  }

  componentDidMount(){
    this.onButtonPress('button1')
  }

  calculatePercentage=(c)=>{
    var max = 0
    var res = 0

    if(this.state.type==='week'){
      max=4000
    } else if (this.state.type ==='month'){
      max=16000
    } else {
      max = 192000
    }
    var res = c/max*100
    return res
  }

  getSelectedConsumption=(startDate,endDate)=>{
    UserService.getUsageByDay(startDate,endDate).then(data=>{
      this.setState({currentConsumption:data[1][0].sumOfAvgL})
    }).catch(err=>{
      alert(err)
    })
  }

  getPreviousConsumption=(startDate,endDate,type)=>{
    var start = null;
    var end = null;

    start=moment(startDate).subtract(1,type).format('YYYY-MM-DD')
    end=moment(endDate).subtract(1,type).format('YYYY-MM-DD')
  
    UserService.getUsageByDay(start,end).then(data=>{
      this.setState({previousConsumpion:data[1][0].sumOfAvgL})
    }).catch(err=>{
      alert(err)
    })
  }

  onButtonPress = (type) => {
    var currentDay = moment().format('YYYY-MM-DD');
    var currentDayPlus = moment(currentDay).add(1,'day').format('YYYY-MM-DD');

    if (type === 'button1') {
      var weekBeforeToday=moment(currentDay).subtract(1,'week').format('YYYY-MM-DD')     
      this.setState({
        type:'week',
        firstDate:weekBeforeToday,
        lastDate:currentDay,
      })
      this.getSelectedConsumption(weekBeforeToday,currentDayPlus)
      this.getPreviousConsumption(weekBeforeToday,currentDayPlus,'week')
    }
    else if (type === 'button2') {
      var monthBeforeToday=moment(currentDay).subtract(1,'month').format('YYYY-MM-DD')
     
      this.setState({
        type:'month',
        firstDate:monthBeforeToday,
        lastDate:currentDay,
      })
      this.getSelectedConsumption(monthBeforeToday,currentDayPlus)
      this.getPreviousConsumption(monthBeforeToday,currentDayPlus, 'month')

    } else {
      var yearBeforeToday=moment(currentDay).subtract(1,'year').format('YYYY-MM-DD')
      this.setState({
        type:'year',
        firstDate:yearBeforeToday,
        lastDate:currentDay
      })
      this.getSelectedConsumption(yearBeforeToday,currentDayPlus)
      this.getPreviousConsumption(yearBeforeToday,currentDayPlus, 'year')
    }
    this.setState({ selectedButton: type})
  }


  increment = () => {
    var firstDate = moment(this.state.firstDate).add(this.state.type, 1).format("YYYY-MM-DD");
    var lastDate = moment(this.state.lastDate).add(this.state.type, 1).format("YYYY-MM-DD");
    this.setState({ firstDate: firstDate, lastDate:lastDate })
    this.getSelectedConsumption(firstDate, lastDate)
    this.getPreviousConsumption(firstDate, lastDate, this.state.type)
  }

  // Decrement function for the datepicker
  decrement = () => {
    var firstDate = moment(this.state.firstDate).subtract(this.state.type, 1).format("YYYY-MM-DD");
    var lastDate = moment(this.state.lastDate).subtract(this.state.type, 1).format("YYYY-MM-DD");
    this.setState({ firstDate: firstDate, lastDate:lastDate })
    this.getSelectedConsumption(firstDate, lastDate)
    this.getPreviousConsumption(firstDate, lastDate, this.state.type)
  }

  render() {
    const { navigation } = this.props;
    return (
      <ScrollView style={styles.container} contentContainerStyle={{alignItems: 'center',justifyContent: 'center'}}>
        <View style={{ flex: 1, marginTop: 40, marginBottom:10 }}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              width: '100%',
              height: 135,
              backgroundColor: '#aacce5',
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
                style={{ paddingLeft: 20, fontSize: 18, color: '#174a5a' }}>
                Here you get an overview of your consumption
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
                style={{ width: width / 2, height: width / 2.6, }}
                source={require('../../Assets/start/girlphone.png')}
              />
            </View>
          </View>
        </View>
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
                <Text style={{ color: "#174A5A", fontSize: 13 }}>{this.state.firstDate + ' - ' + this.state.lastDate}</Text>
                <TouchableOpacity onPress={() => this.increment()}>
                  <Image
                    source={require('../../Assets/consumption/next.png')}
                    style={styles.datePickerButton}
                  />
                </TouchableOpacity>
              </View>
              <View style={{ flexDirection: 'row', width: '100%', alignSelf: 'center' }}>
                <View style={{ padding: 10, width: '33%', paddingHorizontal: 2 }}>
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
                    onPress={() => this.onButtonPress('button1')}>
                    <Text style={{
                      textAlign: 'center',
                      color: this.state.selectedButton === "button1" ? 'white' : '#174A5A'
                    }}>
                      Week</Text>
                  </TouchableOpacity>
                </View>
                <View style={{ padding: 10, width: '33%', paddingHorizontal: 2 }}>
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
                    onPress={() => this.onButtonPress('button2')}>
                    <Text style={{
                      textAlign: 'center',
                      color: this.state.selectedButton === "button2" ? 'white' : '#174A5A'
                    }}>Month</Text>
                  </TouchableOpacity>
                </View>
                <View style={{ padding: 10, width: '33%', paddingHorizontal: 2 }}>
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
                    onPress={() => this.onButtonPress('button3')}>
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
                  fill={this.calculatePercentage(this.state.currentConsumption)}
                  tintColor="#174A5A"
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
                  fill={this.calculatePercentage(this.state.previousConsumpion)}
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
      </ScrollView >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#EEF3F7',
  },
  header: {
    width: '100%',
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
    alignSelf: 'center',
    marginVertical: 15
  }
});

export default ConsumptionScreen;
