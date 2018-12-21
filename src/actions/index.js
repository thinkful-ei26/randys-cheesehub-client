import { API_BASE_URL } from "../config";

export const FETCH_CHEESES_SUCCESS = 'FETCH_DATA_SUCCESS'
export const fetchCheesesSuccess = (data) => {
  return {
    type: FETCH_CHEESES_SUCCESS,
    data
  }
}

export const FETCH_CHEESES_REQUEST = 'FETCH_CHEESES_REQUEST'
export const fetchCheesesRequest = (data) => {
  return {
    type: FETCH_CHEESES_REQUEST,
  }
}

export const FETCH_CHEESES_ERROR = 'FETCH_CHEESES_REQUEST'
export const fetchCheesesError = (error) => {
  return {
    type: FETCH_CHEESES_REQUEST,
    error
  }
}

export const fetchCheeses = () => dispatch => {
  fetch(`${API_BASE_URL}/api/cheeses`, {
    method: 'GET',
  })
  .then(res => (res.json()))
  .then(data => dispatch(fetchCheesesSuccess(data)))
  .then(data => console.log(data))
  .catch(error => error.log(error))
} 

