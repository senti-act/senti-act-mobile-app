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
            'Tbu',
        },
        {
          title: 'Which types of data do we collect?',
          body: "Tbu",
        },
        {
          title: 'How do we use this information?',
          body: "Tbu",
        },
        {
          title: 'How is the information shared?',
          body: 'tbu',
        },
        {
          title: 'How do I delete my data',
          body: "tbu",
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
