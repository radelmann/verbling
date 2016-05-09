import { expect } from '../test_helper';  
import commentReducer from '../../src/reducers/comments';
import { POST_COMMENT, FETCH_COMMENTS, SHOW_ALL, MINIMIZE_ALL, TOGGLE_ALL, TOGGLE_COMMENT } from '../../src/actions/types';

describe('Comments Reducer', () => {
  it('handles action with unknown type', () => {
    // expect(commentReducer()).to.be.instanceof(Array);
    expect(commentReducer(undefined, {})).to.eql([]);
  });

  it('handles action of type FETCH_COMMENTS', () => {
    const payload = [
      { '_id':1, 'title': 'title 1', 'message':'message 1'},
      { '_id':2, 'title': 'title 2', 'message':'message 2'}
    ];
    
    const expected_result = [
      { '_id':1, 'title': 'title 1', 'message':'message 1', 'minimized':false},
      { '_id':2, 'title': 'title 2', 'message':'message 2', 'minimized':false}
    ];
    
    const action = {type: FETCH_COMMENTS, payload: payload};
    expect(commentReducer([], action)).to.deep.eql(expected_result);                              
  });

  it('handles action of type POST_COMMENT', () => {
    const payload = { '_id':1, 'title': 'title 1', 'message':'message 1'};
    const expected_result = { '_id':1, 'title': 'title 1', 'message':'message 1', 'minimized': false};

    const action = {type: POST_COMMENT, payload: payload};
    expect(commentReducer([], action)).to.deep.eql([expected_result]);                              
  });

  it('handles action of type SHOW_ALL', () => {
    const state = [
      { '_id':1, 'title': 'title 1', 'message':'message 1', 'minimized':false},
      { '_id':2, 'title': 'title 2', 'message':'message 2', 'minimized':true},
      { '_id':3, 'title': 'title 3', 'message':'message 3', 'minimized':false}
    ];

    const expected_result = [
      { '_id':1, 'title': 'title 1', 'message':'message 1', 'minimized':false},
      { '_id':2, 'title': 'title 2', 'message':'message 2', 'minimized':false},
      { '_id':3, 'title': 'title 3', 'message':'message 3', 'minimized':false}
    ];

    const action = {type: SHOW_ALL};
    expect(commentReducer(state, action)).to.deep.eql(expected_result);                              
  });

  it('handles action of type MINIMIZE_ALL', () => {
    const state = [
      { '_id':1, 'title': 'title 1', 'message':'message 1', 'minimized':false},
      { '_id':2, 'title': 'title 2', 'message':'message 2', 'minimized':true},
      { '_id':3, 'title': 'title 3', 'message':'message 3', 'minimized':false}
    ];

    const expected_result = [
      { '_id':1, 'title': 'title 1', 'message':'message 1', 'minimized':true},
      { '_id':2, 'title': 'title 2', 'message':'message 2', 'minimized':true},
      { '_id':3, 'title': 'title 3', 'message':'message 3', 'minimized':true}
    ];

    const action = {type: MINIMIZE_ALL};
    expect(commentReducer(state, action)).to.deep.eql(expected_result);                              
  });

  it('handles action of type TOGGLE_ALL', () => {
    const state = [
      { '_id':1, 'title': 'title 1', 'message':'message 1', 'minimized':false},
      { '_id':2, 'title': 'title 2', 'message':'message 2', 'minimized':true},
      { '_id':3, 'title': 'title 3', 'message':'message 3', 'minimized':false}
    ];

    const expected_result = [
      { '_id':1, 'title': 'title 1', 'message':'message 1', 'minimized':true},
      { '_id':2, 'title': 'title 2', 'message':'message 2', 'minimized':false},
      { '_id':3, 'title': 'title 3', 'message':'message 3', 'minimized':true}
    ];

    const action = {type: TOGGLE_ALL};
    expect(commentReducer(state, action)).to.deep.eql(expected_result);                              
  });

  it('handles action of type TOGGLE_COMMENT', () => {
    const state = [
      { '_id':1, 'title': 'title 1', 'message':'message 1', 'minimized':false},
      { '_id':2, 'title': 'title 2', 'message':'message 2', 'minimized':true},
      { '_id':3, 'title': 'title 3', 'message':'message 3', 'minimized':false}
    ];

    const payload  = {'_id':2};

    const expected_result = [
      { '_id':1, 'title': 'title 1', 'message':'message 1', 'minimized':false},
      { '_id':2, 'title': 'title 2', 'message':'message 2', 'minimized':false},
      { '_id':3, 'title': 'title 3', 'message':'message 3', 'minimized':false}
    ];

    const action = {type: TOGGLE_COMMENT, payload:payload};
    expect(commentReducer(state, action)).to.deep.eql(expected_result);                              
  });  
});