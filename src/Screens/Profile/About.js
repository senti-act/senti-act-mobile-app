import * as React from 'react';
import {Text, View, ScrollView, SafeAreaView} from 'react-native';
import Accordion from '../../Components/Accordion'

class About extends React.Component {

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
            <Accordion list={this.state.list1}/>
          </View>
          <Text style={styles.title}> Senti.act on social media </Text>
          <View
            style={{
              backgroundColor: 'white',
              width: '90%',
              borderRadius: 10,
              flexDirection: 'column',
            }}>
            <Accordion list={this.state.list2}/>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = {
  title: {
    color: '#174A5A',
    fontSize: 18,
    paddingTop: 40,
    paddingBottom: 20,
    fontWeight: 'bold',
  },
};

export default About;
