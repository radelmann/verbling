import React, { Component } from 'react';
import { connect } from 'react-redux';

class CommentList extends Component {
  renderList() {
    return this.props.comments.map((comment, i) => {
      return (
        <li className="comment" key={i}>
          <div>{comment.title}</div>
          <div>{comment.message}</div>
        </li>
      );
    })
  }

  render() {
    return (
      <div>
        <ul>
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