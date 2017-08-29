import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center'
    }
});

const LoadError = () => (
    <View style={styles.container}>
        <Text> Sorry Something went wrong... </Text>
    </View>
);

export default LoadError;