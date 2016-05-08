import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import CommentReducer from './comments';
import ModalReducer from './modal';
import SearchTermReducer from './search_term';

const rootReducer = combineReducers({
  form,
  comments: CommentReducer,
  modal: ModalReducer,
  searchTerm: SearchTermReducer
});

export default rootReducer;