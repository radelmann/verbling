import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showModal, resetForm } from '../actions/index';

class Buttons extends Component {
  openModal() {
    this.props.resetForm('CommentPostForm');
    this.props.showModal();
  }
  render() {
    return (
      <div>
        <button className="compose-button" onClick={this.openModal.bind(this)}>new</button>        
      </div>
    );
  }
}

export default connect(null, { showModal, resetForm })(Buttons);