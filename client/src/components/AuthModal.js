import React, { Component } from 'react';
import { Button, Header, Icon, Modal } from 'semantic-ui-react';
import { connect } from 'react-redux';

import SignupForm from './SignupForm.js';
import LoginForm from './LoginForm.js';

import * as actions from '../actions';

// The AuthModal's purpose is to hold the login and signup form and detect when a user switches
// between login and signup mode. It also has the job of holding onto the data that a user enters 
// when they log in and sign up.

class AuthModal extends Component {
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
    const { username, password1, email } = this.state.payload;
    let obj = { username, password: password1, email };
    this.props.signupUser(obj);
  };

  setPayload = fields => {
    this.setState({ payload: {...fields } });
  };

  render() {
    let open = this.props.authOpened;

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
      <Modal trigger={<div />} open={open} onClose={this.props.openAuth.bind(this, false)} size="tiny">
        <Header icon="id card" content={text} />
        <Modal.Content>{view}</Modal.Content>
        <Modal.Actions>
          <Button className="AuthModal-toggle-mode-button" content={oppText} onClick={this.toggleMode} />
          <Button color="black" size="medium" onClick={this.props.openAuth.bind(this, false)}>
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

export default connect(mapStateToProps, actions)(AuthModal);
