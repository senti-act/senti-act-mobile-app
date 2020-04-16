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

const data = {
  data: [0.7, 0.8],
};

class ConsumptionScreen extends React.Component {
  constructor(props) {
    super();
  }

  changeValue = g => {
    this.setState({ value: g });
  };

  render() {
    const { navigation } = this.props;
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
              <View style={{}}>
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
              }}>
              <View
                style={{
                  flex: 0.8,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <TouchableOpacity>
                  <Image
                    source={require('../../Assets/back.png')}
                    style={{ width: 20, height: 20 }}
                  />
                </TouchableOpacity>
                <Text style={{}}>December</Text>
                <TouchableOpacity>
                  <Image
                    source={require('../../Assets/next.png')}
                    style={{ width: 20, height: 20 }}
                  />
                </TouchableOpacity>
              </View>
              <View style={{ flexDirection: 'row', width: '100%', alignSelf: 'center' }}>
                <View style={{ padding: 10, width: '38%', paddingHorizontal: 2 }}>
                  <TouchableOpacity style={styles.buttonStyle}>
                    <Text style={{ textAlign: 'center' }}>Week</Text>
                  </TouchableOpacity>
                </View>
                <View style={{ padding: 10, width: '38%', paddingHorizontal: 2 }}>
                  <TouchableOpacity style={styles.buttonStyle}>
                    <Text style={{ textAlign: 'center' }}>Month</Text>
                  </TouchableOpacity>
                </View>
                <View style={{ padding: 10, width: '38%', paddingHorizontal: 2 }}>
                  <TouchableOpacity style={styles.buttonStyle}>
                    <Text style={{ textAlign: 'center' }}>Year</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View>

                <ProgressChart
                  data={data}
                  width={Dimensions.get('window').width - 100}
                  height={260}
                  hideLegend={true}
                  chartConfig={{
                    backgroundColor: 'blue',
                    backgroundGradientFrom: 'white',
                    backgroundGradientTo: 'white',
                    decimalPlaces: 3,
                    color: (opacity = 1) => `rgba(23, 74, 92, ${opacity})`,
                    style: {
                      borderRadius: 16,
                    },
                  }}
                  style={{
                    borderRadius: 16,
                    fontSize: 25,
                    marginLeft: 55,
                  }}
                />
                <View style={{ position: 'absolute', alignSelf: 'center', marginVertical: 110 }}>
                  <Text>591 L~{"\n"}(676 L)</Text>
                </View>
              </View>
              <View style={{ flexDirection: 'row' }}>
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
                  <Text style={styles.smallText}>My consumption</Text>
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
                  <Text style={styles.smallText}> Avg. user consumption</Text>
                </View>
              </View>
              <View>
                <Text style={styles.boldText}>My consumption status</Text>
              </View>
              <View style={{ width: '78%', alignSelf: 'center' }}>
                <Text style={{ textAlign: 'center', paddingTop: 10 }}>
                  To this date. you have used less water
                  than last week.
                </Text>
              </View>
              <View style={{ flexDirection: 'row', flexWrap: 'wrap', alignSelf: 'center', width: '120%', marginVertical: 15 }}>
                <View style={{ width: '33%', marginHorizontal: 10 }}>
                  <TouchableOpacity style={styles.buttonStyle}
                    onPress={() => navigation.goBack()}>
                    <Text style={{ textAlign: 'center' }}>Previous period</Text>
                  </TouchableOpacity>
                </View>
                <View style={{ width: '50%', marginHorizontal: 10 }}>
                  <TouchableOpacity style={styles.buttonStyle}
                    onPress={() => navigation.goBack()}>
                    <Text style={{ textAlign: 'center' }}>Average of all players</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
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
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 1,
    // },
    // shadowOpacity: 0.2,
    // shadowRadius: 1.41,
    // elevation: 2,
    paddingHorizontal: 15,
  },
  header: {
    marginVertical: 10,
    width: '100%',
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
    padding: 4
  },
  smallText: {
    fontSize: 11,
    alignSelf: 'center',
    fontWeight: 'bold',
    marginLeft: 5
  },
  boldText: {
    fontSize: 14,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  consumptionCard: {
    flex: 1,
    backgroundColor: 'white',
    marginHorizontal: 5,
    borderRadius: 5,
    padding: 5,
    minHeight: 130,
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 1,
    // },
    // shadowOpacity: 0.2,
    // shadowRadius: 1.41,
    // elevation: 2,
  },
  bottomConsumptionCard: {
    marginTop: 5,
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 1,
    // },
    // shadowOpacity: 0.2,
    // shadowRadius: 1.41,
    // elevation: 2,
    borderRadius: 10,
    padding: 10,
    backgroundColor: 'white',
    width: '100%',
    marginBottom: 10,
    shadowOpacity: 5,
  },
  circleMyConsumption: {
    borderRadius:
      Math.round(
        Dimensions.get('window').width + Dimensions.get('window').height,
      ) / 2,
    width: Dimensions.get('window').width * 0.04,
    height: Dimensions.get('window').width * 0.04,
    backgroundColor: '#446E7B',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
  },
  circleAvgConsumption: {
    borderRadius:
      Math.round(
        Dimensions.get('window').width + Dimensions.get('window').height,
      ) / 2,
    width: Dimensions.get('window').width * 0.04,
    height: Dimensions.get('window').width * 0.04,
    backgroundColor: '#73929C',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
  },
});

export default ConsumptionScreen;
