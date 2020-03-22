import * as React from 'react';
import { Text, View, TouchableOpacity, Image, TextInput, CheckBox } from 'react-native';

class DataSyncScreen extends React.Component {
    componentDidMount() { }

    constructor(prop) {
        super()
    }
    render() {
        const { navigation } = this.props;
        return (
            <View style={{ padding: 20 }}>
                <Text style={styles.title}>Connect to your data</Text>
                <View style={{}}>
                    <View style={{ flexWrap: 'wrap' }}>
                        <View style={{ width: '100%', borderRadius: 10, backgroundColor: '#95D3E3' }}>
                            <View style={{ padding: 28, width: '60%' }}>
                                <Text style={styles.contentFont}>In order to set you up we should have you connected to your data</Text>
                            </View>
                            <View style={{ width: '100%', position: 'absolute' }}>
                                <Image source={require('../../Assets/start/girlphone.png')} style={{ width: 143, height: 110, alignSelf: 'flex-end' }}></Image>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.contentContainer}>
                    <View style={{ paddingVertical: 15 }}>
                        <Text style={styles.contentFont}>Enter the following information to connect to your water usage data:</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <TextInput style={styles.textInputLong}>
                            Adress
                        </TextInput>
                    </View>
                    <View style={{ flexDirection: 'row', width: '97%' }}>
                        <TextInput style={styles.textInputLeft}>Post no.</TextInput>
                        <TextInput style={styles.textInputRight}>City</TextInput>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <CheckBox style={{ width: '10%' }}></CheckBox>
                        <View style={{ width: '88%', padding: 3 }}>
                            <Text style={styles.termsText}>
                                Please not that we do not save your address,
                                but use it to store your location so that we can make a
                                regional breakdown of the game.
                                Will you accept the terms?
                            </Text>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.buttonStyle}
                        onPress={() => navigation.navigate('DataCheckScreen')}>
                        <Text style={{ alignSelf: 'center', color: 'white' }}>Connect</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}


const styles = {
    title: {
        alignSelf: 'center',
        color: '#2E5C6B',
        fontSize: 17,
        paddingBottom: 15,
        fontWeight: 'bold'
    },
    textInputRight: {
        backgroundColor: 'white',
        width: '50%',
        height: '70%',
        borderColor: '#366270',
        borderWidth: 1,
        borderRadius: 7,
    },
    textInputLeft: {
        backgroundColor: 'white',
        width: '50%',
        height: '70%',
        borderColor: '#366270',
        borderWidth: 1,
        borderRadius: 7,
        marginRight: 9,
    },
    textInputLong: {
        backgroundColor: 'white',
        height: '70%',
        borderColor: '#366270',
        borderWidth: 1,
        borderRadius: 7,
        width: '100%',
    },
    buttonStyle: {
        backgroundColor: '#FA821B',
        borderRadius: 10,
        width: '33%',
        height: 35,
        justifyContent: 'center',
        alignSelf: 'center',
        marginVertical: 10,
    },
    contentContainer: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        marginVertical: 10,
        borderRadius: 10,
    },
    contentFont: {
        color: '#2E5C6B',
        fontSize: 12,
    },
    termsText: {
        color: '#2E5C6B',
        fontSize: 11,
    },
};
export default DataSyncScreen;
