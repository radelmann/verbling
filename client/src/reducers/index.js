import { combineReducers } from 'redux';
import CommentReducer from './comment_reducer'

const rootReducer = combineReducers({
  comments: CommentReducer  
});

export default rootReducer;