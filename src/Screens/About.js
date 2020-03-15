import * as React from 'react';
import { Text, View, ScrollView, SafeAreaView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import { AccordionList } from 'accordion-collapse-react-native';
// import { Separator } from 'native-base';

class About extends React.Component {
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
      list1: [
        {
          title: 'Homepages',
          body: 'HomepagesHomepagesHomepagesHomepagesHomepagesHomepages',
        },
        {
          title: 'Terms of use',
          body: 'Terms of useTerms of useTerms of useTerms of useTerms of use',
        },
      ],
      list2: [
        {
          title: 'Facebook',
          body: 'FacebookFacebookFacebookFacebookFacebookFacebook',
        },
        {
          title: 'Instagram',
          body: 'InstagramInstagramInstagramInstagramInstagram',
        },
        {
          title: 'Linkedin',
          body: 'LinkedinLinkedinLinkedinLinkedinLinkedinLinkedin',
        },
        {
          title: 'Twitter',
          body: 'TwitterTwitterTwitterTwitterTwitter',
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
              list={this.state.list1}
              header={this._head}
              body={this._body}
            />
          </View>
          <Text style={styles.title}> Senti.act on social media </Text>
          <View
            style={{
              backgroundColor: 'white',
              width: '90%',
              borderRadius: 10,
              flexDirection: 'column',
            }}>
            <AccordionList
              list={this.state.list2}
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
    paddingBottom: 10,
    paddingTop: 10,
    lineHeight: 24,
  },
  header: {
    fontSize: 16,
    fontWeight: 'normal',
    color: '#174A5A',
    paddingRight: 30,
    paddingLeft: 30,
  },
  title: {
    //fontWeight: 700,
    color: '#174A5A',
    fontSize: 18,
    paddingTop: 40,
    paddingBottom: 20,
    fontWeight: 'bold',
  },
};
export default About;
