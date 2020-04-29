import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import moment from 'moment';
// Chart libraries
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { AreaChart, YAxis, XAxis, Path } from 'react-native-svg-charts'
import { ClipPath, Defs, LinearGradient as LiGr, Rect, Stop, Line as L, Circle } from 'react-native-svg'
import * as shape from 'd3-shape'
import UserService from '../../Networking/UserService';

// Datepicker data
var currentDay = moment().format('DD-MM-YY');
var lastWeekDay = moment().format('YYYY-MM-DD');
var firstWeekDay = moment(lastWeekDay).subtract(7, "days").format('YYYY-MM-DD');

const dataWeekCurrent = [0, 3, 5, 0.54, 0.99, 1.5, 1.30, 8.5, 0];

// here we store the real consumption data by category (week, month, year) from the previous period
const dataWeekPrevious = [0, 5, 0.45, 2.8, 0.8, 0.90, 1.2];
// data for xAxis
const indexToClipFrom = 31
const dataYear = [' ', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Sep', 'Oct', 'Nov', 'Dec', ' '];
const dataDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const recommendedDayConsumption = 0.2 // here we store recommended consumption
const weekdaySequence = moment(currentDay).isoWeekday()  //  sequenence of week day (1-7)

// Other
const B = (props) => <Text style={{ fontWeight: 'bold' }}>{props.children}</Text>


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
      //date: firstWeekDay + ' - ' + lastWeekDay,
      firstDate:firstWeekDay,
      lastDate:lastWeekDay,

      lastDayMonth: '28',
      selectedButton: 'button1',

      waterSavings: 40,
      wastewaterSavings: 75,
      totalSavings: 115,

      current: '15 L',
      previous: '20 L',
      regionReduction: 25,

      // recommendedConsumption: recommendedDayConsumption,
      recommendedConsumption: 0.3,
      recommendedMonthConsumption: 0,

      circleSequence: weekdaySequence - 1,

      xAxisData: dataDays,
      dataCurrentPeriod: dataWeekCurrent,
      dataPreviousPeriod: dataWeekPrevious,
      dataMonth: ["1", "2", "3", "4", "5", "6", "7", "8", '9', '10', '11', '12'
        , '13', '14', '15 ', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', "29", "30", "31"],
    };
  }

  componentDidMount(){
    this.onButtonPress(this.state.selectedButton)
  }

  getSelectedConsumption=(startDate,endDate)=>{
    var weekData = []
    UserService.getUsageByDay(startDate,endDate).then(data=>{
      data.forEach(x => {
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
      data.forEach(x => {
        weekData.push(x.averageFlowPerDay.toFixed(2)*1)
      });
      this.setState({dataPreviousPeriod:weekData})
      console.log('previous: '+weekData)
    }).catch(err=>{
      alert(err)
    })
  }

  // Changes data, color of the button when pressed
  onButtonPress = (type) => {
    var currentDay = moment().format('YYYY-MM-DD');
    var currentDayPlus = moment(currentDay).add(1,'day').format('YYYY-MM-DD');

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
        //recommendedConsumption: recommendedDayConsumption,
        circleSequence: weekdaySequence - 1, // day sequence in current week  (for example: Friday = 5)
      })

      this.getSelectedConsumption(weekBeforeToday,currentDayPlus)
      this.getPreviousConsumption(weekBeforeToday,currentDayPlus,'week')
    }
    else if (type === 'button2') {
      var monthBeforeToday=moment(currentDay).subtract(1,'month').format('YYYY-MM-DD')
      var monthBeforeTodayNoFormat=moment(currentDay).subtract(1,'month')    

      const days = []
      while (moment(currentDay).diff(monthBeforeTodayNoFormat, 'days') >= 0) {
        days.push(monthBeforeTodayNoFormat.format('D'))
        monthBeforeTodayNoFormat.add(1, 'days')
      }

      this.setState({
        type:'month',
        xAxisData: days,
        firstDate:monthBeforeToday,
        lastDate:currentDay
        // recommendedConsumption: recommendedMonthConsumption,
        // recommendedMonthConsumption: recommendedMonthConsumption,
         //circleSequence: monthSequence-1,
      })
      this.getSelectedConsumption(monthBeforeToday,currentDayPlus)
      this.getPreviousConsumption(monthBeforeToday,currentDayPlus, 'month')

    } else {

      var yearBeforeToday=moment(currentDay).subtract(1,'year').format('YYYY-MM-DD')
      var yearBeforeTodayNoFormat=moment(currentDay).subtract(1,'year')
      // let recommendedYearConsumption = this.state.recommendedMonthConsumption * 12
      // let yearSequence = parseInt(moment().date(currentMonth).format('M')) // month sequence in current year (for example: February = 2)

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
        // recommendedConsumption: recommendedYearConsumption,
        // circleSequence: yearSequence
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

  render() {
    const { route, navigation } = this.props;
    return (
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>


          {/* HEADER */}
          <View style={styles.header}>
            <LinearGradient colors={['#aacce5', '#c5e9f4']}
              style={{
                width: '100%',
                borderRadius: 10,
                flexDirection: 'row',
                padding: 3
              }}>
              <View style={{ width: '100%', position: "absolute" }}>
                <Image source={require('../../Assets/start/girlphone.png')} style={{ width: '44%', height: 110, alignSelf: 'flex-end', marginTop: 10 }}></Image>
              </View>
              <View>
                <Text style={styles.headerText}>
                  Here you get an overview of your consumption
              </Text>
              </View>
            </LinearGradient>
          </View>
          {/* HEADER */}

          <View style={styles.container}>
            <View style={styles.content}>


              {/* DATE PICKER */}
              <View style={styles.datepickerContainer}>
                <TouchableOpacity onPress={() => this.decrement()}>
                  <Image
                    source={require('../../Assets/consumption/back.png')}
                    style={styles.arrow}
                  />
                </TouchableOpacity>
                <Text style={{ color: "#174A5A" }}>{this.state.firstDate + ' - ' + this.state.lastDate}</Text>
                <TouchableOpacity onPress={() => this.increment()}>
                  <Image
                    source={require('../../Assets/consumption/next.png')}
                    style={{ width: 20, height: 20, tintColor: '#174A5A' }}
                  />
                </TouchableOpacity>
              </View>
              {/* DATE PICKER BUTTONS - refactoring needed */}
              <View style={{ flexDirection: 'row', width: '80%', alignSelf: 'center' }}>
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
                    onPress={() => this.onButtonPress('button1')}>
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
                    onPress={()=>this.onButtonPress('button2')}>
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
                    onPress={() => this.onButtonPress('button3')}>
                    <Text style={{
                      textAlign: 'center',
                      color: this.state.selectedButton === "button3" ? 'white' : '#174A5A'
                    }}>Year</Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View style={{ flexDirection: 'row', width: '92%', alignSelf: 'center', marginTop: 10 }}>
                <View style={{ width: '50%', alignSelf: 'center' }}>
                  <Text style={styles.boldText}>Daily Consumption</Text>
                  <Text style={styles.consumptionText}>470 L</Text>
                </View>
                <View style={{ alignSelf: 'center', width: '50%' }}>
                  <Text style={styles.boldText}>Reduced Consumption</Text>
                  <Text style={styles.consumptionText}>10%</Text>
                </View>
              </View>

              {/* MULTILINE CHART */}
              <View style={{ flexDirection: 'row', height: 200, width: '90%' }}>
                <View style={{ width: '10%' }}>
                  <YAxis
                    style={{ top: 0, bottom: 0, height: 180, marginTop: 30 }}
                    data={this.state.dataCurrentPeriod}
                    contentInset={{ top: 50, bottom: 0}}

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
              {/* LEGEND FOR MULTILINE CHART */}
            </View>
          </View>


          <View style={styles.consumptionContainer}>

            {/* Progress circle (left card) - REFACTORING? */}
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
                    onAnimationComplete={() => console.log('onAnimationComplete')}
                    backgroundColor="white"
                    style={{
                      alignSelf: 'center'
                    }}>
                    {
                      () => (
                        <View>
                          <Text style={{ fontSize: 20, color: '#174A5A' }}>
                            {this.state.current}
                          </Text>
                          <Text style={{ fontSize: 13, color: '#95ACB4' }}>
                            ({this.state.previous})
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
                    onAnimationComplete={() => console.log('onAnimationComplete')}
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
            {/* Progress circle (left card) */}


            {/* Map (right card)     */}
            <View style={styles.consumptionCard}>
              <Image source={require('../../Assets/consumption/map.png')} style={{ width: 135, height: 135, alignSelf: 'center' }} />
              <Text style={{ fontSize: 13, paddingHorizontal: 10, marginTop: 13, color: '#174A5A' }}>
                In total, all players in the Northern Jutland region have reduced water consumption by:
              </Text>
              <Text
                style={{ fontWeight: 'bold', alignSelf: 'center', fontSize: 19, marginTop: 5, color: '#174A5A' }}>
                {this.state.regionReduction} %
              </Text>
            </View>
            {/* Map (right card)     */}
          </View>


          {/* Savings bottom card [pig]*/}
          <View style={styles.bottomConsumptionCard}>
            <View style={{ width: '25%' }}>
              <Image source={require('../../Assets/consumption/pig.png')} style={{ width: 71, height: 67 }} />
            </View>
            <View style={{ width: '75%' }}>
              <Text style={{ fontWeight: 'bold', color: '#174A5A', marginBottom: 5, fontSize: 15 }}>
                You've saved in the last week
              </Text>
              <Text style={{ fontSize: 14, color: '#174A5A' }}>
                <B>{this.state.waterSavings} DKK</B> on water and <B>
                  {this.state.wastewaterSavings} DKK</B> on wastewater. This gives
                a total saving of <B>{this.state.totalSavings} DKK</B>.
              </Text>
            </View>
          </View>
          {/* Savings bottom card [pig]*/}
        </View>
      </ScrollView >
    );
  }
}

const styles = StyleSheet.create({

  // Main components
  container: {
    flex: 1,
    backgroundColor: '#EEF3F7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
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
  },

  // Header
  header: {
    padding: 10,
    width: '98%',
  },
  headerText: {
    borderRadius: 10,
    width: '55%',
    padding: 25,
    fontSize: 16,
    color: '#174A5A'
  },

  // Datepicker
  datepickerContainer: {
    flex: 0.8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 15,
  },
  arrow: {
    width: 20,
    height: 20,
    tintColor: '#174A5A',
  },
  // button: {
  //   backgroundColor: 'rgba(0,0,0,0)',
  //   marginRight: 5,
  //   borderRadius: 50,
  //   borderWidth: 2,
  //   width: '100%',
  //   justifyContent: 'center',
  // },

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
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    padding: 10,
  },
  consumptionCard: {
    flex: 1,
    backgroundColor: 'white',
    marginHorizontal: 5,
    borderRadius: 5,
    minHeight: 250,
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
    borderRadius: 10,
    padding: 10,
    backgroundColor: 'white',
    width: '92%',
    marginBottom: 10,
    shadowOpacity: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default SpendingsScreen;
