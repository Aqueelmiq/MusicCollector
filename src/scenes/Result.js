import React from 'react';
import {View, Text} from 'react-native';

import styles from '../styles/baseContainer';

export default class Result extends React.Component {
    render () {
        return (
            <View style={styles.container}>
                <HomeContainer/>
            </View>
        );
    }
};