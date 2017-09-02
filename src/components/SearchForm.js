import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    searchBox: {
        flex: 4,
        backgroundColor: '#eee',
        borderRadius: 10,
        padding: 10
    },
    searchButton: {
        flex: 1
    }
});

const SearchForm = ({searchText, onChangeText, onSearch}) => (
    <View style={styles.container}>
        <TextInput style={styles.searchBox}
                   value={searchText}
                   onChangeText={onChangeText}/>
        <Button style={styles.searchButton}
                title="Search"
                onPress={() => onSearch(searchText)}/>
    </View>
);

export default SearchForm