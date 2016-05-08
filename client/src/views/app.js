import React, { Component } from 'react';
import SearchBar from './search_bar';
import CommentList from './comment_list';
import CommentPost from './comment_post';
import Buttons from './buttons';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>Verbling Challenge</h1>
        <SearchBar />
        <CommentList />
        <CommentPost />
        <Buttons />
      </div>
    );
  }
}