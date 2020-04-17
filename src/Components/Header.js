import React from 'react';
import {StyleSheet, Text, View, SafeAreaView, Platform} from 'react-native';
import DeviceInfo from 'react-native-device-info';

class Header extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.header}>
        <View style={{flex: 2, alignItems: 'center', justifyContent: 'center'}}>
          <Text style={styles.headerText}>{this.props.title}</Text>
        </View>
      </SafeAreaView>
    );
  }
}
export default Header;
const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: Platform.OS === 'android' ? 60 : DeviceInfo.hasNotch() ? 100 : 70,
    //StatusBar.currentHeight='120%'
    backgroundColor: '#EEF3F7',
    alignItems: 'center',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 22,
    color: '#174A5A',
    letterSpacing: 1,
  },
});
