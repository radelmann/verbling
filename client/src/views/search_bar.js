import React, {Component} from 'react';
import { connect } from 'react-redux';
import { setSearchTerm, clearSearchTerm } from  '../actions/';

class SearchBar extends Component {
  componentWillUnmount() {
    this.props.clearSearchTerm();   
  }

  setSearchTerm(e) {
    const searchTerm = e.target.value;
    this.props.setSearchTerm({searchTerm});   
  }

  render() {
    return (
      <input 
        placeholder="search by title or message" 
        className="form-control" 
        type="text" 
        onChange={ this.setSearchTerm.bind(this) }/>  
    );
  }
}

export default connect(null, { setSearchTerm, clearSearchTerm })(SearchBar);