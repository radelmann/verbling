import React, { Component } from 'react';
import { connect } from 'react-redux';
import CommentListItem from './comment_list_item';

class CommentList extends Component {
  renderList() {
    const { display, comments } = this.props;

    return comments.map((comment, i) => {
      return (
        <CommentListItem display={display} {...comment} key={i} />
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
    comments: state.comments,
    display: state.display
  };
}

export default connect(mapStateToProps,null)(CommentList);