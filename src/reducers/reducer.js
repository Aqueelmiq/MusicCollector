import { combineReducers } from 'redux';
import SongCollection from './songCollection';
import SearchResults from './searchResults';
import { fetchSongsEpic } from "../actions/searchActions";

import { combineEpics } from 'redux-observable';

export const songCollectionEpic = combineEpics(
    fetchSongsEpic
);

export const songCollectionApp = combineReducers({
    collection: SongCollection,
    search: SearchResults
});

export default songCollectionApp;
