import React from 'react';
import { StyleSheet, View } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

const styles = StyleSheet.create({
    buttonCircle: {
        width: 40,
        height: 40,
        backgroundColor: 'rgba(0, 0, 0, .2)',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 20,
        height: 20,
    },
});

const slides = [
    {
        key: 'somethun',
        title: 'Be rewarded for your efforts',
        text: 'By reducing your consumption you have the opportunity to earnpoints and be rewarded with badges and prizes',
        backgroundColor: '#59b2ab',
    },
    {
        key: 'somethun-dos',
        title: 'Get an overview',
        text: 'Through Sentiact. you gain access to your data that will give you an overview of how much you can save.',
        backgroundColor: '#febe29',
    },
    {
        key: 'somethun1',
        title: 'Become more sustainable',
        text: 'Through tips and advices you can find in the app, you can become smarter and better at reducing your water usage.',
        backgroundColor: '#22bcb5',
    },
    {
        key: 'somethun1',
        title: 'Be awarded for your efforts',
        text: 'By reducing your consumption you have the opportunity to earn points and be rewarded with badges and prizes.',
        backgroundColor: '#22bcb5',
    }
];


export default class GuideScreen extends React.Component {

    constructor(props) {
        super()
    }
    render() {
        const { navigation } = this.props;
        return (
            <AppIntroSlider
                slides={slides}
                showSkipButton={true}
                showNextButton={false}
                onDone={() => navigation.navigate('HomeScreen')}
                onSkip={() => navigation.navigate('HomeScreen')}
            />
        );
    }
}