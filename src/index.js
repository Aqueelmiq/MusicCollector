import React from 'react'
import {Scene, Router, TabBar, Icon} from 'react-native-router-flux';
import { StyleSheet, Text, View } from 'react-native';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import {FirebaseActions} from './actions/actions';


/*
 * Containers (Views)
 */
import HomeScene from './scenes/Home';
import SearchScene from './scenes/Search';
import ResultScene from './scenes/Result';


/*
 * TabBar Icons Todo: add them
 */

const TabIcon = ({focused, title}) => (
    <Text style={{color: focused ? 'red' :'black'}}>{title}</Text>
);

class IndexApp extends React.Component {

    constructor(props) {
        super(props)
    }

    componentWillMount() {
    }

    render() {
        return (
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
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    Actions: bindActionCreators(FirebaseActions, dispatch)
});

export default connect(null, mapDispatchToProps)(IndexApp);