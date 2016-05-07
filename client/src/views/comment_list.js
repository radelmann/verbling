import React, { Component } from 'react';
import { connect } from 'react-redux';
import CommentListItem from './comment_list_item';

class CommentList extends Component {
  renderList() {
    return this.props.comments.map((comment, i) => {
      return (
        <CommentListItem {...comment} key={i} />
      );
    })
  }

  render() {
    return (
      <div>
        <ul className="comments">
          {this.renderList()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    comments: state.comments
  };
}

export default connect(mapStateToProps,null)(CommentList);