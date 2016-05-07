import React, { Component } from 'react';
import { connect } from 'react-redux';

export default class CommentListItem extends Component {
  render() {
    const { title, message } = this.props;
    return (
      <li>
        <div>{title}</div>
        <div>{message}</div>
      </li>
    );
  }
}