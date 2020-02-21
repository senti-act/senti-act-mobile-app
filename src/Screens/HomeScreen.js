import * as React from 'react';
import { Text, View, Button } from 'react-native';

class HomeScreen extends React.Component {

    constructor(){
        super();
        this.state = {
            value:0
        }
    }

    componentDidMount() {
        alert("asdasdas")
    }

    changeCalue=(g)=>{
        this.setState({value:g});
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>{this.state.value}</Text>
                <Button onPress={()=>this.changeCalue(2)} title="gaston" ></Button>
            </View>
        );
    }
}

export default HomeScreen;