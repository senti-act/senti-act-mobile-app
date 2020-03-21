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
            <View style={{ justifyContent: 'center', alignItems: "center" }}>
                <Image source={require('../../Assets/start/groupWelcome.png')} style={{ width: '65%', height: '65%', alignSelf: "center", }}></Image>
                <Text style={{ fontSize: 16, color: '#49717D', paddingBottom: 5 }}>Welcome to</Text>
                <Image source={require('../../Assets/start/logo.png')} style={{ width: 150, height: 45, alignSelf: "center" }}></Image>
                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', borderRadius: 10, }}>
                    <TouchableOpacity style={styles.buttonStyle}
                        onPress={() => navigation.navigate('InstructionsScreen')}>
                        <Text style={{ alignSelf: 'center', color: 'white', fontSize: 12 }}>Get Started</Text>
                    </TouchableOpacity>
                </View>
            </View >
        )
    }
}

const styles = {
    buttonStyle: {
        backgroundColor: '#FA821B',
        marginRight: 5,
        borderRadius: 8,
        width: '27%',
        height: 25,
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 20,
    },
};
export default WelcomeScreen;
