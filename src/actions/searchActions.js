import 'rxjs';
import {SpotifyAPISearch} from '../services/SpotifyAPIService';
import * as Observable from "rxjs/observable/fromPromise";
import "rxjs/add/operator/map";

//Actions on Song List
export const FETCH_SONGS_REQUEST = 'FETCH_SONGS_REQUEST';
export const FETCH_SONGS_SUCCESS = 'FETCH_SONGS_SUCCESS';
export const FETCH_SONGS_FAILURE = 'FETCH_SONGS_FAILURE';

//Actions on search text
export const SET_SEARCH_TEXT = 'SET_SEARCH_TEXT';

export const fetchSongsRequest = (searchText) => ({
    type: FETCH_SONGS_REQUEST,
    searchText: searchText,
});

export const fetchSongsSuccess = (data) => ({
    type: FETCH_SONGS_SUCCESS,
    data,
});

export const fetchSongsFailure = () => ({
    type: FETCH_SONGS_FAILURE,
});

export const fetchSongsEpic = (action$) =>
    action$.ofType(FETCH_SONGS_REQUEST)
        .mergeMap(action => Observable.fromPromise(SpotifyAPISearch(action.searchText, 'track', {limit: 10, market: 'US'}))
                .map(fetchSongsSuccess));

//Action creators for searh text
export const setSearchText = (searchText) => ({
    type: SET_SEARCH_TEXT,
    searchText,
});