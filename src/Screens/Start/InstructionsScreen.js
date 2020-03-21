import * as React from 'react';
import { Text, View, TouchableOpacity, Image, Dimensions, TouchableHighlight } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


class InstructionsScreen extends React.Component {
    componentDidMount() { }

    constructor(props) {
        super();
    }

    render() {
        const { navigation } = this.props;
        return (

            <View style={{}}>
                <View style={{ alignSelf: "center" }}>
                    <TouchableOpacity style={styles.buttonStyle}
                        onPress={() => navigation.navigate('DataSyncScreen')}>
                        <Text style={{ alignSelf: 'center', color: 'white' }}>Create an Account</Text>
                    </TouchableOpacity>
                </View>
                <Text style={{ fontSize: 16, color: '#174A5A', alignSelf: "center" }}> Why to play Senti.act?</Text>
                <View style={{ flexWrap: 'wrap' }}>
                    <View style={{ width: '40%', padding: 20, flexDirection: 'column' }}>
                        <View style={{ alignSelf: 'flex-end' }}>
                            <TouchableHighlight
                                style={styles.circleRecommended}
                                underlayColor='#ccc'>
                                <Image source={require('../../Assets/start/drop.png')} style={{ width: 26, height: 37 }}></Image>
                            </TouchableHighlight>
                        </View>
                        <View style={{ alignSelf: 'flex-end' }}>
                            <TouchableHighlight
                                style={styles.circleRecommended}
                                underlayColor='#ccc'>
                                <Image source={require('../../Assets/start/light.png')} style={{ width: 26, height: 37 }}></Image>
                            </TouchableHighlight>
                        </View>
                        <View style={{ alignSelf: 'flex-end' }}>
                            <TouchableHighlight
                                style={styles.circleRecommended}
                                underlayColor='#ccc'>
                                <Image source={require('../../Assets/start/trophy.png')} style={{ width: 38, height: 38 }}></Image>
                            </TouchableHighlight>

                        </View>
                    </View>
                    <View style={{ width: '60%', marginTop: 15, flexDirection: 'column' }}>
                        <Text style={styles.text}>You get an overview of {"\n"}your water consumption.</Text>
                        <Text style={styles.text}>Find great tips and {"\n"}advice on how to save{"\n"}water in your home.</Text>
                        <Text style={{ marginTop: 25 }}>Play against others and {"\n"}win prizes, points and{"\n"}badges.</Text>
                    </View>

                </View>
            </View>









        )
    }
}

const styles = {
    buttonStyle: {
        backgroundColor: '#FA821B',
        borderRadius: 10,
        width: '50%',
        height: 35,
        padding: 10,

    },
    circleRecommended: {
        borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
        width: Dimensions.get('window').width * 0.2,
        height: Dimensions.get('window').width * 0.2,
        backgroundColor: '#A8D8E7',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 15,
    },
    text: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 30,

    }
};
export default InstructionsScreen;
