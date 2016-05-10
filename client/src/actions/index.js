import axios from 'axios';
import * as types from '../../src/actions/types';
import { reset } from 'redux-form';

const ROOT_URL = 'http://localhost:3000';

export function fetchComments() {
  return function(dispatch) { 
    return axios.get(`${ROOT_URL}/comment`)
    .then(response => {
      dispatch({
        type: types.FETCH_COMMENTS,
        payload: response.data.data
      });
    });
  }
}

export function postComment({ title, message }) {
  return function(dispatch) {
    return axios.post(`${ROOT_URL}/comment`,{ title, message })
    .then(response => {
      dispatch({
        type: types.POST_COMMENT,
        payload: response.data
      });
    });
  }
}

export function showModal() {
  return {
    type: types.SHOW_MODAL
  }
}

export function hideModal() {
  return {
    type: types.HIDE_MODAL
  }
}

export function resetForm(formName) {
  return function(dispatch) { 
    dispatch(reset(formName));  
  }
}

export function showAll() {
  return {
    type: types.SHOW_ALL
  }
}

export function minimizeAll() {
  return {
    type: types.MINIMIZE_ALL
  }
}

export function toggleAll() {
  return {
    type: types.TOGGLE_ALL
  }
}

export function toggleComment(payload) {
  return {
    type: types.TOGGLE_COMMENT,
    payload
  }
}

export function setSearchTerm(payload) {
  return {
    type: types.SET_SEARCH_TERM,
    payload
  };
}

export function clearSearchTerm() {
  return {
    type: types.CLEAR_SEARCH_TERM
  };
}