import * as React from 'react';
import {Text, View, ScrollView, SafeAreaView} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {AccordionList} from 'accordion-collapse-react-native';

class WaterWasteTipsScreen extends React.Component {
  componentDidMount() {}

  _body(item) {
    return (
      <View>
        <Text style={styles.text}>{item.body}</Text>
      </View>
    );
  }
  _head(item) {
    return (
      <View style={styles.box}>
        <Text style={styles.header}>{item.title}</Text>
        <Ionicons size={24} name={'ios-arrow-forward'} color="#174A5A" />
      </View>
    );
  }
  render() {
    this.state = {
      list: [
        {
          title: "Don't waste water ",
          body: 'And water will not be wasted',
        },
        {
          title: 'Instead of using more water',
          body: 'Use less water',
        },
        {
          title: 'When you are going to use water',
          body:
            'Think of the people you are indirectly killing with your actions',
        },
        {
          title: 'Ran out of ideas',
          body: "There's really not that much potential for this section",
        },
      ],
    };
    return (
      <SafeAreaView style={{height: '100%', width: '100%'}}>
        <ScrollView
          style={{flex: 1, marginTop: 10}}
          contentContainerStyle={{
            alignItems: 'center',
            flexDirection: 'column',
          }}>
          <View
            style={{
              backgroundColor: 'white',
              width: '90%',
              borderRadius: 10,
              flexDirection: 'column',
            }}>
            <AccordionList
              list={this.state.list}
              header={this._head}
              body={this._body}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = {
  box: {
    height: 60,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 30,
  },
  text: {
    fontSize: 15,
    fontWeight: 'normal',
    color: '#174A5A',
    textAlign: 'justify',
    paddingRight: 30,
    paddingLeft: 30,
    lineHeight: 24,
    paddingTop: 10,
  },
  header: {
    fontSize: 16,
    fontWeight: 'normal',
    color: '#174A5A',
    paddingRight: 30,
    paddingLeft: 30,
  },
};
export default WaterWasteTipsScreen;
