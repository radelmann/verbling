import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { postComment, resetForm, hideModal } from '../actions/index';
import Modal from 'react-modal';

const customStyles = {
  overlay : {
    backgroundColor : 'rgba(75, 75, 75, .75)'
  },
  content : {
    border : 'none',
    background  : 'transparent'
  }
};

class CommentPost extends Component {
  onSubmit(props) {
    this.props.hideModal();
    this.props.postComment(props);
  }

  closeModal() {
    this.props.resetForm('CommentPostForm');
    this.props.hideModal();
  }

  render() {
    const { fields: {title, message}, handleSubmit, modal } = this.props;

    return (
      <div>
        <div>
          <Modal
            isOpen={modal}
            onRequestClose={this.closeModal.bind(this)}
            style={customStyles} >
            <div className="close-form-container">
              <button className="transparent align-right white" onClick={this.closeModal.bind(this)}>X</button>
            </div> 
            <form className="post-form" onSubmit={ handleSubmit(this.onSubmit.bind(this)) }>
                <div className="form-group">
                  <input className="form-control" {...title} placeholder="title"/>
                  { title.touched && title.error && <div className="error">{title.error}</div> }
                  <textarea className="form-control" {...message} rows="5" placeholder="message"/>
                  { message.touched && message.error && <div className="error">{message.error}</div> }
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </Modal>
        </div>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.message) {
    errors.message = 'Enter a message.';
  }

  return errors;
}

function mapStateToProps(state) {
  return { modal: state.modal };
}

export default reduxForm({
  form: 'CommentPostForm',
  fields: ['message', 'title'],
  validate,
},mapStateToProps,{postComment, resetForm, hideModal})(CommentPost);
