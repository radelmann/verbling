import { expect } from '../util';
import * as types from '../../src/actions/types';
import * as actions from '../../src/actions';

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
      { type: types.FETCH_COMMENTS, payload: data }
    ];

    const store = mockStore({ comments: [] });
    
    return store.dispatch(actions.fetchComments())
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
      { type: types.POST_COMMENT, payload:data}
    ];

    const store = mockStore({ comments: [] });
    
    return store.dispatch(actions.postComment(data))
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
      const action = actions.showAll();
      expect(action.type).to.equal(types.SHOW_ALL);
    });
  });

  describe('minimizeAll', () => {
    it('has the correct type', () => {
      const action = actions.minimizeAll();
      expect(action.type).to.equal(types.MINIMIZE_ALL);
    });
  });

  describe('toggleAll', () => {
    it('has the correct type', () => {
      const action = actions.toggleAll();
      expect(action.type).to.equal(types.TOGGLE_ALL);
    });
  });

  describe('toggleComment', () => {
    const payload = {'_id':1};

    it('has the correct type', () => {
      const action = actions.toggleComment(payload);
      expect(action.type).to.equal(types.TOGGLE_COMMENT);
    });

    it('has the correct payload', () => {
      const action = actions.toggleComment(payload);
      expect(action.payload).to.equal(payload);
    });    
  });

  describe('setSearchTerm', () => {
    const payload = {'searchTerm':'test'};

    it('has the correct type', () => {
      const action = actions.setSearchTerm(payload);
      expect(action.type).to.equal(types.SET_SEARCH_TERM);
    });

    it('has the correct payload', () => {
      const action = actions.setSearchTerm(payload);
      expect(action.payload).to.equal(payload);
    });    
  });

  describe('clearSearchTerm', () => {
    it('has the correct type', () => {
      const action = actions.clearSearchTerm();
      expect(action.type).to.equal(types.CLEAR_SEARCH_TERM);
    });
  });
});