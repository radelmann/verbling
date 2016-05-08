import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchComments } from '../actions';
import CommentListItem from './comment_list_item';

class CommentList extends Component {
  componentWillMount() {
    this.props.fetchComments();  
  }

  filterList(comments, searchTerm) {
    if (searchTerm !== '') {
      searchTerm = searchTerm.toLowerCase();
      return comments.filter(comment => {
        return (
          comment.title.toLowerCase().includes(searchTerm) ||
          comment.message.toLowerCase().includes(searchTerm)
        );  
      });
    }
    return comments;
  }

  renderList(comments) {
    return comments.map(comment => {
      return (
        <CommentListItem {...comment} key={comment._id} />
      );
    })
  }

  render() {
    const {comments, searchTerm} = this.props;
  
    return (
      <div>
        <ul className="comments">
          {this.renderList(this.filterList(comments, searchTerm))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps({comments, searchTerm}) {
  return {
    comments,
    searchTerm
  };
}

export default connect(mapStateToProps,{ fetchComments })(CommentList);