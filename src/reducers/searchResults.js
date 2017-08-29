import { SearchActions } from '../actions/actions';

const initialState = {
    songs: [],
    searchText: 'Search..',
    error: false,
    loading: false
}

export default SearchReducer = (state = initialState, action) => {
    switch (action.type) {
        case SearchActions.FETCH_SONGS_REQUEST:
            return {...state, error: false, loading: true};
        case SearchActions.FETCH_SONGS_SUCCESS:
            return {...state, songs: action.data, error: false, loading: false};
        case SearchActions.FETCH_SONGS_FAILURE:
            return {...state, songs: [], error: true, loading: false};
        case SearchActions.SET_SEARCH_TEXT:
            return {...state, searchText: action.searchText};
        default:
            return state;
    }
}