import * as React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
class WelcomeScreen extends React.Component {
    componentDidMount() { }

    constructor(props) {
        super();
    }

    render() {
        const { navigation } = this.props;
        return (
            <View style={{ alignItems: "center", justifyContent: 'center', marginVertical: 30 }}>
                <Image source={require('../../Assets/start/groupWelcome.png')} style={styles.picture}></Image>
                <Text style={styles.title}>Welcome to</Text>
                <Image source={require('../../Assets/start/logo.png')} style={styles.logo}></Image>
                <View style={{ flex: 1, width: '100%' }}>
                    <TouchableOpacity style={styles.buttonStyle}
                        onPress={() => navigation.navigate('InstructionsScreen')}>
                        <Text style={{ alignSelf: 'center', color: 'white', fontSize: 12 }}>Get Started</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonStyle}
                        onPress={() => navigation.navigate('Login')}>
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
        borderRadius: 7,
        width: '33%',
        height: 40,
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 20,
    },
    title: {
        fontSize: 16,
        color: '#49717D',
        paddingBottom: 5
    },
    logo: {
        width: 150,
        height: 45,
        alignSelf: "center",
    },
    picture: {
        width: '65%',
        height: '65%',
        alignSelf: "center",
    }
};

export default WelcomeScreen;
