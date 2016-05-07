import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import CommentReducer from './comment_reducer';
import ModalReducer from './modal_reducer';
import DisplayReducer from './display_reducer';

const rootReducer = combineReducers({
  form,
  comments: CommentReducer,
  modal: ModalReducer,
  display: DisplayReducer
});

export default rootReducer;