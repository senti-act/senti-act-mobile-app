import * as React from 'react';
import {Text, View, ScrollView, SafeAreaView} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {AccordionList} from 'accordion-collapse-react-native';

class Accordion extends React.Component {
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
    return (
      <AccordionList
        list={this.props.list}
        header={this._head}
        body={this._body}
      />
    );
  }
}
export default Accordion;

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
    paddingBottom: 10,
  },
  header: {
    fontSize: 16,
    fontWeight: 'normal',
    color: '#174A5A',
    paddingRight: 30,
    paddingLeft: 30,
  },
};
