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
            <ScrollView>
                <View style={{ padding: 20, height: '100%' }}>
                    <View style={{ width: '100%', borderRadius: 10, height: '20%', marginBottom: 15 }}>
                        <LinearGradient colors={['#a6d8d5', '#71c6c0', '#38b0a4']}
                            style={{
                                width: '100%',
                                borderRadius: 10,
                                height: '95%'
                            }} />
                        <View style={{ width: '105%', position: "absolute" }}>
                            <Image source={require('../../Assets/start/womanquestionares.png')} style={{ width: '50%', height: 100, alignSelf: 'flex-end' }}></Image>
                        </View>
                    </View>
                    <View style={styles.contentContainer}>
                        <View style={{ paddingVertical: 17 }}>
                            <Text style={styles.contentFont}>We found a match between your address and the following data:</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <TextInput style={styles.textInputLongTop} mode='outlined' label='Email' underlineColor='#184B5B'
                                theme={{ colors: { primary: '#2C5A69', background: '#003489' } }} />
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <TextInput style={styles.textInputLongBottom} mode='outlined' label='Message' underlineColor='#184B5B'
                                theme={{ colors: { primary: '#2C5A69', background: '#003489' } }} />
                        </View>
                        <View style={{ alignSelf: 'center' }}>
                            <Text style={styles.contentFont}>You will receive an email with the answer to your inquiry as soon as possible</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignSelf: "center" }}>
                            <View style={{ width: '100%', marginVertical: 8, alignSelf: 'center' }}>
                                <TouchableOpacity style={styles.buttonRight}
                                    onPress={() => navigation.navigate('RegistrationScreen')}>
                                    <Text style={{ alignSelf: 'center', color: 'white' }}>Send</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View >
            </ScrollView>


        );
    }
}


const styles = {
    title: {
        alignSelf: 'center',
        color: '#2E5C6B',
        fontSize: 17,
        paddingBottom: 15,
        fontWeight: 'bold',
        padding: 0,
    },
    textInputLongTop: {
        backgroundColor: 'white',
        padding: 5,
        borderRadius: 20,
        width: '100%',
        height: 40,
    },
    textInputLongBottom: {
        backgroundColor: 'white',
        padding: 5,
        borderRadius: 20,
        width: '100%',
        height: 130,
    },
    buttonRight: {
        backgroundColor: '#FA821B',
        borderRadius: 10,
        width: '33%',
        height: 35,
        justifyContent: 'center',
        alignSelf: "center",
        marginVertical: 10,
    },
    contentContainer: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        height: '100%',
        borderRadius: 10,
        marginBottom: 120
    },
    contentFont: {
        color: '#2E5C6B',
        fontSize: 14,
    },
};
export default DataSyncScreen;
