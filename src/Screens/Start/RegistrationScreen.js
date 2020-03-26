import * as React from 'react';
import { Text, View, TouchableOpacity, Image, ScrollView, CheckBox } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { TextInput } from 'react-native-paper';


class RegistrationScreen extends React.Component {
    componentDidMount() { }

    constructor(prop) {
        super()
    }
    render() {
        const { navigation } = this.props;
        return (
            <ScrollView>
                <View style={{ padding: 20, height: '100%' }}>
                    <View style={{ width: '100%', borderRadius: 10, height: '25%' }}>
                        <LinearGradient colors={['#a6d8d5', '#71c6c0', '#38b0a4']}
                            style={{
                                width: '100%',
                                borderRadius: 10,
                                height: '85%',
                                flexDirection: 'row'
                            }} />
                        <View style={{ width: '95%', position: "absolute", marginTop: -20 }}>
                            <Image source={require('../../Assets/start/family.png')} style={{ width: 120, height: 145, alignSelf: 'center' }}></Image>
                        </View>
                    </View>
                    <View style={styles.contentContainer}>
                        <View style={{ paddingVertical: 17 }}>
                            <Text style={styles.contentFont}>You need to sign-in to complete your profile:</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <TextInput style={styles.textInputLong} mode='outlined' label='Email' underlineColor='#184B5B'
                                theme={{ colors: { primary: '#2C5A69', background: '#003489' } }} />
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <TextInput style={styles.textInputLong} mode='outlined' label='Password' underlineColor='#184B5B'
                                theme={{ colors: { primary: '#2C5A69', background: '#003489' } }} />
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <TextInput style={styles.textInputLong} mode='outlined' label='Repeat password' underlineColor='#184B5B'
                                theme={{ colors: { primary: '#2C5A69', background: '#003489' } }} />
                        </View>
                        <View style={{ paddingVertical: 17 }}>
                            <Text style={styles.contentFont}>
                                To better analyze your data, we need to know how
                                many children and adults are in the household.
                            </Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <CheckBox style={{ width: '10%' }}></CheckBox>
                            <View style={{ width: '88%', padding: 3 }}>
                                <Text style={styles.termsText}>
                                    Yes, I accept the terms and conditions for personal data policy
                                </Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', alignSelf: "center" }}>
                            <View style={{ width: '100%' }}>
                                <TouchableOpacity style={styles.buttonLeft}
                                    onPress={() => navigation.navigate('startGuideSkipStack')}>
                                    <Text style={{ alignSelf: 'center', color: 'white' }}>Yes</Text>
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
    textInputLong: {
        backgroundColor: 'white',
        padding: 5,
        borderRadius: 20,
        width: '100%',
        height: 40,
    },
    buttonLeft: {
        backgroundColor: '#FA821B',
        borderRadius: 10,
        width: '33%',
        height: 35,
        justifyContent: 'center',
        alignSelf: "center",
        marginVertical: 10,
    },
    buttonRight: {
        backgroundColor: '#FA821B',
        borderRadius: 10,
        width: '50%',
        height: 35,
        justifyContent: 'center',
        alignSelf: "flex-start",
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
    termsText: {
        color: '#2E5C6B',
        fontSize: 11,
    },
};
export default RegistrationScreen;
