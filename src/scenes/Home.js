import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import styles from '../styles/baseContainer';

import HomeContainer from "../containers/HomeContainer";

export default class Home extends React.Component {
    render () {
        return (
            <View style={styles.container}>
                <HomeContainer/>
            </View>
        );
    }
};

