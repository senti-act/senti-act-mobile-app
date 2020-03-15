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
    TouchableHighlight,
} from 'react-native';

const data1 = [5, 45, 28, 80, 99, 12, 44]
const data2 = [20, 60, 45, 60, 40, 5, 100]
const data3 = [50, 50, 50, 50, 50, 50, 50, 50, 50]

const linedata = {
    labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July'],
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
                        <View style={{}}>
                            <Text style={styles.headerText}>Here you get an overview of your consumption</Text>
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
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ flexDirection: 'row', margin: 5 }}>
                                        <TouchableHighlight
                                            style={styles.circleCurrent}
                                            underlayColor='#ccc'>
                                            <Text></Text>
                                        </TouchableHighlight>
                                        <Text style={styles.smallText}> Current period</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', margin: 5 }}>
                                        <TouchableHighlight
                                            style={styles.circlePrevious}
                                            underlayColor='#ccc'>
                                            <Text></Text>
                                        </TouchableHighlight>
                                        <Text style={styles.smallText}> Previous period</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', margin: 5 }}>
                                        <TouchableHighlight
                                            style={styles.circleRecommended}
                                            underlayColor='#ccc'>
                                            <Text></Text>
                                        </TouchableHighlight>
                                        <Text style={styles.smallText}> Recommended</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{ flex: 2, flexDirection: 'row', alignItems: 'center', borderRadius: 10, padding: 10 }}>
                        <TouchableOpacity style={styles.consumptionCard}
                            onPress={() => navigation.navigate('ConsumptionScreen')}>
                            <View style={{}}>
                                <Text style={styles.boldText}>Do you consume more than others?</Text>
                                <Text>Here you can find how much water you've consumed compared to other users</Text>
                            </View>
                        </TouchableOpacity>
                        <View style={styles.consumptionCard}>
                            <Text>The amount of litres you've saved this month:</Text>
                            <Text style={{ fontWeight: "bold", alignSelf: "center", fontSize: 40 }}>25 L</Text>
                        </View>
                    </View>
                    <View style={styles.bottomConsumptionCard}>
                        <Text>You've saved 40 DKK on water and 75 DKK on wastewater. This gives a total saving of 115 DKK. </Text>
                    </View>
                </View >
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
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
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
        backgroundColor: '#AACCE5',
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
        minHeight: 130,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
    },
    bottomConsumptionCard: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
        borderRadius: 10,
        padding: 10,
        backgroundColor: 'white',
        width: "92%",
        marginBottom: 10,
        shadowOpacity: 5
    },
    circleCurrent: {
        borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
        width: Dimensions.get('window').width * 0.04,
        height: Dimensions.get('window').width * 0.04,
        backgroundColor: '#174A5A',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 5,

    },
    circlePrevious: {
        borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
        width: Dimensions.get('window').width * 0.04,
        height: Dimensions.get('window').width * 0.04,
        backgroundColor: '#9FD9D4',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 5,
    },
    circleRecommended: {
        borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
        width: Dimensions.get('window').width * 0.04,
        height: Dimensions.get('window').width * 0.04,
        backgroundColor: '#F88621',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 5,
    },
});


export default SpendingsScreen;