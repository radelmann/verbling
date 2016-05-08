import React, {Component} from 'react';
import { connect } from 'react-redux';
import { setSearchTerm } from  '../actions/';

class SearchBar extends Component {
  componentWillUnmount() {
    const searchTerm = '';
    this.props.setSearchTerm({searchTerm});   
  }

  setSearchTerm(e) {
    const searchTerm = e.target.value;
    this.props.setSearchTerm({searchTerm});   
  }

  render() {
    return (
      <div>
        <div>
          <input 
            placeholder="search by title or message" 
            className="form-control" 
            type="text" 
            onChange={ this.setSearchTerm.bind(this) }/>  
        </div>
      </div>
    );
  }
}

export default connect(null, { setSearchTerm })(SearchBar);