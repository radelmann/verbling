import React, { Component } from 'react';
import { connect } from 'react-redux';

export default class CommentListItem extends Component {
  render() {
    const { title, message } = this.props;
    return (
      <li className="comment" onClick={this.onClick.bind(this)}>
        <div className="bold">{title}</div>
        <div>{message}</div>
      </li>
    );
  }
}