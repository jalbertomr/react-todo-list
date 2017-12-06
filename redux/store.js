import { createStore } from 'redux';
import reducer from './reducer';

// TODO: add middleware

// configureStore(initialState){
//     initialState = initialState || { todos: [] }
// }

export default function configureStore(initialState = { todos: [] }) {
    return createStore(reducer, initialState);
}

