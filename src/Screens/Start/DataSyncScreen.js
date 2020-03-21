import * as React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';

class DataSyncScreen extends React.Component {
    componentDidMount() { }

    constructor(prop) {
        super()
    }
    render() {
        const { navigation } = this.props;
        return (
            <View style={{ justifyContent: 'center', padding: 10 }}>
                <Text style={{ alignSelf: 'center', color: '#2E5C6B', fontSize: 15 }}>Connect to your data</Text>
                <View style={{}}>
                    <View style={{ flexWrap: 'wrap' }}>
                        <View style={{ alignSelf: 'flex-start', width: '100%', flexDirection: 'column', marginVertical: 20, borderRadius: 10, backgroundColor: '#95D3E3' }}>
                            <Text style={{ padding: 25, width: '50%' }}>In order to set you up we should have you connected to your data</Text>
                            <View style={{ alignSelf: 'flex-end', width: '100%', flex: 1, position: 'absolute', marginTop: 20 }}>
                                <Image source={require('../../Assets/start/girlphone.png')} style={{ width: 143, height: 110, alignSelf: 'flex-end' }}></Image>
                            </View>
                        </View>
                    </View>
                    <View style={{ width: '50%', flexDirection: 'column' }}>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', borderRadius: 10, padding: 10 }}>
                    <TouchableOpacity style={styles.buttonStyle}
                        onPress={() => navigation.navigate('DataCheckScreen')}>
                        <Text style={{ alignSelf: 'center', color: 'white' }}>Connect</Text>
                    </TouchableOpacity>
                </View>
            </ View >
        );
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
