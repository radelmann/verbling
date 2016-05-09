import { expect } from '../util';  
import modalReducer from '../../src/reducers/modal';
import { SHOW_MODAL, HIDE_MODAL } from '../../src/actions/types';

describe('Modal Reducer', () => {
  it('handles action with unknown type', () => {
    expect(modalReducer(undefined, {})).to.eql(false);
  });


  it('handles action of type SHOW_MODAL', () => {
    const action = {type: SHOW_MODAL};
    expect(modalReducer(false, action)).to.eql(true);                              
  });

  it('handles action of type HIDE_MODAL', () => {
    const action = {type: HIDE_MODAL};
    expect(modalReducer(true, action)).to.eql(false);                              
  });
});