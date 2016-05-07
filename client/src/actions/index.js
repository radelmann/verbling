import { SHOW_ALL, MINIMIZE_ALL, TOGGLE_ALL, POST_COMMENT, SHOW_MODAL, HIDE_MODAL } from './types';
import { reset } from 'redux-form';

export function postComment(comment) {
  return {
    type: POST_COMMENT,
    payload: comment
  };
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