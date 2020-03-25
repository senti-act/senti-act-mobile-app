import * as React from 'react';
import { Text, View, TouchableOpacity, Image, TextInput } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';


class ReportScreen extends React.Component {
    componentDidMount() { }

    constructor(props) {
        super();
    }

    render() {
        const { navigation } = this.props;
        return (
            <ScrollView>
                <View style={{ alignItems: "center", height: '80%', padding: 20 }}>
                    <View style={{ width: '100%', borderRadius: 10, height: '20%', marginVertical: 15 }}>
                        <View style={{ alignSelf: 'center' }}>
                        </View>

                        <LinearGradient colors={['#a6d8d5', '#71c6c0', '#38b0a4']}
                            style={{
                                width: '100%',
                                borderRadius: 10,
                                height: '95%'
                            }} />
                        <View style={{ width: '105%', position: "absolute" }}>
                            <Image source={require('../../Assets/start/womanquestionares.png')} style={{ width: '50%', height: 98, alignSelf: 'flex-end' }}></Image>
                        </View>
                    </View>
                    <View style={styles.contentContainer}>
                        <Text style={styles.title3}>Don't worry, you can try again or submit a query so we can help you resolve the issue.</Text>
                        <Text style={styles.title}>Fill in the fields below to create a query</Text>

                        <View style={{ flexDirection: 'row' }}>
                            <TextInput style={styles.textInputTop}>
                                Email
                            </TextInput>
                        </View>

                        <View style={{ flexDirection: 'row', alignSelf: 'center', height: "40%" }}>
                            <TextInput style={styles.textInputBottom}>
                                Message
                            </TextInput>
                        </View>
                        <View style={{ width: '95 %', alignSelf: 'center', justifyContent: 'center' }}>
                            <Text style={styles.title2}>You will receive an email with the answer to your inquiry as soon as possible</Text>
                        </View>
                        <View style={{}}>
                            <TouchableOpacity style={styles.buttonStyle}
                                onPress={() => navigation.navigate('GuideScreen')}>
                                <Text style={{ alignSelf: 'center', color: 'white', fontSize: 14 }}>Send</Text>
                            </TouchableOpacity>
                        </View >
                    </View>
                </View>
            </ScrollView>

        )
    }
}

const styles = {
    buttonStyle: {
        backgroundColor: '#FA821B',
        borderRadius: 10,
        padding: 10,
        width: '33%',
        justifyContent: 'center',
        alignSelf: 'center',
        marginVertical: 15,
    },

    title: {
        fontSize: 15,
        color: '#49717D',
        justifyContent: 'center',
        padding: 5,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 15,
    },
    title2: {
        fontSize: 14,
        color: '#49717D',
        justifyContent: 'center',
        textAlign: 'center',
    },
    title3: {
        fontSize: 16,
        color: '#49717D',
        justifyContent: 'center',
        textAlign: 'center',
        paddingVertical: 15,
    },
    logo: {
        width: 150,
        height: 45,
        alignSelf: "center",
        marginBottom: 15
    },
    picture: {
        width: '65%',
        height: '51%',
        alignSelf: "center",
    },
    textInputTop: {
        backgroundColor: 'white',
        height: '80%',
        borderColor: '#366270',
        borderWidth: 1,
        borderRadius: 7,
        width: '100%',
        padding: 10,
    },
    textInputBottom: {
        backgroundColor: 'white',
        marginVertical: 15,
        borderColor: '#366270',
        borderWidth: 1,
        borderRadius: 7,
        width: '100%',
        padding: 10,
    },
    contentContainer: {
        backgroundColor: 'white',
        paddingHorizontal: 20,
        height: '100%',
        borderRadius: 10,
        marginBottom: 250,
    },
};

export default ReportScreen;
