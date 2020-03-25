import * as React from 'react';
import { Text, View, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


class DataCheckScreen extends React.Component {
    componentDidMount() { }

    constructor(prop) {
        super()
    }
    render() {
        const { navigation } = this.props;
        return (
            <ScrollView>
                <View style={{ padding: 20, height: '100%' }}>
                    <View style={{ width: '100%', borderRadius: 10, height: '30%' }}>
                        <View style={{ alignSelf: 'center' }}>
                            <Text style={styles.title}>Good luck, we found a match</Text>
                        </View>
                        <LinearGradient colors={['#a6d8d5', '#71c6c0', '#38b0a4']}
                            style={{
                                width: '100%',
                                borderRadius: 10,
                                height: '64%'
                            }} />
                        <View style={{ width: '95%', position: "absolute", marginVertical: 25 }}>
                            <Image source={require('../../Assets/start/completed.png')} style={{ width: '30%', height: 125, alignSelf: 'flex-end' }}></Image>
                        </View>
                    </View>

                    <View style={styles.contentContainer}>
                        <View style={{ paddingVertical: 17 }}>
                            <Text style={styles.contentFont}>We found a match between your address and the following data:</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <TextInput style={styles.textInputLong}>
                                Water Supply
                        </TextInput>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <TextInput style={styles.textInputLong}>
                                Water number
                            </TextInput>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <TextInput style={styles.textInputLong}>
                                Housing association
                            </TextInput>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <TextInput style={styles.textInputLong}>
                                Registered user
                            </TextInput>
                        </View>
                        <View style={{ alignSelf: 'center' }}>
                            <Text style={styles.contentFont}>Is this information correct?</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignSelf: "center" }}>
                            <View style={{ width: '50%', margin: 8 }}>
                                <TouchableOpacity style={styles.buttonLeft}
                                    onPress={() => navigation.navigate('RegistrationScreen')}>
                                    <Text style={{ alignSelf: 'center', color: 'white' }}>Yes</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ width: '50%', margin: 8 }}>
                                <TouchableOpacity style={styles.buttonRight}
                                    onPress={() => navigation.navigate('RegistrationScreen')}>
                                    <Text style={{ alignSelf: 'center', color: 'white' }}>No</Text>
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
        height: '80%',
        borderColor: '#366270',
        borderWidth: 1,
        borderRadius: 7,
        width: '100%',
        padding: 10,
    },
    buttonLeft: {
        backgroundColor: '#FA821B',
        borderRadius: 10,
        width: '50%',
        height: 35,
        justifyContent: 'center',
        alignSelf: "flex-end",
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
};
export default DataCheckScreen;
