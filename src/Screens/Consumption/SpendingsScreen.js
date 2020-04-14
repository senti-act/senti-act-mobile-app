import * as React from 'react';
import { LineChart } from 'react-native-chart-kit';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
  TouchableHighlight,
  Button,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import moment from 'moment';

var currentWeek = moment().format('W');
var currentMonth = moment().format('MMMM');

var currentYear = parseInt(moment().format('YYYY'));
const firstWeekDay = moment().day("Monday").year(currentYear).week(currentWeek).format('DD.M.YYYY');
const lastWeekDay = moment().day("Friday").year(currentYear).week(currentWeek).format('DD.M.YYYY');


const data1 = [5, 45, 28, 80, 99, 12, 44];
const data2 = [20, 60, 45, 60, 40, 5];
const data3 = [50, 50, 50, 50, 50, 50, 50];
const linedata = {
  labels: ['Jan', 'Mar', 'May', 'July', 'Aug', 'Oct', 'Dec'],
  datasets: [
    {
      data: data1,
      color: (opacity = 1) => '#174A5A',
    },
    {
      data: data2,
      color: (opacity = 1) => '#9FD9D4',
    },
    {
      data: data3,
      color: (opacity = 1) => '#F88621',
    },
  ],
};


class SpendingsScreen extends React.Component {
  componentDidMount() {


  }
  constructor(props) {
    super();
    this.state = {
      date: firstWeekDay + ' - ' + lastWeekDay,


    };
  }

  clickHandler = (g) => {
    this.setState({ date: g });
  };


  increment = () => {
    if (!isNaN(this.state.date)) {
      this.setState({ date: this.state.date + 1 })
    }
    // else if (this.state.date)) {
    //   // this.setState({ date: moment(this.state.date).add(1, 'month').format('MMMM') })
    //   alert('fuck off')
    // }

    //   // alert('hey')
    // }
    // else if () {

    // }
  }


  decrement = () => {
    if (!isNaN(this.state.date)) {
      this.setState({ date: this.state.date - 1 })
    }
    // else {
    //   if(this.state.date ===)
    // }
    // else if () {

    // }
  }

  wtf = () => {
    moment(currentMonth).add(1, 'M')
  }


  render() {
    const { route, navigation } = this.props;
    return (
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <View style={styles.header}>
            <LinearGradient colors={['#a6d8d5', '#71c6c0', '#38b0a4']}
              style={{
                width: '100%',
                borderRadius: 10,
                flexDirection: 'row',
              }}>
              <View>
                <Text style={styles.headerText}>
                  Here you get an overview of your consumption
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
              }}>
              <View
                style={{
                  flex: 0.8,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <TouchableOpacity onPress={() => this.decrement()}>
                  <Image
                    source={require('../../Assets/back.png')}
                    style={{ width: 20, height: 20 }}
                  />
                </TouchableOpacity>
                <Text>{this.state.date}</Text>
                <TouchableOpacity onPress={() => this.increment()}>
                  <Image
                    source={require('../../Assets/next.png')}
                    style={{ width: 20, height: 20 }}
                  />
                </TouchableOpacity>
              </View>
              <View style={{ flex: 3, flexDirection: 'row', width: '92%' }}>
                <View style={{ padding: 10, width: '33%', paddingHorizontal: 2 }}>
                  <TouchableOpacity
                    onPress={() => this.clickHandler(firstWeekDay + ' - ' + lastWeekDay)}
                    style={styles.buttonStyle}>
                    <Text style={{ textAlign: 'center' }}>Week</Text>
                  </TouchableOpacity>
                </View>
                <View style={{ padding: 10, width: '33%', paddingHorizontal: 2 }}>
                  <TouchableOpacity
                    onPress={() => this.clickHandler(currentMonth)}
                    style={styles.buttonStyle}>
                    <Text style={{ textAlign: 'center' }}>Month</Text>
                  </TouchableOpacity>
                </View>
                <View style={{ padding: 10, width: '33%', paddingHorizontal: 2 }}>
                  <TouchableOpacity
                    onPress={() => this.clickHandler(currentYear)}
                    style={styles.buttonStyle}>
                    <Text style={{ textAlign: 'center' }}>Year</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View
                style={{
                  flex: 2,
                  flexDirection: 'row',
                  width: '92%',
                  alignItems: 'center',
                }}>
                <View style={{ padding: 10, width: '50%', paddingHorizontal: 2 }}>
                  <Text style={styles.boldText}>Daily Consumption</Text>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      alignSelf: 'center',
                      fontSize: 20,
                    }}>
                    470 L
                  </Text>
                </View>
                <View style={{ padding: 10, width: '50%', paddingHorizontal: 2 }}>
                  <Text style={styles.boldText}>Reduced Consumption</Text>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      alignSelf: 'center',
                      fontSize: 20,
                    }}>
                    10%
                  </Text>
                </View>
              </View>
              <LineChart
                data={linedata}
                width={Dimensions.get('window').width - 50}
                height={220}
                withDots={false}
                withInnerLines={false}
                yAxisLabel={'L '}
                chartConfig={{
                  backgroundGradientFrom: 'white',
                  backgroundGradientTo: 'white',
                  decimalPlaces: 1,
                  strokeWidth: 2,
                  color: (opacity = 1) => 'rgba(20, 10, 10, 1)',
                  style: {
                    borderRadius: 16,
                  },
                }}
                bezier
                style={{
                  borderRadius: 16,
                }}></LineChart>
              <View style={{ flexDirection: 'row' }}>
                <View style={{ flexDirection: 'row', margin: 5 }}>
                  <TouchableHighlight
                    style={styles.circleCurrent}
                    underlayColor="#ccc">
                    <Text></Text>
                  </TouchableHighlight>
                  <Text style={styles.smallText}> Current period</Text>
                </View>
                <View style={{ flexDirection: 'row', margin: 5 }}>
                  <TouchableHighlight
                    style={styles.circlePrevious}
                    underlayColor="#ccc">
                    <Text></Text>
                  </TouchableHighlight>
                  <Text style={styles.smallText}> Previous period</Text>
                </View>
                <View style={{ flexDirection: 'row', margin: 5 }}>
                  <TouchableHighlight
                    style={styles.circleRecommended}
                    underlayColor="#ccc">
                    <Text></Text>
                  </TouchableHighlight>
                  <Text style={styles.smallText}> Recommended</Text>
                </View>
              </View>
            </View>
          </View>

          <View
            style={{
              flex: 2,
              flexDirection: 'row',
              alignItems: 'center',
              borderRadius: 10,
              padding: 10,
            }}>
            <TouchableOpacity
              style={styles.consumptionCard}
              onPress={() => navigation.navigate('ConsumptionScreen')}>
              <View style={{}}>
                <Text style={styles.boldText}>
                  Do you consume more than others?
                </Text>
                <Text style={{ fontSize: 13 }}>
                  Click here to see how much you've spent compared to the others
                </Text>
              </View>
            </TouchableOpacity>
            <View style={styles.consumptionCard}>
              <Text style={{ fontSize: 13 }}>
                The amount of litres you've saved this month:
              </Text>
              <Text
                style={{ fontWeight: 'bold', alignSelf: 'center', fontSize: 19 }}>
                25 L
              </Text>
            </View>
          </View>
          <View style={styles.bottomConsumptionCard}>
            <Text style={{ fontSize: 13 }}>
              You've saved 40 DKK on water and 75 DKK on wastewater. This gives
              a total saving of 115 DKK.{' '}
            </Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEF3F7',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  header: {
    padding: 10,
    width: '98%',
  },
  headerTitle: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  headerText: {
    borderRadius: 10,

    padding: 25,
    fontSize: 16,
  },
  buttonStyle: {
    backgroundColor: 'rgba(0,0,0,0)',
    marginRight: 5,
    borderRadius: 50,
    borderWidth: 2,
    width: '100%',
    justifyContent: 'center',
  },
  smallText: {
    fontSize: 11,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  boldText: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  consumptionCard: {
    flex: 1,
    backgroundColor: 'white',
    marginHorizontal: 5,
    borderRadius: 5,
    padding: 15,
    minHeight: 160,
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
  },
  circleCurrent: {
    borderRadius:
      Math.round(
        Dimensions.get('window').width + Dimensions.get('window').height,
      ) / 2,
    width: Dimensions.get('window').width * 0.04,
    height: Dimensions.get('window').width * 0.04,
    backgroundColor: '#174A5A',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
  },
  circlePrevious: {
    borderRadius:
      Math.round(
        Dimensions.get('window').width + Dimensions.get('window').height,
      ) / 2,
    width: Dimensions.get('window').width * 0.04,
    height: Dimensions.get('window').width * 0.04,
    backgroundColor: '#9FD9D4',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
  },
  circleRecommended: {
    borderRadius:
      Math.round(
        Dimensions.get('window').width + Dimensions.get('window').height,
      ) / 2,
    width: Dimensions.get('window').width * 0.04,
    height: Dimensions.get('window').width * 0.04,
    backgroundColor: '#F88621',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
  },
});

export default SpendingsScreen;
