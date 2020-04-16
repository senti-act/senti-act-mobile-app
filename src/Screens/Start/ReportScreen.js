import * as React from 'react';
import { Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { TextInput } from 'react-native-paper';



class DataSyncScreen extends React.Component {
    componentDidMount() { }

    constructor(prop) {
        super()
    }
    render() {
        const { navigation } = this.props;
        return (
        <View style={{ padding: 20}}>
            <View style={{ borderRadius: 10, marginBottom: 15 }}>
                <LinearGradient colors={['#a6d8d5', '#71c6c0', '#38b0a4']}
                    style={{
                        width: '100%',
                        borderRadius: 10,
                        height: 140
                    }} />
                <View style={{ width: '105%', position: "absolute" }}>
                    <Image source={require('../../Assets/start/womanquestionares.png')} style={{ width: '50%', height: 150, alignSelf: 'flex-end' }}></Image>
                </View>
            </View>
            <View style={styles.contentContainer}>
                <Text style={styles.contentFont}>We found a match between your address and the following data:</Text>
                <TextInput style={styles.textInputLongTop} mode='outlined' label='Email' underlineColor='#184B5B'
                    theme={{ colors: { primary: '#2C5A69', background: '#003489' } }} />
                <TextInput style={styles.textInputLongBottom} mode='outlined' label='Message' underlineColor='#184B5B'
                    theme={{ colors: { primary: '#2C5A69', background: '#003489' } }} />
                <Text style={styles.contentFont}>You will receive an email with the answer to your inquiry as soon as possible</Text>
                <TouchableOpacity style={styles.buttonRight}
                    onPress={() => navigation.navigate('RegistrationScreen')}>
                    <Text style={{ alignSelf: 'center', color: 'white' }}>Send</Text>
                </TouchableOpacity>
            </View>
        </View >
        );
    }
}


const styles = {
    textInputLongTop: {
        backgroundColor: 'white',
        borderRadius: 20,
        height: 40,
        paddingVertical:5
    },
    textInputLongBottom: {
        backgroundColor: 'white',
        borderRadius: 20,
        height: 130,
        paddingVertical:5
    },
    buttonRight: {
        backgroundColor: '#FA821B',
        borderRadius: 10,
        height: 35,
        justifyContent: 'center',
        alignSelf: 'center',
        marginVertical: 20,
        width: 110
    },
    contentContainer: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingTop:20,
        borderRadius: 10,
    },
    contentFont: {
        color: '#2E5C6B',
        fontSize: 14,
    },
};
export default DataSyncScreen;
