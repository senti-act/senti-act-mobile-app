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

const linedata = {
    labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            data: [20, 45, 28, 80, 99, 43, 44],
            strokeWidth: 2,
        },
    ],
};


class SpendingsScreen extends React.Component {



    constructor(man) {
        super();
        this.state = { value: 'Choose a periodd' };

    }


    changeValue = (g) => {
        this.setState({ value: g });
    }

    render() {
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
                        <View style={{ backgroundColor: 'white', borderRadius: 10, padding: 10 }}>
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
                            <View>
                                <Text>
                                </Text>
                                <LineChart
                                    data={linedata}
                                    width={Dimensions.get('window').width - 50} // from react-native
                                    height={220}
                                    yAxisLabel={'L '}
                                    chartConfig={{
                                        backgroundColor: '#e26a00',
                                        backgroundGradientFrom: 'white',
                                        backgroundGradientTo: 'white',
                                        decimalPlaces: 1, // optional, defaults to 2dp
                                        color: (opacity = 1) => '#5F9EA0',
                                        style: {
                                            borderRadius: 16
                                        }
                                    }}
                                    bezier
                                    style={{
                                        marginVertical: 8,
                                        borderRadius: 16
                                    }}
                                />
                            </View>
                            <View>
                                <Text style={{ fontSize: 15, textAlign: 'center', fontWeight: 'bold' }}>My consumption status</Text>
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
                            </View>

                        </View>
                    </View >
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
});




export default SpendingsScreen;