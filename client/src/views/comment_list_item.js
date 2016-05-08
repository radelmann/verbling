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
  
  getIconClassName(minimized) {
    return 'fa ' + (minimized ? 'fa-arrow-circle-left' : 'fa-arrow-circle-down');     
  }  

  render() {
    const { title, message, minimized } = this.props;
    const className = this.getClassName(minimized);
    const iconClassName = this.getIconClassName(minimized);

    return (
      <li onClick={this.toggle.bind(this)}>
        <div className={className}>
          <strong>{title}</strong> {message}
        </div>
        <i className={iconClassName} aria-hidden="true"></i>
      </li>
    );
  }
}

export default connect(null, { toggleComment })(CommentListItem);