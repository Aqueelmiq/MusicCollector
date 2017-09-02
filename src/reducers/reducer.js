import { combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';

import SongCollection from './songCollection';
import SearchResults from './searchResults';
import AppLoading from './appLoadingReducer';

import { fetchSongsEpic } from "../actions/searchActions";
import {INITIALIZE_APP_SUCCESS, updateFirebaseEpic} from "../actions/firebaseActions";

export const songCollectionEpic = combineEpics(
    fetchSongsEpic,
    updateFirebaseEpic,
);

export const combinedReducer = combineReducers({
    collection: SongCollection,
    search: SearchResults,
    appLoaded: AppLoading,
});

const rootReducer = (state, action) => {
  switch(action.type) {
      case INITIALIZE_APP_SUCCESS:
          return {...state, ...action.state, appLoaded: {firebase: true}};
      default:
          return state;
  }
};

export const songCollectionApp = (state, action) => {
    const reducedState = combinedReducer(state, action);
    return rootReducer(reducedState, action);
}

export default songCollectionApp;
