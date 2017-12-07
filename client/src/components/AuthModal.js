import React, { Component } from 'react';
import { Button, Header, Icon, Modal } from 'semantic-ui-react';
import { connect } from 'react-redux';

import SignupForm from './SignupForm.js';
import LoginForm from './LoginForm.js';

import * as actions from '../actions';

// import '../styles/AuthModal.css';

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
    console.log(this.state.payload);
    this.props.loginUser({ username, password });
  };

  handleSignup = () => {
    // If all good, then sign up user.
    const { username, password1, email } = this.state.payload;
    let obj = { username, password: password1, email };
    console.log(obj);
    this.props.signupUser(obj);
  };

  setPayload = fields => {
    console.log(fields);
    this.setState({ payload: {...fields } });
  };

  render() {
    console.log(this.props);
    // TODO:
    // If not logged in and no error, user may open and close modal at will.
    // If not logged in and error, prevent from leaving.
    // If logged in, show different message.
    let open = this.props.authOpened;
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
