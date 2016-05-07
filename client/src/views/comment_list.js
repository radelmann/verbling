import React, { Component } from 'react';
import { connect } from 'react-redux';

class CommentList extends Component {
  renderList() {
    return this.props.comments.map((comment, i) => {
      return (
        <li className="comment" key={i}>
          <div>{comment.text}</div>
        </li>
      );
    })
  }

  render() {
    return (
      <div>comment list 
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