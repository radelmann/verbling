import { SHOW_MODAL, HIDE_MODAL } from '../actions/types';
import { createReducer } from './utils';

export default function(state = false, action) {
  const handlers = {
    [SHOW_MODAL]: () => true,
    [HIDE_MODAL]: () => false
  }
  
  return createReducer(state, action, handlers);
}