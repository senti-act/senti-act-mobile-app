import * as React from 'react';
import {View, ScrollView, SafeAreaView} from 'react-native';
import Accordion from '../../Components/Accordion'

class Privacy extends React.Component {

  render() {
    this.state = {
      list: [
        {
          title: 'Our data policy',
          body:
            'Data policies are norms regulating management and publication of research data. They range from recommendations to enforcements. There is much variation in their scope and content across countries and across disciplines in single countries. ',
        },
        {
          title: 'Which types of data do we collect?',
          body: "All data types are equally accepted, we don't discriminate",
        },
        {
          title: 'How do we use this information?',
          body: "For all kinds of weird stuff, you woulnd't want to know",
        },
        {
          title: 'How is the information shared?',
          body: 'internet',
        },
        {
          title: 'How do I delete my data',
          body: "can't",
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

export default Privacy;
