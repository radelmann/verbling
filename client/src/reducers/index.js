import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import CommentReducer from './comment_reducer';
import ModalReducer from './modal_reducer';

const rootReducer = combineReducers({
  form,
  comments: CommentReducer,
  modal: ModalReducer
});

export default rootReducer;