import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import CommentReducer from './comment_reducer';
import ModalReducer from './modal_reducer';
import SearchTermReducer from './search_term';

const rootReducer = combineReducers({
  form,
  comments: CommentReducer,
  modal: ModalReducer,
  searchTerm: SearchTermReducer
});

export default rootReducer;