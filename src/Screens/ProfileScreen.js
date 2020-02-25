import * as React from 'react';
import {
    Text,
    View,
    StyleSheet,
    ScrollView,
    Image,
    SafeAreaView,
    TouchableOpacity
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';


class ProfileScreen extends React.Component {
    componentDidMount() { }

    render() {
        return (
            <SafeAreaView style={{ width: '100%', height: '100%' }}>
                <ScrollView
                    style={{ flex: 1 }}
                    contentContainerStyle={{ alignItems: 'center', width: '100%', height: '100%', flexDirection: 'column' }}>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 24 }}>Profile</Text>
                    </View>
                    <View style={{ flex: 3, padding: 20 }}>
                        <LinearGradient
                            colors={['#a6d8d5', '#71c6c0', '#38b0a4']}
                            style={{ width: '100%', height: '100%', borderRadius: 10, flexDirection: 'row' }}>
                            <View style={{ flex: 1, height: '100%', justifyContent: 'center' }}>
                                <Text style={{ fontSize: 24, alignSelf: 'center' }}>
                                    Good morning, Christian!
                  </Text>
                            </View>
                            <View style={{ flex: 1, height: '100%' }}>
                                <Image
                                    style={{ resizeMode: 'cover', width: '100%', height: '102%' }}
                                    source={require('../Assets/easy.png')}></Image>
                            </View>
                        </LinearGradient>
                    </View>
                    <View style={{ backgroundColor: 'white', width: '90%', borderRadius: 10, flexDirection: 'column' }}>
                        <TouchableOpacity style={styles.touchable}>
                            <Text style={{ width: '80%', marginLeft: 20, alignSelf: 'center' }}>Account setting</Text>
                            <Ionicons style={{ alignSelf: 'center' }} size={30} name={'ios-arrow-forward'} color="black" />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.touchable}>
                            <Text style={{ width: '80%', marginLeft: 20, alignSelf: 'center' }}>Notifications</Text>
                            <Ionicons style={{ alignSelf: 'center' }} size={30} name={'ios-arrow-forward'} color="black" />
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.touchable}>
                            <Text style={{ width: '80%', marginLeft: 20, alignSelf: 'center' }}>Privacy Policy</Text>
                            <Ionicons style={{ alignSelf: 'center' }} size={30} name={'ios-arrow-forward'} color="black" />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.touchable}>
                            <Text style={{ width: '80%', marginLeft: 20, alignSelf: 'center' }}>Support</Text>
                            <Ionicons style={{ alignSelf: 'center' }} size={30} name={'ios-arrow-forward'} color="black" />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.touchable}>
                            <Text style={{ width: '80%', marginLeft: 20, alignSelf: 'center' }}>Abour Senti.act</Text>
                            <Ionicons style={{ alignSelf: 'center' }} size={30} name={'ios-arrow-forward'} color="black" />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.touchable}>
                            <Text style={{ width: '80%', marginLeft: 20, alignSelf: 'center' }}>Create user in the household</Text>
                            <Ionicons style={{ alignSelf: 'center' }} size={30} name={'ios-arrow-forward'} color="black" />
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity style={[styles.touchable, { backgroundColor: 'white', borderRadius: 10, marginTop: 20, marginBottom: 20, width: '90%' }]}>
                        <Text style={{ width: '80%', paddingLeft: 20, alignSelf: 'center' }}>Log out</Text>
                        <AntDesign style={{ alignSelf: 'center', width: '20%', paddingLeft: 20 }} size={20} name={'poweroff'} color="black" />
                    </TouchableOpacity>
                </ScrollView>
            </SafeAreaView>
        );
    }
}

const styles = {
    touchable: {
        height: 70,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: 'lightgray'
    },

}

export default ProfileScreen;

