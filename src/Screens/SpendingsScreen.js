import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';


class SpendingsScreen extends React.Component {


    constructor(man) {
        super();
        this.state = { value: 'November' };
    }


    changeValue = (g) => {
        this.setState({ value: g });
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerTitle, styles.boldText}>Consumption Status</Text>
                    <View>
                        <Text style={styles.headerText}>Get an overview of your consumption status</Text>
                    </View>
                </View>
                <View style={styles.header}>
                    <Text style={styles.boldText}>Month: {this.state.value}</Text>
                </View>
                <View style={styles.button}>
                    <Button title='Change month' onPress={() => this.changeValue('December')}></Button>
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
    },
    headerText: {
        borderRadius: 10,
        padding: 20,
        backgroundColor: '#64BCF0',
    },
    boldText: {
        fontWeight: 'bold',
    },
    button: {
        backgroundColor: '#f0f0',
    }
});




export default SpendingsScreen;