import React, { Component } from 'react';
import CommentList from './comment_list';
import CommentPost from './comment_post';
import Buttons from './buttons';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <CommentList></CommentList>
        <CommentPost></CommentPost>
        <Buttons></Buttons>
      </div>
    );
  }
}