import * as React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { TextInput } from 'react-native-paper';

class LoginScreen extends React.Component {
    componentDidMount() { }

    constructor(props) {
        super();
    }

    render() {
        const { navigation } = this.props;
        return (
            <View style={{ alignItems: "center", width: '100%', alignSelf: 'center', justifyContent: 'center', borderRadius: 10, backgroundColor: 'white', padding: 30, paddingVertical: 50 }}>
                <Text style={styles.title}>Welcome to</Text>
                <Image source={require('../../Assets/start/logo.png')} style={styles.logo}></Image>
                <Image source={require('../../Assets/start/group.png')} style={styles.picture}></Image>
                <View style={{ width: '70 %', alignSelf: 'center', justifyContent: 'center', padding: 10 }}>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <TextInput style={styles.textInputLong} mode='outlined' label='Email' underlineColor='#184B5B'
                        theme={{ colors: { primary: '#2C5A69', background: '#003489' } }} />
                </View>
                <View style={{ width: '70 %', alignSelf: 'center', justifyContent: 'center' }}>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <TextInput style={styles.textInputLong} mode='outlined' label='Password' underlineColor='#184B5B'
                        theme={{ colors: { primary: '#2C5A69', background: '#003489' } }} />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', padding: 10, width: '100%', flexWrap: 'wrap' }}>
                    <View style={{ width: '50%', alignSelf: 'flex-start' }}>
                        <TouchableOpacity style={styles.skipButton}
                            onPress={() => navigation.navigate('ReportScreen')}>
                            <Text style={{ alignSelf: 'flex-end', color: 'black', fontSize: 14 }}>Unable to login?</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: '50%', alignSelf: 'flex-end' }}>
                        <TouchableOpacity style={styles.skipButton}
                            onPress={() => navigation.navigate('RegistrationScreen')}>
                            <Text style={{ alignSelf: 'flex-end', color: 'black', fontSize: 14, fontWeight: 'bold' }}>Sign up</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.buttonStyle}
                        onPress={() => navigation.navigate('navigation')}>
                        <Text style={{ alignSelf: 'center', color: 'white', fontSize: 12 }}>Login</Text>
                    </TouchableOpacity>
                </View>
            </View >

        )
    }
}

const styles = {
    buttonStyle: {
        backgroundColor: '#FA821B',
        borderRadius: 10,
        padding: 10,
        width: '40%',
        justifyContent: 'center',
        alignSelf: 'center',
        marginVertical: 20,

    },
    skipButton: {
        borderRadius: 7,
        width: '80%',
        height: '20%',
    },
    title: {
        fontSize: 25,
        color: '#49717D',
        justifyContent: 'center',
        padding: 5
    },
    title2: {
        fontSize: 16,
        color: '#49717D',
        justifyContent: 'center',
        textAlign: 'center',
    },
    logo: {
        width: 100,
        height: 25,
        alignSelf: "center",
        marginBottom: 15
    },
    picture: {
        width: '65%',
        height: '30%',
        alignSelf: "center",
        color: '#184B5B'
    },
    textInputLong: {
        backgroundColor: 'white',
        padding: 5,
        borderRadius: 20,
        width: '100%',
        height: 40,
    },
    skipButton: {
        borderRadius: 7,
        width: '80%',
        height: '20%',
    },
};

export default LoginScreen;
