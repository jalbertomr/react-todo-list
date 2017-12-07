import logger from 'redux-logger';
import { applyMiddleware, compose, createStore } from 'redux';
import reducer from './reducer';

let finalCreateStore = compose(applyMiddleware(logger))(createStore);

// configureStore(initialState){
//     initialState = initialState || { todos: [] }
// }

/*
function logger({ getState }) {
    return next => action => {
        console.log('siguiente dispatch', action);

        let returnValue = next(action);

        console.log('state despues de dispatch', getState());

        return returnValue;
    };
}
*/

/*let miStore = createStore(reducer,
                       { ' todos: []' },
                       applyMiddleware(logger));

miStore.dispatch({
    type: 'ADD_TODO',
    text: 'Undestanding the middleware'
});
*/

export default function configureStore(initialState = { todos: [] }) {
    return finalCreateStore(reducer, initialState);
}

