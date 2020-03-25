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
  Ellipse,
  Rect,
} from 'react-native-svg';

class InstructionsScreen extends React.Component {
  componentDidMount() {}
  constructor(props) {
    super();
  }
  render() {
    const {navigation} = this.props;
    return (
      <View style={{backgroundColor: 'white'}}>
        <Svg height="100%" width="100%" viewBox="0 3 100 100">
          <Text fill="#174a5a" fontSize="4">
            <TSpan x="43" y="14">
              You get an overview of
            </TSpan>
            <TSpan x="43" dy="5">
              your water consumption
            </TSpan>
            <TSpan x="43" y="42">
              Find great tips and advice
            </TSpan>
            <TSpan x="43" dy="5">
              on how to save water
            </TSpan>
            <TSpan x="43" dy="5">
              in your home
            </TSpan>
            <TSpan x="43" y="74">
              Play against other and win
            </TSpan>
            <TSpan x="43" dy="5">
              prizes, points and badges
            </TSpan>
          </Text>
          <Line
            x1="25"
            y1="-2"
            x2="25"
            y2="92"
            stroke="#174a5a"
            strokeWidth="0.2"
          />
          <Circle cx="25" cy="-3" r="1.5" fill="#174a5a" />
          <Circle cx="25" cy="93" r="1.5" fill="#174a5a" />
          <Defs>
            <LinearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
              <Stop offset="0" stopColor="#f2f2f2" stopOpacity="1" />
              <Stop offset="1" stopColor="#A8D8E7" stopOpacity="1" />
            </LinearGradient>
          </Defs>
          <Circle cx="25" cy="15" r="12" fill="url(#grad)" />
          <Image
            x="18.5%"
            y="6%"
            height="13%"
            width="13%"
            href={require('../../Assets/start/drop.png')}
          />
          <Circle cx="25" cy="45" r="12" fill="url(#grad)" />
          <Image
            x="18.5%"
            y="31%"
            height="13%"
            width="13%"
            href={require('../../Assets/start/light.png')}
          />
          <Circle cx="25" cy="75" r="12" fill="url(#grad)" />
          <Image
            x="18.5%"
            y="56%"
            height="13%"
            width="13%"
            href={require('../../Assets/start/trophy.png')}
          />
          <Rect
            x="27"
            y="99"
            rx="4"
            ry="4"
            width="50"
            height="13"
            fill="#FA821B"
            onPress={() => navigation.navigate('DataSyncScreen')}
          />
          <Text fill="white" fontSize="5" fontWeight="normal" x="30.7" y="107">
            {' '}
            Create an account
          </Text>
        </Svg>
      </View>
    );
  }
}

export default InstructionsScreen;
