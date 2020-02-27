import * as React from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    Image,
} from 'react-native';





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
                        <View style={{ flex: 3, flexDirection: 'row', justifyContent: "space-between" }}>
                            <TouchableOpacity>
                                <Image source={require('../Assets/back.png')} style={{ width: 20, height: 20 }} />
                            </TouchableOpacity>
                            <Text style={{}}>December</Text>
                            <TouchableOpacity>
                                <Image source={require('../Assets/next.png')} style={{ width: 20, height: 20 }} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 3, flexDirection: 'row' }}>
                            <View style={{ padding: 20, width: 100, paddingHorizontal: 2 }}>
                                <TouchableOpacity style={styles.buttonStyle}><Text style={{ textAlign: 'center' }}>Week</Text></TouchableOpacity>
                            </View>
                            <View style={{ padding: 20, width: 100, paddingHorizontal: 2 }}>
                                <TouchableOpacity style={styles.buttonStyle}><Text style={{ textAlign: 'center' }}>Month</Text></TouchableOpacity>
                            </View>
                            <View style={{ padding: 20, width: 100, paddingHorizontal: 2 }}>
                                <TouchableOpacity style={styles.buttonStyle}><Text style={{ textAlign: 'center' }}>Year</Text></TouchableOpacity>
                            </View>
                        </View>
                        <View>
                            <Text style={{ fontSize: 15, textAlign: 'center', fontWeight: 'bold' }}>My consumption status</Text>
                        </View>
                        <View style={{ width: '50%', alignSelf: 'center' }}>
                            <Text style={{ textAlign: 'center', paddingTop: 10 }}>To date, you have used less water than last week</Text>
                        </View>
                        <View style={{ flex: 3, flexDirection: 'row' }}>
                            <View style={{ padding: 20, width: 150, paddingHorizontal: 2 }}>
                                <TouchableOpacity style={styles.buttonStyle}><Text style={{ textAlign: 'center' }}>My previous period</Text></TouchableOpacity>
                            </View>
                            <View style={{ padding: 20, width: 150, paddingHorizontal: 2 }}>
                                <TouchableOpacity style={styles.buttonStyle}><Text style={{ textAlign: 'center' }}>Total consumption</Text></TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View >
                <View>
                </View>
            </View >


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
        width: '100%'
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
        marginLeft: 5,
        marginRight: 5,
        borderRadius: 50,
        borderWidth: 2,
        padding: 10,
        width: '100%',
    },
});




export default SpendingsScreen;