import * as React from 'react';
import { Text, View, TouchableOpacity, Image, TextInput } from 'react-native';


class LoginScreen extends React.Component {
    componentDidMount() { }

    constructor(props) {
        super();
    }

    render() {
        const { navigation } = this.props;
        return (
            <View style={{ alignItems: "center", width: '100%', alignSelf: 'center', justifyContent: 'center', borderRadius: 10, backgroundColor: 'white', padding: 30 }}>
                <Text style={styles.title}>Welcome to</Text>
                <Image source={require('../../Assets/start/logo.png')} style={styles.logo}></Image>
                <Image source={require('../../Assets/start/group.png')} style={styles.picture}></Image>
                <View style={{ width: '70 %', alignSelf: 'center', justifyContent: 'center', padding: 10 }}>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <TextInput style={styles.textInputLong}>
                        Email
                    </TextInput>
                </View>
                <View style={{ width: '70 %', alignSelf: 'center', justifyContent: 'center' }}>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <TextInput style={styles.textInputLong}>
                        Password
                    </TextInput>
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
                            onPress={() => navigation.navigate('RegisterScreen')}>
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
        width: '76%',
        height: '33%',
        alignSelf: "center",
    },
    textInputLong: {
        backgroundColor: 'white',
        height: '80%',
        borderColor: '#366270',
        borderWidth: 1,
        borderRadius: 7,
        width: '100%',
        padding: 10,
    },
    skipButton: {
        borderRadius: 7,
        width: '80%',
        height: '20%',
    },
};

export default LoginScreen;
