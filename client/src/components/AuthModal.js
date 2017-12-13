import React, { Component } from 'react';
import React, { Component } from 'react';
import { Button, Header, Icon, Modal } from 'semantic-ui-react';
import { connect } from 'react-redux';

import SignupForm from './SignupForm.js';
import LoginForm from './LoginForm.js';

import * as actions from '../actions';

import '../styles/AuthModal.css'

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

    let text, view, oppText, action, message;
    if (this.state.login) {
      text = 'Log In';
      view = <LoginForm setPayload={this.setPayload} />;
      oppText = 'Sign Up';
      action = this.handleLogin;
      message = "Don't have an account yet?"
    } else {
      text = 'Sign Up';
      view = <SignupForm setPayload={this.setPayload} />;
      oppText = 'Log In';
      action = this.handleSignup;
      message = "Have an account?"
    }

    return (
      <Modal trigger={<div />} open={open} onClose={this.props.openAuth.bind(this, false)} size="tiny">
        <Header icon="id card" content={text} />
        <Modal.Content>{view}</Modal.Content>
        <Modal.Actions style={{paddingTop: '2px'}}>
            <p style={{margin: '2px'}}>{message}</p>
          <Button style={{float: 'left'}} color="black" size="medium" onClick={this.props.openAuth.bind(this, false)}>
            Cancel
          </Button>
          <Button style={{float: 'left'}} color="blue" size="medium" onClick={action}>
            {text}
          </Button>
          <Button content={oppText} onClick={this.toggleMode} />
        </Modal.Actions>
      </Modal>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, actions)(AuthModal);
