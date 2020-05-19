import * as React from 'react';
import { Text, View, TouchableOpacity, Image, SafeAreaView } from 'react-native';

class WelcomeScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { navigation } = this.props;
        return (
            // <SafeAreaView style={{ flex:1}}>
                <SafeAreaView style={{flex:1,}}>
                    <View style={{flex:2, justifyContent:'center',alignItems:'center',marginTop:20}}>
                        <Image source={require('../../Assets/start/groupWelcome.png')} style={{resizeMode:'contain',width:240}}></Image>
                    </View>
                    <View style={{flex:1,justifyContent:'center'}}>
                        <Text style={styles.title}>Welcome to</Text>
                        <Image source={require('../../Assets/start/logo.png')} style={styles.logo}></Image>
                    </View>
                    <View style={{ flex: 1, width: '100%' }}>
                        <TouchableOpacity disabled style={styles.buttonStyle}
                            onPress={() => navigation.navigate('InstructionsScreen')}>
                            <Text style={{ alignSelf: 'center', color: 'white', fontSize: 16, fontWeight:'bold' }}>Get Started</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonStyle}
                            onPress={() => navigation.navigate('Login')}>
                            <Text style={{ alignSelf: 'center', color: 'white', fontSize: 16 , fontWeight:'bold'}}>Login</Text>
                        </TouchableOpacity>
                    </View>
                </SafeAreaView>
            // </SafeAreaView >
        )
    }
}

const styles = {
    buttonStyle: {
        backgroundColor: '#FA821B',
        borderRadius: 15,
        width: '33%',
        height: 40,
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 20,
    },
    title: {
        fontSize: 32,
        textAlign:'center',
        color: '#49717D',
        paddingBottom: 5
    },
    logo: {
        alignSelf: "center",
    },
    picture: {
        alignSelf: "center",
    }
};

export default WelcomeScreen;
