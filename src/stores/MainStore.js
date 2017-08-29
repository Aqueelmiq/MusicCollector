import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers/reducer';

import { createEpicMiddleware } from 'redux-observable';
import { songCollectionEpic } from '../reducers/reducer';

const epicMiddleware = createEpicMiddleware(songCollectionEpic);
const logger = createLogger();

export default configureStore = (initialState) =>
    createStore(
        rootReducer,
        initialState,
        applyMiddleware(epicMiddleware, logger)
    );

