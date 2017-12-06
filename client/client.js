import { Provider } from 'react-redux';
import React from 'react';
import { render } from 'react-dom';
import App from '../components/App';
import configureStore from '../redux/store';

const initialState = {
    todos: [{
        id: 0,
        completed: false,
        text: 'texto inicial pendientes'
    }]
};

let store = configureStore(initialState);

// configure and create our store
// createStore(reducers, inintalState) // []

render(
    <Provider store={store}>
    <App />
    </Provider>,
	document.getElementById('app')
);

