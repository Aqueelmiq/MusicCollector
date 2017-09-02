import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {SearchActions} from '../actions/actions';
import SongList from "./SongList";
import SearchForm from '../components/SearchForm';
import LoadError from '../components/LoadError';
import LoadPending from '../components/LoadPending';

class SearchContainer extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let {Actions, search} = this.props;
        let {songs, searchText, error, loading} = search;
        console.log(searchText);

        let displayResults = (error) => (
            error ?
                (
                    <View style={styles.resultContainer}>
                        <LoadError/>
                    </View>
                )
                :
                (
                    <View style={styles.resultContainer}>
                        <SongList songs={songs}/>
                    </View>
                )
        );

        let loadResults = (loading, error) => (
            loading ? (<LoadPending/>) : displayResults(error)
        );

        return (
            <View style={styles.container}>
                <View style={styles.searchBar}>
                    <SearchForm searchText={searchText}
                                onChangeText={Actions.setSearchText}
                                onSearch={() => Actions.fetchSongsRequest(searchText)}/>
                </View>
                {loadResults(loading, error)}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 25,
        paddingHorizontal: 15,
        backgroundColor: '#fff'
    },
    resultContainer: {
        flex: 1,
        marginTop: 10
    },
    searchBar: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
});

const mapStateToProps = (state) => ({
    search: state.search
});

const mapDispatchToProps = (dispatch) => ({
    Actions: bindActionCreators(SearchActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);