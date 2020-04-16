import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
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
    womanlaundry: {
        width: '60%',
        height: '50%',
    },
    girlphonebackground: {
        width: '65%',
        height: '45%',
    },
    girlplantbackground: {
        width: '69%',
        height: '37%',
    },
    completebackground: {
        width: '53%',
        height: '55%',
    },
    title: {
        color: '#174A5A',
        fontSize: 19,
        fontWeight: 'bold',
    },
    text: {
        color: '#2C5B69',
        justifyContent: 'center'
    },
    dot: {
        backgroundColor: '#19485A',
    },
});

const slides = [

    {
        key: 'firstslide',
        title: 'How to play',
        text: 'You play with your real data\n based on how you use it\n water at home.',
        backgroundColor: '#59b2ab',
        image: require('../../Assets/start/womanlaundry.png'),
        imageStyle: (styles.womanlaundry),
        titleStyle: (styles.title),
        backgroundColor: 'white',
        textStyle: (styles.text),
    },
    {
        key: 'secondslide',
        title: 'Get an overview',
        text: 'Through Sentiact. you gain access\n to your data that will give you an\n overview of how much you can\n save.',
        backgroundColor: '#febe29',
        image: require('../../Assets/start/girlphonebackground.png'),
        imageStyle: (styles.girlphonebackground),
        titleStyle: (styles.title),
        backgroundColor: 'white',
        textStyle: (styles.text),
    },
    {
        key: 'thirdslide',
        title: 'Become more sustainable',
        text: 'Through tips and advices you\n can find in the app, you can\n become smarter and better at\n reducing your water usage.',
        backgroundColor: '#22bcb5',
        image: require('../../Assets/start/girlplantbackground.png'),
        imageStyle: (styles.girlplantbackground),
        titleStyle: (styles.title),
        backgroundColor: 'white',
        textStyle: (styles.text),
    },
    {
        key: 'forthslide',
        title: 'Be awarded for your efforts',
        text: 'By reducing your consumption\n you have the opportunity to earn\n points and be rewarded with\n badges and prizes.',
        backgroundColor: '#22bcb5',
        image: require('../../Assets/start/completebackground.png'),
        imageStyle: (styles.completebackground),
        titleStyle: (styles.title),
        backgroundColor: 'white',
        textStyle: (styles.text),
    }
];

export default class GuideScreen extends React.Component {
    constructor(props) {
        super();
    }
    render() {
        const { navigation } = this.props;
        return (
            <AppIntroSlider
                slides={slides}
                showSkipButton={true}
                showNextButton={false}
                onDone={() => navigation.navigate('WelcomeScreen')}
                onSkip={() => navigation.navigate('WelcomeScreen')}
                activeDotStyle={styles.dot}
                buttonTextStyle={styles.text}
            />
        );
    }
}
