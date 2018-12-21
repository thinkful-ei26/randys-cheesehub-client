import {combineReducers} from 'redux';
import cheesesReducer from './cheesesReducer';

const rootReducer = combineReducers({
  cheeses: cheesesReducer
})

export default rootReducer;