import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
// import cheesesReducer from '../reducers/cheesesReducer';
import rootReducer from '../reducers'

const store = createStore(
    rootReducer,
  applyMiddleware(thunk)
);

export default store;