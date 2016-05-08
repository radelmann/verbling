import { FETCH_COMMENTS, POST_COMMENT, SHOW_ALL, MINIMIZE_ALL, TOGGLE_ALL, TOGGLE_COMMENT } from '../actions/types';

export default function(state = [], action) {
  switch(action.type) {
     case FETCH_COMMENTS:
      //get all comments, initialize minimized property
      return action.payload.map(comment => {
        comment.minimized=false; 
        return comment;
      });
    case POST_COMMENT:
      //add minimized property,initialize to false
      action.payload.minimized = false;
      return [ action.payload, ...state];
    case SHOW_ALL:
      return state.map(comment => {
        comment.minimized=false; 
        return comment;
      });
    case MINIMIZE_ALL:
      return state.map(comment => {
        comment.minimized=true; 
        return comment;
      });
    case TOGGLE_ALL:
      return state.map(comment => {
        comment.minimized = !comment.minimized; 
        return comment;
      });
    case TOGGLE_COMMENT:
      return state.map(comment => {
        if (comment._id === action.payload.id) {
          comment.minimized = !comment.minimized; 
        }
        return comment;
      });
    default:
      return state;
  }
}