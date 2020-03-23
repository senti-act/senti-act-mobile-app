import * as React from 'react';
import {Text, View, ScrollView, SafeAreaView} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {AccordionList} from 'accordion-collapse-react-native';

class LaundryScreen extends React.Component {
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
          title: 'Fill the washing machine',
          body: "Fill it 'till you can no more",
        },
        {
          title: 'Only wash dirty clothes',
          body:
            'Kinda self explanatory, why would you ever wash something clean',
        },
        {
          title: 'Dose correctly',
          body: 'Do not dose incorrectly',
        },
        {
          title: 'Avoid washing at high temperatures',
          body: 'Your clothes will catch on fire if you do',
        },
        {
          title: 'Wash the stain with your hand',
          body: "Do the machine's work yourself",
        },
        {
          title: 'Air purify the laundry outside and drop the laundry',
          body: 'I think this means just leave your stuff outside?',
        },
        {
          title: 'Use shorter washing mashine programs',
          body:
            "While you're at it, sign your machine up in a speed washing competition",
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
export default LaundryScreen;
