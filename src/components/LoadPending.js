import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';


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

const LoadPending = () => (
    <View style={styles.container}>
        <ActivityIndicator/>
    </View>
);

export default LoadPending;