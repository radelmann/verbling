export function createReducer(state, action, handlers) {
  if (handlers.hasOwnProperty(action.type)) {
    return handlers[action.type]();
  } else {
    return state;
  }
}