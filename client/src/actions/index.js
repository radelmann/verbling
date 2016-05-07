import axios from 'axios';
import { SHOW_ALL, MINIMIZE_ALL, TOGGLE_ALL, TOGGLE_COMMENT, FETCH_COMMENTS, POST_COMMENT, SHOW_MODAL, HIDE_MODAL } from './types';
import { reset } from 'redux-form';

const ROOT_URL = 'http://localhost:3000';

export function fetchComments() {
  return function(dispatch) { 
    axios.get(`${ROOT_URL}/comment`)
    .then(response => {
      dispatch({
        type: FETCH_COMMENTS,
        payload: response.data.data
      });
    });
  }
}

export function postComment({ title, message }) {
  return function(dispatch) {
    axios.post(`${ROOT_URL}/comment`,{ title, message })
    .then(response => {
      dispatch({
        type: POST_COMMENT,
        payload: response.data
      });
    });
  }
}

export function showModal() {
  return {
    type: SHOW_MODAL
  }
}

export function hideModal() {
  return {
    type: HIDE_MODAL
  }
}

export function resetForm(formName) {
  return function(dispatch) { 
    dispatch(reset(formName));  
  }
}

export function showAll() {
  return {
    type: SHOW_ALL
  }
}

export function minimizeAll() {
  return {
    type: MINIMIZE_ALL
  }
}

export function toggleAll() {
  return {
    type: TOGGLE_ALL
  }
}

export function toggleComment(payload) {
  return {
    type: TOGGLE_COMMENT,
    payload: payload
  }
}