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
    // http://localhost:4000/api/users
    componentDidMount() {
        fetch('https://reactnative.dev/movies.json')
            .then((response) => response.json())
            .then((json) => {
                this.setState({ data: json.movies });
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
                                <Text>{item.title}, {item.releaseYear}</Text>
                            )}
                        />
                    )}
                </View>
            </SafeAreaView>
        );
    }
}




export default ApiTestClass;