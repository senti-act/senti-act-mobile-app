import * as React from 'react';
import { Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { TextInput } from 'react-native-paper';

class DataSyncScreen extends React.Component {
    constructor(prop) {
        super()
    }

    render() {
        const { navigation } = this.props;
        return (
        <View style={{ padding: 20, }}>
            <View style={{borderRadius: 10}}>
                <LinearGradient colors={['#a6d8d5', '#71c6c0', '#38b0a4']}
                    style={{
                        borderRadius: 10,
                        height: 140
                    }} />
                <View style={{ width: '95%', position: "absolute", marginVertical: -10 }}>
                    <Image source={require('../../Assets/start/completed.png')} style={{ width: '30%', height: 145, alignSelf: 'flex-end' }}></Image>
                </View>
            </View>

            <View style={styles.contentContainer}>
                <Text style={styles.contentFont}>We found a match between your address and the following data:</Text>
                <TextInput style={styles.textInputLong} mode='outlined' label='Water suplier' underlineColor='#184B5B'
                    theme={{ colors: { primary: '#2C5A69', background: '#003489' } }} />
                <TextInput style={styles.textInputLong} mode='outlined' label='Customer number' underlineColor='#184B5B'
                    theme={{ colors: { primary: '#2C5A69', background: '#003489' } }} />
                <TextInput style={styles.textInputLong} mode='outlined' label='Housing association' underlineColor='#184B5B'
                    theme={{ colors: { primary: '#2C5A69', background: '#003489' } }} />
                <TextInput style={styles.textInputLong} mode='outlined' label='Registered user' underlineColor='#184B5B'
                    theme={{ colors: { primary: '#2C5A69', background: '#003489' } }} />
                <Text style={styles.contentFont}>Is this information correct?</Text>
                <View style={{ flexDirection: 'row', justifyContent:'center'}}>
                <TouchableOpacity style={styles.button}
                    onPress={() => navigation.navigate('RegistrationScreen')}>
                    <Text style={{ alignSelf: 'center', color: 'white' }}>Yes</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}
                    onPress={() => navigation.navigate('ReportScreen')}>
                    <Text style={{ alignSelf: 'center', color: 'white' }}>No</Text>
                </TouchableOpacity>
                </View>
            </View>
        </View >
    );
    }
}

const styles = {
    textInputLong: {
        backgroundColor: 'white',
        padding: 5,
        borderRadius: 20,
        width: '100%',
        height: 40,
    },
    button: {
        backgroundColor: '#FA821B',
        borderRadius: 10,
        width: 80,
        height: 35,
        justifyContent: 'center',
        marginVertical: 10,
        marginHorizontal: 10,
    },
    contentContainer: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        borderRadius: 10,
        marginTop:20
    },
    contentFont: {
        color: '#2E5C6B',
        fontSize: 14,
        paddingVertical:15,
        alignSelf:'center'
    },
};
export default DataSyncScreen;
