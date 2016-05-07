import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleComment } from '../actions/';

class CommentListItem extends Component {
  toggle() {
    const id = this.props._id;
    this.props.toggleComment({id});
  }

  getClassName(minimized) {
    return 'comment ' + (minimized ? 'minimized' : '');     
  }
  
  render() {
    const { title, message, minimized } = this.props;
    const className = this.getClassName(minimized);

    return (
      <li className={className} onClick={this.toggle.bind(this)}>
        <div className="title">{title}</div>
        <div className="message">{message}</div>
      </li>
    );
  }
}

export default connect(null, { toggleComment })(CommentListItem);