import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SHOW_ALL, MINIMIZE_ALL, TOGGLE_ALL } from '../actions/types';

export default class CommentListItem extends Component {
  constructor(props) {
    super(props);

    this.state = { minimized : false };
  }

  toggle() {
    this.setState({ minimized : !this.state.minimized });
  }

  getClassName() {
    return 'comment ' + ((this.state.minimized) ? 'minimized' : '');     
  }

  render() {
    const { title, message, display } = this.props;
    const className = this.getClassName();
 
    return (
      <li className={className} onClick={this.toggle.bind(this)}>
        <div className="title">{title}</div>
        <div className="message">{message}</div>
      </li>
    );
  }

  componentDidMount(){
    this.setState({ override : false });
  }
}