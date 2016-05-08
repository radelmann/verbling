import { SET_SEARCH_TERM } from '../actions/types';
import { createReducer } from './utils';

export default function(state = '', action) {
  const handlers = {
    [SET_SEARCH_TERM]: () => action.payload.searchTerm
  }
  
  return createReducer(state, action, handlers);
}