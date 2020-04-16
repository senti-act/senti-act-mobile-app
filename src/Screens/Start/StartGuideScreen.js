import * as React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';


class StartGuideScreen extends React.Component {
    componentDidMount() { }

    constructor(props) {
        super();
    }

    render() {
        const { navigation } = this.props;
        return (
            <View style={{ alignItems: "center", height: '100%', width: '100%', justifyContent: 'center' }}>
                <View style={{ alignItems: "center", height: '100%', width: '100%', justifyContent: 'center', marginTop: 50 }}>
                    <Text style={styles.title}>Welcome to</Text>
                    <Image source={require('../../Assets/start/logo.png')} style={styles.logo}></Image>
                    <Image source={require('../../Assets/start/group.png')} style={styles.picture}></Image>
                    <View style={{ width: '70 %', alignSelf: 'center', justifyContent: 'center', padding: 10 }}>
                        <Text style={styles.title2}>You are now almost ready to get started with the game</Text>

                    </View >
                    <TouchableOpacity style={styles.buttonStyle}
                        onPress={() => navigation.navigate('GuideScreen')}>
                        <Text style={{ alignSelf: 'center', color: 'white', fontSize: 12 }}>Start Guide</Text>
                    </TouchableOpacity>
                </View>



                <View style={{ width: '100%' }}>

                    <TouchableOpacity style={styles.skipButton}
                        onPress={() => navigation.navigate('WelcomeScreen')}>
                        <Text style={{ alignSelf: 'flex-end', color: 'black', fontSize: 16 }}>Skip</Text>
                    </TouchableOpacity>
                </View>
            </View>


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
        marginVertical: 20

    },
    skipButton: {

        width: '90%',
        height: '20%',
    },
    title: {
        fontSize: 23,
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
        width: 150,
        height: 45,
        alignSelf: "center",

    },
    picture: {
        width: '60%',
        height: '30%',
        alignSelf: "center",
        marginVertical: 40,
    }
};

export default StartGuideScreen;
