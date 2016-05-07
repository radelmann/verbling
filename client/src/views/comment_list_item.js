import React, { Component } from 'react';
import { connect } from 'react-redux';

export default class CommentListItem extends Component {
  constructor(props) {
    super(props);

    //initialize as not minimized
    this.state = { minimized : false };
  }

  toggle() {
    this.setState({minimized : !this.state.minimized});
  }

  getClassName() {
    return 'comment ' + ((this.state.minimized) ? 'minimized' : '');     
  }

  render() {
    const { title, message } = this.props;
    
    return (
      <li className={this.getClassName()} onClick={this.toggle.bind(this)}>
        <div className="bold">{title}</div>
        <div>{message}</div>
      </li>
    );
  }
}