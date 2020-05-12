import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import moment from 'moment';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { AreaChart, YAxis, XAxis, Path } from 'react-native-svg-charts'
import { ClipPath, Defs, LinearGradient as LiGr, Rect, Stop, Line as L } from 'react-native-svg'
import * as shape from 'd3-shape'
import UserService from '../../Networking/UserService';
const { height, width } = Dimensions.get('window');
import AsyncStorage from '@react-native-community/async-storage';

var lastWeekDay = moment().format('YYYY-MM-DD');
var firstWeekDay = moment(lastWeekDay).subtract(7, "days").format('YYYY-MM-DD');

// data for xAxis
const indexToClipFrom = 31
const recommendedDayConsumption = 0.2 // here we store recommended consumption

// Charts components
const Gradient = () => (
  <Defs key={'defs'}>
    <LiGr id={'gradient'} x1={'0%'} y={'0%'} x2={'0%'} y2={'100%'}>
      <Stop offset={'0%'} stopColor={'#5ebdb5'} stopOpacity={2} />
      <Stop offset={'100%'} stopColor={'#a0d9d4'} stopOpacity={0.8} />
    </LiGr>
  </Defs>
)

const Clips = ({ x, width }) => (
  <Defs key={'clips'}>
    <ClipPath id={'clip-path-1'} key={'0'}>
      <Rect x={0} y={'0'} width={x(indexToClipFrom)} height={'100%'} />
    </ClipPath>
    <ClipPath id="clip-path-2" key={'1'}>
      <Rect x={x(indexToClipFrom)} y={'0'} width={width - x(indexToClipFrom)} height={'100%'} />
    </ClipPath>
  </Defs>
)

const Line = ({ line }) => (
  <Path
    key={'line'}
    d={line}
    stroke={'#174A5A'}
    strokeWidth={3}
    fill={'none'}
    clipPath={'url(#clip-path-1)'}
  />
)

const HorizontalLine = (({ y }) => (
  <L
    key={'zero-axis'}
    x1={'0%'}
    x2={'100%'}
    y1={y(recommendedDayConsumption)}
    y2={y(recommendedDayConsumption)}
    stroke={'orange'}
    strokeDasharray={[7, 5]}
    strokeWidth={3}
  />
))

class SpendingsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type:'week',
      firstDate:firstWeekDay,
      lastDate:lastWeekDay,
      selectedButton: 'button1',
      xAxisData: '',
      dataCurrentPeriod: '',
      dataPreviousPeriod: '',
      dailyConsumption:0,
      current: 0,
      previous: 0,
      reduced:0,
      regionReduction: 25,

      recommendedConsumption: 0.3,
      savings:{}
     };
  }

  componentDidMount(){
    this.onButtonPress(this.state.selectedButton)
    this.getDailyConsumption()
    this.getWeeklySavings()
  }

  getDailyConsumption=()=>{
    var currentDaysMinus = moment(currentDay).subtract(2,'day').format('YYYY-MM-DD');
    var currentDay = moment().format('YYYY-MM-DD');
    var currentDayPlus = moment(currentDay).add(1,'day').format('YYYY-MM-DD');

    UserService.getUsageByDay(currentDaysMinus,currentDayPlus).then(data=>{
      var curr= data[0][1].sumOfAvgL
      var prev = data[0][0].sumOfAvgL
      var red = ((prev - curr)/prev*100).toFixed(0)
      this.setState({
        dailyConsumption: curr,
        current:curr, 
        previous:prev,
        reduced:red
      })
    }).catch(err=>{
      alert(err)
    })
  }

  getSelectedConsumption=(startDate,endDate)=>{
    var weekData = []
    UserService.getUsageByDay(startDate,endDate).then(data=>{
      console.log(data)
      data[0].forEach(x => {
        weekData.push(x.averageFlowPerDay.toFixed(2)*1)
      });
      console.log('current: '+weekData, startDate, endDate)
      this.setState({dataCurrentPeriod:weekData})
    }).catch(err=>{
      alert(err)
    })
  }

  getPreviousConsumption=(startDate,endDate,type)=>{
    var start = null;
    var end = null;

    start=moment(startDate).subtract(1,type).format('YYYY-MM-DD')
    end=moment(endDate).subtract(1,type).format('YYYY-MM-DD')
  
    var weekData = []
    UserService.getUsageByDay(start,end).then(data=>{
      data[0].forEach(x => {
        weekData.push(x.averageFlowPerDay.toFixed(2)*1)
      });
      this.setState({dataPreviousPeriod:weekData})
      console.log('previous: '+weekData)
    }).catch(err=>{
      alert(err)
    })
  }

  onButtonPress = (type) => {
    var currentDay = moment().format('YYYY-MM-DD');
    var currentDayPlus = moment(currentDay).add(2,'day').format('YYYY-MM-DD');

    if (type === 'button1') {
      var weekBeforeToday=moment(currentDay).subtract(1,'week').format('YYYY-MM-DD')
      var todayNumber = moment(currentDay).weekday()
      var dataDays = []
      for(var i=0; i<=7; i++){
        dataDays.push(moment.weekdaysShort(todayNumber + i))
      }
      this.setState({
        type:'week',
        firstDate:weekBeforeToday,
        lastDate:currentDay,
        xAxisData: dataDays,
      })
      this.getSelectedConsumption(weekBeforeToday,currentDayPlus)
      this.getPreviousConsumption(weekBeforeToday,currentDayPlus,'week')
    }
    else if (type === 'button2') {
      var monthBeforeToday=moment(currentDay).subtract(1,'month').format('YYYY-MM-DD')
      var monthBeforeTodayNoFormat=moment(currentDay).subtract(1,'month')    
      const days = []

      while (moment(currentDay).diff(monthBeforeTodayNoFormat, 'days') >= 0) {
        if(currentDay % 2 == 0){
          if(monthBeforeTodayNoFormat.format('D') % 2 == 0){
            var prev= moment(monthBeforeTodayNoFormat).subtract(1,'day').format('D')
            if(prev%2==0){
              days.push(' ')
            }
            days.push(monthBeforeTodayNoFormat.format('D'))
          } else {
            days.push(' ')
          }
        } 
        if(currentDay % 2 !== 0){
          if(monthBeforeTodayNoFormat.format('D') % 2 !== 0){
            var prev= moment(monthBeforeTodayNoFormat).subtract(1,'day').format('D')
            if(prev%2!==0){
              days.push(' ')
            }
            days.push(monthBeforeTodayNoFormat.format('D'))
          }else {
            days.push(' ')
          }
        } 
        monthBeforeTodayNoFormat.add(1, 'days')
      }
      this.setState({
        type:'month',
        xAxisData: days,
        firstDate:monthBeforeToday,
        lastDate:currentDay,
      })
      this.getSelectedConsumption(monthBeforeToday,currentDayPlus)
      this.getPreviousConsumption(monthBeforeToday,currentDayPlus, 'month')

    } else {
      var yearBeforeToday=moment(currentDay).subtract(1,'year').format('YYYY-MM-DD')
      var yearBeforeTodayNoFormat=moment(currentDay).subtract(1,'year')
      const months = []
      while (moment(currentDay).diff(yearBeforeTodayNoFormat, 'months') >= 0) {
        months.push(yearBeforeTodayNoFormat.format('MMM'))
        yearBeforeTodayNoFormat.add(1, 'months')
      }
      this.setState({
        type:'year',
        xAxisData: months,
        firstDate:yearBeforeToday,
        lastDate:currentDay
      })
      this.getSelectedConsumption(yearBeforeToday,currentDayPlus)
      this.getPreviousConsumption(yearBeforeToday,currentDayPlus, 'year')
    }
    this.setState({ selectedButton: type})
  }

  // Increment function for the datepicker
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
  
  getWeeklySavings=async()=>{
    var user = await AsyncStorage.getItem('user');
    user = JSON.parse(user)
    var orgId = user.org.uuid

    UserService.getWeeklySavings(orgId).then(x=>{
      this.setState({savings:x})
    }).catch(err=>{
      this.console.log(err)
    })
  }

  render() {
    const { route, navigation } = this.props;
    return (
      <ScrollView style={styles.scroll} contentContainerStyle={{alignItems: 'center',justifyContent: 'center'}}>
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

        <View style={styles.content}>

          <View style={styles.datepickerContainer}>
            <TouchableOpacity onPress={() => this.decrement()}>
              <Image
                source={require('../../Assets/consumption/back.png')}
                style={styles.arrow}
              />
            </TouchableOpacity>
            <Text style={{ color: "#174A5A", fontSize: 13}}>{this.state.firstDate + ' - ' + this.state.lastDate}</Text>
            <TouchableOpacity onPress={() => this.increment()}>
              <Image
                source={require('../../Assets/consumption/next.png')}
                style={{ width: 20, height: 20, tintColor: '#174A5A' }}
              />
            </TouchableOpacity>
          </View>

          <View style={{ flexDirection: 'row', width: '100%', alignSelf: 'center',paddingHorizontal:10}}>
            <View style={{ padding: 10, width: '33%', paddingHorizontal: 2 }}>
              <TouchableOpacity style={{
                backgroundColor: this.state.selectedButton === "button1" ? 'orange' : 'white',
                borderColor: this.state.selectedButton === "button1" ? 'orange' : '#174A5A',
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
                borderRadius: 50,
                borderWidth: 2,
                width: '100%',
                justifyContent: 'center',
                padding: 4
              }}
                onPress={()=>this.onButtonPress('button2')}>
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

              <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 10 }}>
                <View style={{ width: '50%', alignSelf: 'center' }}>
                  <Text style={styles.boldText}>Daily Consumption</Text>
                  <Text style={styles.consumptionText}>{this.state.dailyConsumption} L</Text>
                </View>
                <View style={{ alignSelf: 'center', width: '50%' }}>
                  <Text style={styles.boldText}>Reduced Consumption</Text>
                  <Text style={styles.consumptionText}>{this.state.reduced + '%'}</Text>
                </View>
              </View>

              {/* MULTILINE CHART */}
              <View style={{ flexDirection: 'row', height: 200, width: '90%' }}>
                <View style={{ width: '10%' }}>
                  <YAxis
                    style={{ top: 0, bottom: 0, height: 180, marginTop: 30 }}
                    data={this.state.dataCurrentPeriod}
                    contentInset={{ top: 36, bottom: 0}}
                    numberOfTicks={5}
                    svg={{
                      fontSize: 13,
                      fill: '#174A5A',
                      strokeWidth: 0.3,
                      alignmentBaseline: 'baseline',
                      baselineShift: '25',
                    }}
                  />
                </View>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                  <View style={{
                    width: this.state.selectedButton === "button2" ? 500 : 350,
                    alignSelf: 'flex-end',
                  }}>
                    <AreaChart
                      style={{ flex: 1 }}
                      data={this.state.dataPreviousPeriod}
                      contentInset={{ top: 50, bottom: 20 }}
                      svg={{
                        fill: 'url(#gradient)',
                        clipPath: 'url(#clip-path-1)',
                      }}
                      numberOfTicks={5}
                      curve={shape.curveNatural}
                      extras={[Gradient, Clips]}
                      animate={true}
                      animationDuration={500}
                      showGrid={false}
                    />
                    <AreaChart
                      style={{
                        position: 'absolute',
                        left: 0,
                        top: 0,
                        flexDirection: 'row',
                        bottom: 19,
                        width: '100%',
                      }}
                      data={this.state.dataCurrentPeriod}
                      contentInset={{ top: 50, bottom: 20 }}
                      curve={shape.curveNatural}
                      numberOfTicks={5}
                      extras={[Line]}
                      animate={true}
                      animationDuration={500}
                      renderDecorator={({ x, y, index, value }) => (
                          <L
                            key={'zero-axis'}
                            x1={'0%'}
                            x2={'100%'}
                            y1={y(this.state.recommendedConsumption)}
                            y2={y(this.state.recommendedConsumption)}
                            stroke={'orange'}
                            strokeDasharray={[7, 5]}
                            strokeWidth={3}
                          />
                      )}>
                      <HorizontalLine></HorizontalLine>
                    </AreaChart>

                    <View style={{ marginTop: 10, height: 20, width: '100%',  }}>
                      <XAxis
                        data={this.state.xAxisData}
                        xAccessor={({ index }) => index}
                        contentInset={{ left: 12, right: 12, bottom:50}}
                        formatLabel={index => this.state.xAxisData[index]}
                        svg={{
                          fontSize: 12, fill: '#174A5A'
                        }}
                      />
                    </View>
                  </View>
                </ScrollView>
              </View>
              <ScrollView horizontal={true}>
              </ScrollView>

              {/* LEGEND FOR MULTILINE CHART */}
              <View style={{ flexDirection: 'row', width: '75%', justifyContent: 'center', alignSelf: 'center', marginVertical: 15, alignSelf: 'center' }}>
                <View style={{ flexDirection: 'row', width: '33%' }}>
                  <Image source={require('../../Assets/consumption/currentperiodlegend.png')}></Image>
                  <Text style={styles.smallText}>Current</Text>
                </View>
                <View style={{ flexDirection: 'row', width: '33%' }}>
                  <Image source={require('../../Assets/consumption/previousperiodlegend.png')}></Image>
                  <Text style={styles.smallText}>Previous</Text>
                </View>
                <View style={{ flexDirection: 'row', width: '33%' }}>
                  <Image style={{ alignSelf: 'center', marginLeft: 5 }} source={require('../../Assets/consumption/recommendedlegend.png')}></Image>
                  <Text style={styles.smallText}>Recommended</Text>
                </View>
              </View>
            </View>

          <View style={styles.consumptionContainer}>

            {/* Progress circle */}
            <TouchableOpacity
              style={styles.consumptionCard}
              onPress={() => navigation.navigate('ConsumptionScreen')}>
              <View style={{}}>
                <View style={{ marginVertical: 10 }}>
                  <AnimatedCircularProgress
                    size={130}
                    width={10}
                    fill={75}
                    tintColor="#174A5A"
                    backgroundColor="white"
                    style={{
                      alignSelf: 'center'
                    }}>
                    {
                      () => (
                        <View>
                          <Text style={{ fontSize: 20, color: '#174A5A' }}>
                            {this.state.current + ' L'} 
                          </Text>
                          <Text style={{ fontSize: 13, color: '#95ACB4' }}>
                            {this.state.previous+ ' L'}
                        </Text>
                        </View>
                      )
                    }
                  </AnimatedCircularProgress>
                  <AnimatedCircularProgress
                    size={95}
                    width={10}
                    fill={89}
                    tintColor="#AFDFDB"
                    backgroundColor="white"
                    style={{
                      alignSelf: 'center',
                      position: 'absolute',
                      marginTop: 17,
                    }}>
                  </AnimatedCircularProgress>
                </View>
                <Text style={styles.boldText}>
                  My consumption status?
                </Text>
                <Text style={{ fontSize: 13, paddingHorizontal: 10, color: '#174A5A' }}>
                  To this date, you should us less water than the last week
                </Text>
              </View>
            </TouchableOpacity>

            {/* Map (right card)     */}
            <View style={[styles.consumptionCard, {marginLeft:10}]}>
              <Image source={require('../../Assets/consumption/map.png')} style={{ width: 135, height: 135, alignSelf: 'center' }} />
              <Text style={{ fontSize: 13, paddingHorizontal: 10, marginTop: 13, color: '#174A5A' }}>
                In total, all players in the Northern Jutland region have reduced water consumption by:
              </Text>
              <Text
                style={{ fontWeight: 'bold', alignSelf: 'center', fontSize: 19, marginTop: 5, color: '#174A5A' }}>
                {this.state.regionReduction} %
              </Text>
            </View>
          </View>

          {/* Savings bottom card [pig]*/}
          <View style={styles.bottomConsumptionCard}>
            <View style={{ width: '25%' }}>
              <Image source={require('../../Assets/consumption/pig.png')} style={{alignSelf:'center'}} />
            </View>
            <View style={{ width: '75%', paddingHorizontal:5 }}>
              <Text style={{ fontWeight: 'bold', color: '#174A5A', marginBottom: 5, fontSize: 15, marginTop:5 }}>
                You've saved in the last week
              </Text>
              <Text style={{ fontSize: 14, color: '#174A5A', }}>
                <Text style={{fontWeight:'bold'}}>{this.state.savings.waterSaved} DKK</Text> on water and <Text style={{fontWeight:'bold'}}>
                  {this.state.savings.sewageSaved} DKK</Text> on wastewater. This gives
                a total saving of <Text style={{fontWeight:'bold'}}>{this.state.savings.total} DKK</Text>.
              </Text>
            </View>
          </View>
      </ScrollView >
    );
  }
}

const styles = StyleSheet.create({
  // Main components
  container: {
    backgroundColor: '#EEF3F7',
    alignItems: 'center',
    justifyContent: 'center'
  },
  scroll: {
    flex: 1,
    backgroundColor: '#EEF3F7',
    width:'100%',
    paddingHorizontal:20
  },
  content: {
    width:'100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 5,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  // Datepicker
  datepickerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    width:'100%',
    alignItems:'center',
    marginBottom: 10,
    paddingHorizontal:10
  },
  arrow: {
    width: 20,
    height: 20,
    tintColor: '#174A5A',
  },
  // Text
  boldText: {
    color: '#174A5A',
    fontSize: 13,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  smallText: {
    color: '#174A5A',
    fontSize: 11,
    alignSelf: 'center',
    marginLeft: 5,
  },
  consumptionText: {
    color: '#174A5A',
    fontWeight: 'bold',
    alignSelf: 'center',
    fontSize: 18,
  },

  // Section under multiline chart
  consumptionContainer: {
    flexDirection: 'row',
    paddingVertical: 10,
  },
  consumptionCard: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  bottomConsumptionCard: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    borderRadius: 5,
    backgroundColor: 'white',
    marginBottom: 10,
    flexDirection: 'row',
  },
});

export default SpendingsScreen;
