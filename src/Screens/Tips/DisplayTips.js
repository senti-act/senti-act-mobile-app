import * as React from 'react';
import {Text, View, ScrollView, SafeAreaView} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {AccordionList} from 'accordion-collapse-react-native';
import TipsService from '../../Networking/TipsService';

class LaundryScreen extends React.Component  {
  constructor(props) {
    super(props);
    this.state = {
      tips:[],
      id:-1,
      data:''
    };
  }
  
  getTips = async()=> {

    var id = await this.props.navigation.getParam('chuj', null)
    alert(id)

    await TipsService.GetTipsByCategoryId(id).then(x=>{
    this.setState({ tips : x})
        }).catch(err => {
    alert(JSON.stringify(err));
        });
  }
  
  async componentDidMount() {
    // var id = await this.props.navigation.getParam('chuj', null)
    // alert(id)
    this.getTips()
    //this.setState({ data: this.props.navigation.getParam('key', {}) })
  }

  _body(item) {
    return (
      <View>
        <Text style={styles.text}>{item.description}</Text>
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
              list={this.state.tips}
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
