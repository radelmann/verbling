import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showModal, resetForm } from '../actions/index';

class Buttons extends Component {
  openAll() {
    console.log('open all');
  }
  closeAll(){
    console.log('close all');
  }
  toggleAll(){
    console.log('toggle all');
  }
  openModal() {
    this.props.resetForm('CommentPostForm');
    this.props.showModal();
  }
  render() {
    return (
      <div>
        <button className="btn" onClick={this.openAll.bind(this)}>Open All</button>
        <button className="btn" onClick={this.closeAll.bind(this)}>Close All</button>        
        <button className="btn" onClick={this.toggleAll.bind(this)}>Toggle All</button>        
        <button className="btn btn-primary pull-right" onClick={this.openModal.bind(this)}>New</button>        
      </div>
    );
  }
}

export default connect(null, { showModal, resetForm })(Buttons);