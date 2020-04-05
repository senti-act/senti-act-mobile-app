import * as React from 'react';
import {
    Text,
    View,
    ScrollView,
    SafeAreaView,
    TouchableOpacity,
    ActivityIndicator,
    FlatList
} from 'react-native';


class ApiTestClass extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            isLoading: true
        };
    }

    componentDidMount() {
        fetch('http://10.0.2.2:4000/api/users')
            .then((response) => response.json())
            .then((json) => {
                this.setState({ data: json.users });
            })
            .catch((error) => console.error(error))
            .finally(() => {
                this.setState({ isLoading: false });
            });
    }


    render() {
        const { data, isLoading } = this.state;
        return (
            <SafeAreaView style={{ height: '100%', width: '100%' }}>
                <View style={{ flex: 1, padding: 24 }}>
                    {isLoading ? <ActivityIndicator /> : (
                        <FlatList
                            data={data}
                            keyExtractor={({ id }, index) => id}
                            renderItem={({ item }) => (
                                <Text>{item.id}, {item.xp}</Text>
                            )}
                        />
                    )}
                </View>
            </SafeAreaView>
        );
    }
}



const styles = {
    box: {
        height: 70,
        flexDirection: 'column',
        borderBottomWidth: 1,
        borderBottomColor: 'lightgray',
    },
    firstRowText: {
        width: '100%',
        fontWeight: '700',
        height: '40%',
        paddingLeft: 30,
        paddingTop: 10,
        color: '#174A5A',
    },
    secondRowText: {
        width: '100%',
        height: '60%',
        paddingLeft: 30,
        color: '#174A5A',
    },
};

export default ApiTestClass;