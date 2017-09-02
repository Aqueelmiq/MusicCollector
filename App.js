import React from 'react';
import {Provider} from 'react-redux';

import configureStore from './src/stores/MainStore';
let store = configureStore({})

import IndexApp from "./src/index";

const App = () => (
    <Provider store={store}>
        <IndexApp/>
    </Provider>
);

export default App
