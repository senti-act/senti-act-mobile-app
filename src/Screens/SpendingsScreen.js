import * as React from 'react';
import {
    Text,
    View,
    StyleSheet,
    Button,
} from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';



class SpendingsScreen extends React.Component {


    constructor(man) {
        super();
        this.state = { value: 'Choose a period' };
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
                    <View style={styles.headerText}>
                        <Text>Get an overview of your consumption status</Text>
                    </View>
                </View>

                <View style={styles.container}>
                    <Text style={{ fontWeight: 'bold' }}>Period: {this.state.value}</Text>
                    <View style={{ flex: 3, flexDirection: 'row' }}>
                        <View style={styles.button}>
                            <Button style={styles.buttonAnalytics} title='Week' onPress={() => this.changeValue('1.7 - 8.7')}></Button>
                        </View>
                        <View style={styles.button}>
                            <Button style={styles.buttonAnalytics} title='Month' onPress={() => this.changeValue('July')}></Button>
                        </View>
                        <View style={styles.button}>
                            <Button style={styles.buttonAnalytics} title='Year' onPress={() => this.changeValue('2020')}></Button>
                        </View>
                    </View>
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
        padding: 20,
        margin: 20,
    },
    headerTitle: {
        fontWeight: 'bold',
        fontSize: 20,
    },
    headerText: {
        borderRadius: 10,
        backgroundColor: '#64BCF0',
        padding: 20,
    },
    button: {
        backgroundColor: '#f0f0',
        padding: 20,
    },
    buttonAnalytics: {

    }
});




export default SpendingsScreen;