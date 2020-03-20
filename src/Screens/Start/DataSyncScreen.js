import * as React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

class DataSyncScreen extends React.Component {
    componentDidMount() { }

    constructor(prop) {
        super()
    }
    render() {
        const { navigation } = this.props;
        return (
            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', borderRadius: 10, padding: 30 }}>
                <TouchableOpacity style={styles.buttonStyle}
                    onPress={() => navigation.navigate('DataCheckScreen')}>
                    <Text style={{ alignSelf: 'center', color: 'white' }}>Connect</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = {
    buttonStyle: {
        backgroundColor: '#FA821B',
        marginRight: 5,
        borderRadius: 10,
        width: '33%',
        height: 35,
        justifyContent: 'center',
        alignSelf: 'center',
    },
};
export default DataSyncScreen;
