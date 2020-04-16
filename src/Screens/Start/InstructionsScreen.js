import * as React from 'react';
import {View, TouchableOpacity, Dimensions} from 'react-native';
import Svg, {
  Circle,
  Line,
  Image,
  Defs,
  LinearGradient,
  Stop,
  Text,
  TSpan,
  Rect,
} from 'react-native-svg';

class InstructionsScreen extends React.Component {
  render() {
    const {navigation} = this.props;
    return (
      <View style={{backgroundColor: '#EEF3F7'}}>
        <Svg height="100%" width="100%" viewBox="00 0 100 100">
          <Text fill="#174a5a" fontSize="4">
            <TSpan x="43" y="19">
              You get an overview of
            </TSpan>
            <TSpan x="43" dy="5">
              your water consumption
            </TSpan>
            <TSpan x="43" y="47">
              Find great tips and
            </TSpan>
            <TSpan x="43" dy="5">
              advice on how to save
            </TSpan>
            <TSpan x="43" dy="5">
              water in your home
            </TSpan>
            <TSpan x="43" y="79">
              Play against others and win
            </TSpan>
            <TSpan x="43" dy="5">
              prizes, points and badges
            </TSpan>
          </Text>
          <Line
            x1="25"
            y1="3"
            x2="25"
            y2="97"
            stroke="#174a5a"
            strokeWidth="0.2"
          />
          <Circle cx="25" cy="2" r="1.5" fill="#174a5a" />
          <Circle cx="25" cy="97" r="1.5" fill="#174a5a" />
          <Defs>
            <LinearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
              <Stop offset="0" stopColor="#f2f2f2" stopOpacity="1" />
              <Stop offset="1" stopColor="#A8D8E7" stopOpacity="1" />
            </LinearGradient>
          </Defs>
          <Circle cx="25" cy="20" r="12" fill="url(#grad)" />
          <Image
            x="19.8"
            y="12"
            height="10%"
            width="10%"
            href={require('../../Assets/start/drop.png')}
          />
          <Circle cx="25" cy="50" r="12" fill="url(#grad)" />
          <Image
            x="19.8"
            y="43"
            height="10%"
            width="10%"
            href={require('../../Assets/start/light.png')}
          />
          <Circle cx="25" cy="80" r="12" fill="url(#grad)" />
          <Image
            x="18.8"
            y="71"
            height="12%"
            width="12%"
            href={require('../../Assets/start/trophy.png')}
          />
          <Rect
            x="26"
            y="110"
            rx="4"
            ry="4"
            width="50"
            height="13"
            fill="#FA821B"
            onPress={() => navigation.navigate('DataSyncScreen')}
          />
          <Text
            fill="white"
            fontSize="5"
            fontWeight="normal"
            x="29.7"
            y="118.5">
            {' '}
            Create an account
          </Text>
        </Svg>
      </View>
    );
  }
}

export default InstructionsScreen;
