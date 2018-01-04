/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry
} from 'react-native';
import App from './app/App';
import configureStore from './app/store/ConfigStore';
import {Provider} from "react-redux";

const store = configureStore();

export default class NBAPlayer extends Component {
    render() {
        return (
            <Provider store={store}>
                <App/>
            </Provider>
        );
    }
}

AppRegistry.registerComponent('NBAPlayer', () => NBAPlayer);
