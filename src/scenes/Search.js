import React from 'react';
import {View, Text} from 'react-native';
import SearchContainer from "../containers/SearchContainer";

import styles from '../styles/baseContainer';

export default class Search extends React.Component {
    render () {
        return (
            <View style={styles.container}>
                <SearchContainer/>
            </View>
        );
    }
};