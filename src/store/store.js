import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import cheesesReducer from '../reducers/cheesesReducer';

const store = createStore(
    combineReducers({
    cheeses: cheesesReducer
  }), 
  applyMiddleware(thunk)
);

export default store;