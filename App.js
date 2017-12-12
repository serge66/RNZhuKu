/*
    by seleyn 2017.09.07
    app 入口
*/


import React, {Component} from 'react';
import Root from './src/views/main/Root';
import './src/utils/constants/Constants';
import {Provider} from 'react-redux';
import configureStore from './src/redux/stores/Stores';

const store = configureStore()

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Root/>
            </Provider>
        );
    }
}

export default App;