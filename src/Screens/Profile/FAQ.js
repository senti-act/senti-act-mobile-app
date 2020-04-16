import * as React from 'react';
import {View, ScrollView, SafeAreaView} from 'react-native';
import Accordion from '../../Components/Accordion'

class FAQ extends React.Component {

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
          body: 'Approximately 3',
        },
        {
          title: 'Contact us',
          body: 'Leave a message after the tone. Booop.',
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
            <Accordion list={this.state.list}/>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default FAQ;
