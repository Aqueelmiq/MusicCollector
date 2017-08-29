import React from 'react';
import { View, Button, ListView, StyleSheet } from 'react-native';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import { CollectionActions } from '../actions/actions';

import SongCard from '../components/SongCard';

class SongList extends React.Component {

    constructor(props) {
        super(props);
        const {songs} = this.props;
        this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: this.ds.cloneWithRows(songs)
        }
    }

    componentWillReceiveProps(newProps, newContext) {
        const {songs} = newProps;
        const dataSource = this.ds.cloneWithRows(songs);
        this.setState({dataSource})
    }

    isInCollection = (compare) => {
        const {collection} = this.props;
        const {songs} = collection;
        return songs.find((song) => song.name === compare.name) ? true : false;
    }

    render() {
        const {Actions} = this.props;
        return (
            <View style={styles.container}>
                <ListView
                    dataSource={this.state.dataSource}
                    removeClippedSubviews={false}
                    renderRow={(song, sec, row) =>
                        <SongCard song={song}
                                  btnTitle={this.isInCollection(song) ? 'Remove' : 'Add'}
                                  onBtnPress={() => this.isInCollection(song) ? Actions.removeSong(song) : Actions.addSong(song)}/>}
                />
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
});

const mapStateToProps = (state) => ({
    collection: state.collection
});

const mapDispatchToProps = (dispatch) => ({
    Actions: bindActionCreators(CollectionActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(SongList);