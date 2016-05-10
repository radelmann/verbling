import * as types from '../actions/types';
import { createReducer } from './utils';

const setAll = (collection, props) =>
  collection.map( item => {
    return { ...item, ...props};
  });

const insert = (collection, item, newProps) =>
  [ {...item, ...newProps}, ...collection];

const toggle = (collection, prop, where) =>
  collection.map(item => {
    if (where) {
      if (item._id === where["_id"]) {
        item[prop] = !item[prop];  
      }
    } else {
      item[prop] = !item[prop];
    }
    return item;
  });

export default function(state = [], action) {
  const handlers = {
    [types.FETCH_COMMENTS]: () => setAll(action.payload, {"minimized": false}),
    [types.POST_COMMENT]: () => insert(state, action.payload, {"minimized": false}),
    [types.SHOW_ALL]: () => setAll(state, {"minimized": false}),
    [types.MINIMIZE_ALL]: () => setAll(state, {"minimized": true}),   
    [types.TOGGLE_ALL]: () => toggle(state, "minimized"),
    [types.TOGGLE_COMMENT]: () => toggle(state, "minimized", action.payload)   
  }
  
  return createReducer(state, action, handlers);
}