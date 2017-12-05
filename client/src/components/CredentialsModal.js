import React, { Component } from 'react';
import { Button, Header, Icon, Modal } from 'semantic-ui-react';

import SignupForm from './SignupForm.js';
import LoginForm from './LoginForm.js';
import '../styles/CredentialsModal.css';

export default class CredentialsModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      login: true // If login is true, then show login component. Otherwise, show signup component.
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

  render() {
    // If login is true, render login component and appropriate text. Otherwise, render signup
    // component and the appropriate text.
    let text, view, buttonText;
    if (this.state.login) {
      text = 'Log In';
      view = <LoginForm />;

      buttonText = 'Sign Up';
    } else {
      text = 'Sign Up';
      view = <SignupForm />;
      buttonText = 'Log In';
    }

    return (
      <Modal
        trigger={
          <Button color="black" onClick={this.handleOpen}>
            {text}
          </Button>
        }
        open={this.state.modalOpen}
        onClose={this.handleClose}
        size="tiny"
      >
        <Header icon="id card" content="Sign Up" />
        <Modal.Content>{view}</Modal.Content>
        <Modal.Actions>
          <Button className="CredentialsModal-toggle-mode-button" content={buttonText} onClick={this.toggleMode} />
          <Button size="medium" onClick={this.handleClose}>
            Cancel
          </Button>
          <Button color="blue" size="medium" onClick={this.handleClose}>
            {text}
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}
