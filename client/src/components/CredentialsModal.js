import React, { Component } from 'react';
import { Button, Header, Icon, Modal } from 'semantic-ui-react';
import { connect } from 'react-redux';

import SignupForm from './SignupForm.js';
import LoginForm from './LoginForm.js';

import * as actions from '../actions';

// import '../styles/CredentialsModal.css';

class CredentialsModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      login: true, // If login is true, then show login component. Otherwise, show signup component.
      payload: {}
    };
  }

  handleOpen = () => {
    this.setState({ modalOpen: true });
  };

  handleClose = () => {
    this.setState({ modalOpen: false });
  };

  toggleMode = () => {
    let login = this.state.login ? false : true;
    this.setState({ login });
  };

  handleLogin = () => {
    const { username, password } = this.state.payload;
    this.props.loginUser({ username, password });
  };

  handleSignup = () => {
    // If all good, then sign up user.
    const { username, password1 } = this.state.payload;
    this.props.signupUser({ username, password: password1 });
  };

  setPayload = fields => {
    this.setState({ payload: { ...fields } });
  };

  render() {
    // TODO:
    // If not logged in and no error, user may open and close modal at will.
    // If not logged in and error, prevent from leaving.
    // If logged in, show different message.
    let open = this.props.needsAuth;

    // If login is true, render login component and appropriate text. Otherwise, render signup
    // component and the appropriate text.
    let text, view, oppText, action;
    if (this.state.login) {
      text = 'Log In';
      view = <LoginForm setPayload={this.setPayload} />;
      oppText = 'Sign Up';
      action = this.handleLogin;
    } else {
      text = 'Sign Up';
      view = <SignupForm setPayload={this.setPayload} />;
      oppText = 'Log In';
      action = this.handleSignup;
    }

    return (
      <Modal trigger={<div />} open={open} onClose={this.handleClose} size="tiny">
        <Header icon="id card" content={text} />
        <Modal.Content>{view}</Modal.Content>
        <Modal.Actions>
          <Button className="CredentialsModal-toggle-mode-button" content={oppText} onClick={this.toggleMode} />
          <Button color="black" size="medium" onClick={this.handleClose}>
            Cancel
          </Button>
          <Button color="blue" size="medium" onClick={action}>
            {text}
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, actions)(CredentialsModal);
