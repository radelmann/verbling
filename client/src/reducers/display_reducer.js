import { SHOW_ALL, MINIMIZE_ALL, TOGGLE_ALL } from '../actions/types';

export default function(state = SHOW_ALL, action) {
  switch(action.type) {
    case SHOW_ALL:
      return SHOW_ALL;
    case MINIMIZE_ALL:
      return MINIMIZE_ALL;
    case TOGGLE_ALL:
      return TOGGLE_ALL;
    default:
      return state;
  }
}