import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Provider} from 'react-redux';
import {Scene, Router, TabBar, Icon} from 'react-native-router-flux';

import configureStore from './src/stores/MainStore';

let store = configureStore({})

/*
 * Containers (Views)
 */
import HomeScene from './src/scenes/Home';
import SearchScene from './src/scenes/Search';
import ResultScene from './src/scenes/Result';

/*
 * TabBar Icons Todo: add them
 */

const TabIcon = ({focused, title}) => (
    <Text style={{color: focused ? 'red' :'black'}}>{title}</Text>
);

const App = () => {
    return(
        <Provider store={store}>
            <Router>
                <Scene key="MainNav" headerMode="none" tabs={true} tabBarStyle={{ backgroundColor: '#eee' }}>
                    <Scene key="home" title="Home" icon={TabIcon} initial={true}>
                        <Scene key="homeView" component={HomeScene} title="Home" />
                    </Scene>
                    <Scene key="search" title="Search" icon={TabIcon}>
                        <Scene key="searchView" component={SearchScene} initial={true} title="Search" />
                        <Scene key="resultView" component={ResultScene} title="Result" />
                    </Scene>
                </Scene>
            </Router>
        </Provider>
    )
}

export default App
