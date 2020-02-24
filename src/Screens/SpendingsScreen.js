import * as React from 'react';
import { Text, View } from 'react-native';


class SpendingsScreen extends React.Component {

    componentDidMount() {

    }

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center' }}>
                <Text>Consumption Status</Text>
                <Text>Get an overview of your consumption status</Text>
            </View>
        );
    }
}




export default SpendingsScreen;