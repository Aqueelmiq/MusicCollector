import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {CollectionActions} from '../actions/actions';

import SongList from "./SongList";


class HomeContainer extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let {collection} = this.props;
        return (
            <View style={styles.container}>
                <Text style={styles.header}> Your Songs! </Text>
                <SongList songs={collection.songs}/>
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
    header: {
        fontSize: 30,
        fontWeight: "300"
    },
    list: {
        flex: 20
    }
});

const mapStateToProps = (state) => ({
    collection: state.collection
});

const mapDispatchToProps = (dispatch) => ({
   Actions: bindActionCreators(CollectionActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);