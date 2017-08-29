import { CollectionActions } from '../actions/actions';

const initialState = {
    songs: []
}

export default CollectionReducer = (state = initialState, action) => {
    switch (action.type) {
        case CollectionActions.GET_ALL_SONGS:
            return state;
        case CollectionActions.ADD_SONG:
            return {...state, songs: [action.song, ...state.songs]};
        case CollectionActions.REMOVE_SONG:
            return {...state, songs: [...state.songs.filter(song => song !== action.song)]};
        default:
            return state;
    }
}