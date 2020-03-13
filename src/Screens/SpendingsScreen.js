import * as React from 'react';
import { LineChart } from 'react-native-chart-kit'
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    Image,
    ScrollView,
    Dimensions,
} from 'react-native';

const data1 = [5, 45, 28, 80, 99, 12, 44]
const data2 = [20, 60, 45, 60, 40, 5, 100]
const data3 = [50, 50, 50, 50, 50, 50, 50, 50, 50]

const linedata = {
    labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            data: data1,
            color: (opacity = 1) => ("blue"),
        },
        {
            data: data2,
            color: (opacity = 1) => `red`,

        },
        {
            data: data3,
            color: (opacity = 1) => `orange`,

        },
    ],

};


class SpendingsScreen extends React.Component {



    constructor(props) {
        super();
    }


    changeValue = (g) => {
        this.setState({ value: g });
    }

    render() {
        const { route, navigation } = this.props;
        return (
            <ScrollView style={styles.scrollView}>
                <View style={styles.container}>
                    <View style={styles.header}>
                        <View>
                            <Text style={styles.headerTitle}>Consumption Status</Text>
                        </View>
                        <View style={{ paddingTop: 15 }}>
                            <Text style={styles.headerText}>Get an overview of your consumption status</Text>
                        </View>
                    </View>

                    <View style={styles.container}>
                        <View style={{ backgroundColor: 'white', borderRadius: 10, padding: 10, marginBottom: 5 }}>
                            <View style={{ flex: .8, flexDirection: 'row', justifyContent: "space-between" }}>
                                <TouchableOpacity>
                                    <Image source={require('../Assets/back.png')} style={{ width: 20, height: 20 }} />
                                </TouchableOpacity>
                                <Text style={{}}>December</Text>
                                <TouchableOpacity>
                                    <Image source={require('../Assets/next.png')} style={{ width: 20, height: 20 }} />
                                </TouchableOpacity>
                            </View>
                            <View style={{ flex: 3, flexDirection: 'row', width: '92%' }}>
                                <View style={{ padding: 10, width: '33%', paddingHorizontal: 2 }}>
                                    <TouchableOpacity style={styles.buttonStyle}><Text style={{ textAlign: 'center' }}>Week</Text></TouchableOpacity>
                                </View>
                                <View style={{ padding: 10, width: '33%', paddingHorizontal: 2 }}>
                                    <TouchableOpacity style={styles.buttonStyle}><Text style={{ textAlign: 'center' }}>Month</Text></TouchableOpacity>
                                </View>
                                <View style={{ padding: 10, width: '33%', paddingHorizontal: 2 }}>
                                    <TouchableOpacity style={styles.buttonStyle}><Text style={{ textAlign: 'center' }}>Year</Text></TouchableOpacity>
                                </View>
                            </View>
                            <View style={{ flex: 2, flexDirection: 'row', width: '92%', alignItems: 'center' }}>
                                <View style={{ padding: 10, width: '50%', paddingHorizontal: 2 }}>
                                    <Text style={styles.boldText}>Daily Consumption</Text>
                                    <Text style={{ fontWeight: "bold", alignSelf: "center", fontSize: 20 }}>470 L</Text>
                                </View>
                                <View style={{ padding: 10, width: '50%', paddingHorizontal: 2 }}>
                                    <Text style={styles.boldText}>Reduced Consumption</Text>
                                    <Text style={{ fontWeight: "bold", alignSelf: "center", fontSize: 20 }}>10%</Text>
                                </View>
                            </View>
                            <View>
                                <Text>
                                </Text>
                                <LineChart
                                    data={linedata}
                                    width={Dimensions.get('window').width - 50}
                                    height={220}
                                    yAxisLabel={'L '}
                                    chartConfig={{
                                        backgroundGradientFrom: 'white',
                                        backgroundGradientTo: 'white',
                                        decimalPlaces: 1,
                                        strokeWidth: 2,
                                        color: (opacity = 1) => ('rgba(20, 10, 10, 1)'),
                                        style: {
                                            borderRadius: 16,
                                        }
                                    }}
                                    bezier
                                    style={{
                                        marginVertical: 8,
                                        borderRadius: 16
                                    }}
                                >
                                </LineChart>
                            </View>
                        </View>
                        {/* <View>
                                <Text style={styles.boldText}>My consumption status</Text>
                            </View>
                            <View style={{ width: '50%', alignSelf: 'center' }}>
                                <Text style={{ textAlign: 'center', paddingTop: 10 }}>To date, you have used less water than last week</Text>
                            </View>
                            <View style={{ flex: 2, flexDirection: 'row', width: '92%', justifyContent: 'center' }}>
                                <View style={{ padding: 10, width: '50%', paddingHorizontal: 2 }}>
                                    <TouchableOpacity style={styles.buttonStyle}><Text style={{ textAlign: 'center' }}>My previous period</Text></TouchableOpacity>
                                </View>
                                <View style={{ padding: 10, width: '50%', paddingHorizontal: 2 }}>
                                    <TouchableOpacity style={styles.buttonStyle}><Text style={{ textAlign: 'center' }}>Total consumption</Text></TouchableOpacity>
                                </View>
                            </View> */}
                    </View >
                    <View style={{ flex: 2, flexDirection: 'row', alignItems: 'center', borderRadius: 10, padding: 10 }}>
                        <TouchableOpacity style={styles.consumptionCard}
                            onPress={() => navigation.navigate('ConsumptionScreen')}>
                            <View style={{}}>
                                <Text style={styles.boldText}>My consumption status</Text>
                                <Text>You've spent less water than last week</Text>
                            </View>
                        </TouchableOpacity>
                        <View style={styles.consumptionCard}>
                            <Text>In total, all consumers in the Northern Jutland region have reduced water consumption by:</Text>
                            <Text style={{ fontWeight: "bold", alignSelf: "center", fontSize: 20 }}>25 %</Text>
                        </View>
                    </View>
                    <View style={{ borderRadius: 10, padding: 10, backgroundColor: 'white', width: "92%", marginBottom: 10 }}>
                        <Text>40 DKK on water and 75 DKK on wastewater. This gives a total saving of 115 DKK </Text>
                    </View>
                </View >
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#BCC6CC',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        padding: 10,
        margin: 20,
        width: '98%'
    },
    headerTitle: {
        fontWeight: 'bold',
        fontSize: 20,
    },
    headerText: {
        borderRadius: 10,
        backgroundColor: '#64BCF0',
        padding: 25,
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
        alignSelf: "center",
        fontWeight: "bold",
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
        minHeight: 130
    },
});




export default SpendingsScreen;