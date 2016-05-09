import { expect } from '../test_helper';  
import searchTermReducer from '../../src/reducers/search_term';
import { SET_SEARCH_TERM, CLEAR_SEARCH_TERM } from '../../src/actions/types';

describe('SearchTerm Reducer', () => {
  it('handles action with unknown type', () => {
    expect(searchTermReducer(undefined, {})).to.eql('');
  });

  const payload = {'searchTerm':'term'};
  it('handles action of type SET_SEARCH_TERM', () => {
    const action = {type: SET_SEARCH_TERM, payload:payload};
    expect(searchTermReducer('', action)).to.eql('term');                              
  });

  it('handles action of type CLEAR_SEARCH_TERM', () => {
    const action = {type: CLEAR_SEARCH_TERM};
    expect(searchTermReducer('term', action)).to.eql('');                              
  });
});