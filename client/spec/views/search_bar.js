import { createSpy }  from 'expect';
import { renderComponent, expect } from '../util';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import SearchBar from '../../src/views/search_bar';

function setup() {
  let props = {
    clearSearchTerm: createSpy(),
    setSearchTerm: createSpy(),
  }

  let state = {
    form: 'form',
    comments: [],
    modal: false,
    searchTerm: ''
  }

  return renderComponent(SearchBar, props, state);
}

describe('SearchBar View', () => {
  
  const component = setup();
  
  it('has the correct class', () => {
    expect(component).to.have.class('form-control');  
  });
})