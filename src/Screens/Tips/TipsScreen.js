import React from 'react';
import {
  Text,
  View,
  ScrollView,
  Dimensions,
  StyleSheet,
  FlatList,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import badning from '../../Assets/tips/badning.png';
import opvask from '../../Assets/tips/opvask.png';
import splidevand from '../../Assets/tips/splidevand.png';
import toilet from '../../Assets/tips/toilet.png';
import tojvask from '../../Assets/tips/tojvask.png';
import vandhanen from '../../Assets/tips/vandhanen.png';
import jebani from '../../Assets/tips/jebani.png';

const {height, width} = Dimensions.get('window');

class TipsScreen extends React.Component {
  constructor(props) {
    super();
    this.state = {
      dataSource: [
        {id: 1, img: tojvask, title: 'Laundry'},
        {id: 2, img: badning, title: 'Bathing'},
        {id: 3, img: toilet, title: 'Flushing the toilet'},
        {id: 4, img: opvask, title: 'Washing dishes'},
        {id: 5, img: vandhanen, title: 'Using the faucet'},
        {id: 6, img: splidevand, title: 'Using your water waste'},
      ],
    };
  }

  componentDidMount() {}

  render() {
    return (
      <>
        <View style={styles.MainContainer}>
          <ScrollView>
            <View style={{flex: 1, margin: 20, marginTop: 40,}}>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  width: '100%',
                  height: 135,
                  backgroundColor: '#BBD7E9',
                  alignSelf: 'center',
                  borderRadius: 15,
                }}>
                <View
                  style={{
                    flex: 1,
                    borderRadius: 15,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{paddingLeft: 20, fontSize: 18, color: '#174a5a'}}>
                    Here's how you can save water at home
                  </Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    borderRadius: 15,
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                  }}>
                  <Image style={{width: 200, height: 170}} source={jebani} />
                </View>
              </View>
            </View>
            <View style={{flex: 3, marginBottom:20}}>
              <FlatList
                data={this.state.dataSource}
                paddingHorizontal={10}
                scrollEnabled={false}
                renderItem={({item}) => (
                  <TouchableOpacity
                    onPress={() =>
                      this.props.navigation.navigate('Display', {
                        key: item.id,
                        title: item.title,
                      })
                    }
                    style={{
                      flex: 1,
                      height: width / 2,
                      flexDirection: 'column',
                      padding: 5,
                    }}>
                    <View style={styles.imageThumbnail}>
                      <Image
                        style={{width: width / 3, height: width / 3}}
                        resizeMode="contain"
                        source={item.img}
                      />
                      <Text style={{color: '#174a5a'}}>{item.title}</Text>
                    </View>
                  </TouchableOpacity>
                )}
                //Setting the number of column
                numColumns={2}
                keyExtractor={(item, index) => index}
              />
            </View>
          </ScrollView>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: 'center',
    flex: 1,
  },

  imageThumbnail: {
    backgroundColor: 'white',
    height: '100%',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default TipsScreen;
