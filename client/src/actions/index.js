import { POST_COMMENT, SHOW_MODAL, HIDE_MODAL } from './types';
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