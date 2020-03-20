import * as React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

class GuideScreen extends React.Component {
    componentDidMount() { }

    constructor(props) {
        super();
    }

    render() {
        const { navigation } = this.props;
        return (
            <View style={{ flex: 2, flexDirection: 'row', alignItems: 'center', borderRadius: 10, padding: 10 }}>
                <TouchableOpacity style={styles.buttonStyle}
                    onPress={() => navigation.navigate('HomeScreen')}>
                    <Text>Skip</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = {
    buttonStyle: {
        backgroundColor: 'rgba(0,0,0,0)',
        marginRight: 5,
        borderRadius: 50,
        borderWidth: 2,
        width: '100%',
        justifyContent: 'center',
    },
};
export default GuideScreen;
