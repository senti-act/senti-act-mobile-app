import * as React from 'react';
import { Text, View, ScrollView, SafeAreaView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { AccordionList } from 'accordion-collapse-react-native';

class FAQ extends React.Component {
  componentDidMount() { }

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
          title: 'Membership terms',
          body: 'Terms for the membership',
        },
        {
          title: 'Is it safe to give my address?',
          body: 'Yes, but actually no',
        },
        {
          title: 'Where do you store my data?',
          body: 'In our secret bunker',
        },
        {
          title: 'Can I use my app anywhere?',
          body: 'You can certainly try',
        },
        {
          title: 'How long is my data stored?',
          body: 'Loooooooooooooooooong',
        },
        {
          title: 'Contact us',
          body: 'Leave a message after the tone. Booop.',
        },
      ],
    };
    return (
      <SafeAreaView style={{ height: '100%', width: '100%' }}>
        <ScrollView
          style={{ flex: 1 }}
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
export default FAQ;
