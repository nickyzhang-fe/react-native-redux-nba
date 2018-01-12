/**
 * Created by Cral-Gates on 2018/1/12.
 */
import React, {Component} from 'react';
import configureStore from './store/ConfigStore';
import App from './App';
import {Provider} from 'react-redux';

const store = configureStore();

class root extends Component{
    render(){
        return(
            <Provider store={store}>
                <App/>
            </Provider>
        )
    }
}

export default root;