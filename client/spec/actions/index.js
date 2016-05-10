import { expect } from '../util';
import { SHOW_ALL, MINIMIZE_ALL, TOGGLE_ALL, TOGGLE_COMMENT, FETCH_COMMENTS, POST_COMMENT, SHOW_MODAL, HIDE_MODAL, SET_SEARCH_TERM, CLEAR_SEARCH_TERM } from '../../src/actions/types';
import { fetchComments, postComment, showAll, minimizeAll, toggleAll, toggleComment, setSearchTerm, clearSearchTerm } from '../../src/actions';

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

describe('async actions', () => {
  afterEach(() => {
    nock.cleanAll()
  })

  describe('fetchComments', () => {
    const data = [{ _id:1, title:'title 1', message:'message 1'}];

    it('has the correct type and payload', () => {
    nock('http://localhost:3000')
      .get('/comment')
      .reply(200, { data: data})

    const expectedActions = [
      { type: FETCH_COMMENTS, payload: data }
    ];

    const store = mockStore({ comments: [] });
    
    return store.dispatch(fetchComments())
      .then(() => { // return of async actions
          expect(store.getActions()).to.deep.equal(expectedActions)
      })
    });
  });

  describe('postComment', () => {
    const data = { _id:1, title:'title 1', message:'message 1'};
    it('has the correct type and payload', () => {
    nock('http://localhost:3000')
      .post('/comment')
      .reply(200, data);

    const expectedActions = [
      { type: POST_COMMENT, payload:data}
    ];

    const store = mockStore({ comments: [] });
    
    return store.dispatch(postComment(data))
      .then(() => {
          expect(store.getActions()).to.deep.equal(expectedActions)
      })
    });
  });
});

describe('actions', () => {
  //todo post comment, fetch comments
  
  describe('showAll', () => {
    it('has the correct type', () => {
      const action = showAll();
      expect(action.type).to.equal(SHOW_ALL);
    });
  });

  describe('minimizeAll', () => {
    it('has the correct type', () => {
      const action = minimizeAll();
      expect(action.type).to.equal(MINIMIZE_ALL);
    });
  });

  describe('toggleAll', () => {
    it('has the correct type', () => {
      const action = toggleAll();
      expect(action.type).to.equal(TOGGLE_ALL);
    });
  });

  describe('toggleComment', () => {
    const payload = {'_id':1};

    it('has the correct type', () => {
      const action = toggleComment(payload);
      expect(action.type).to.equal(TOGGLE_COMMENT);
    });

    it('has the correct payload', () => {
      const action = toggleComment(payload);
      expect(action.payload).to.equal(payload);
    });    
  });

  describe('setSearchTerm', () => {
    const payload = {'searchTerm':'test'};

    it('has the correct type', () => {
      const action = setSearchTerm(payload);
      expect(action.type).to.equal(SET_SEARCH_TERM);
    });

    it('has the correct payload', () => {
      const action = setSearchTerm(payload);
      expect(action.payload).to.equal(payload);
    });    
  });

  describe('clearSearchTerm', () => {
    it('has the correct type', () => {
      const action = clearSearchTerm();
      expect(action.type).to.equal(CLEAR_SEARCH_TERM);
    });
  });
});