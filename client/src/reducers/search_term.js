import { SET_SEARCH_TERM, CLEAR_SEARCH_TERM } from '../actions/types';
import { createReducer } from './utils';

export default function(state = '', action) {
  const handlers = {
    [SET_SEARCH_TERM]: () => action.payload.searchTerm,
    [CLEAR_SEARCH_TERM]: () => ''
  }
  
  return createReducer(state, action, handlers);
}