import * as React from 'react';
import { Text, View, ScrollView, Dimensions, StyleSheet, FlatList, Image, SafeAreaView } from 'react-native';
const { height, width } = Dimensions.get('window')


import badning from '../Assets/tips/badning.png'
import opvask from '../Assets/tips/opvask.png'
import splidevand from '../Assets/tips/splidevand.png'
import toilet from '../Assets/tips/toilet.png'
import tojvask from '../Assets/tips/tojvask.png'
import vandhanen from '../Assets/tips/vandhanen.png'
import jebani from '../Assets/tips/jebani.png'

class TipsScreen extends React.Component {

    constructor() {
        super();
        this.state = {
            dataSource: [
                { id: 1, img: tojvask, title: 'Tøjvask' },
                { id: 2, img: badning, title: 'Badning' },
                { id: 3, img: toilet, title: 'Toiletskylning' },
                { id: 4, img: opvask, title: 'Opvasken' },
                { id: 5, img: vandhanen, title: 'Brug af vandhanen' },
                { id: 6, img: splidevand, title: 'Brug dit spildevand' }],
        };
    }
    componentDidMount() { }

    render() {
        return (
            <>
                <View style={styles.MainContainer}>
                    <ScrollView >
                        <View style={{ flex: 1, margin: 10, marginTop: 40 }}>
                            <View style={{ flex: 1, flexDirection: 'row', width: "100%", height: 150, backgroundColor: '#BBD7E9', alignSelf: 'center', borderRadius: 15 }}>
                                <View style={{ flex: 1, borderRadius: 15, alignItems: 'center', justifyContent: 'center' }}>
                                    <Text style={{ fontSize: 18, color: '#174a5a' }}>Sådan kan du spare vand i hjemmet</Text>
                                </View>
                                <View style={{ flex: 1, borderRadius: 15, alignItems: 'center', justifyContent: 'flex-end' }}>
                                    <Image style={{ width: width / 2, height: width / 2 }} source={jebani} />
                                </View>
                            </View>
                        </View>
                        <View style={{ flex: 3 }}>
                            <FlatList
                                data={this.state.dataSource}
                                paddingHorizontal={10}
                                scrollEnabled={false}
                                renderItem={({ item }) => (
                                    <View style={{ flex: 1, height: width / 2, flexDirection: 'column', padding: 5, }}>
                                        <View style={styles.imageThumbnail}>
                                            <Image style={{ width: width / 3, height: width / 3, }} resizeMode="contain" source={item.img} />
                                            <Text style={{ color: '#174a5a' }}>{item.title}</Text>
                                        </View>
                                    </View>
                                )}
                                //Setting the number of column
                                numColumns={2}
                                keyExtractor={(item, index) => index}
                            />
                        </View>
                    </ScrollView>
                </View>
            </>
        );
    }
}

const styles = StyleSheet.create({
    MainContainer: {
        justifyContent: 'center',
        flex: 1,
    },

    imageThumbnail: {
        backgroundColor: 'white',
        height: "100%",
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
});


export default TipsScreen;