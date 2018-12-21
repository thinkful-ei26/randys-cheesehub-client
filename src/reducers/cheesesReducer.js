import {FETCH_CHEESES_SUCCESS, FETCH_CHEESES_REQUEST, FETCH_CHEESES_ERROR} from '../actions/index'

const initialState = {
  cheeses: [],
  loading: false,
  error: null
}

const cheesesReducer = (state=initialState, action) => {
  if (action.type === FETCH_CHEESES_REQUEST) {
    return Object.assign({}, state, {
      loading: true,
    })
  } else if (action.type === FETCH_CHEESES_ERROR) {
    return Object.assign({}, state, {
      loading: false,
      error: action.error
    })
  } else if (action.type === FETCH_CHEESES_SUCCESS) {
    return Object.assign({}, state, {
      cheeses: action.data,
      loading: false,
      error: null
    })
  }
  return state
}

export default cheesesReducer