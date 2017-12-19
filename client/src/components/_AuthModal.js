import React from 'react';
import { Button, Header, Icon, Modal, Checkbox, Form, Segment, Label, Message } from 'semantic-ui-react';
import { connect } from 'react-redux';

import * as actions from '../actions';

import '../styles/AuthModal.css';

import { userInfo } from 'os';

/*  This is a large component that consists of a login form and a signup form. 
  Previously, the auth modal was separated from the login form and the signup form,
  but because of the nature of the modal submit button being previously on the auth modal, we decided
  it would be better to have the login/signup forms be within the modal component. */
class _AuthModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // Either login or signup form.
      form: 'login',

      // Fields:
      username: '',
      email: '',
      loginPassword: '',
      signupPassword1: '',
      signupPassword2: '',
      terms: false,

      // Errors:
      noEmailError: false, // If no email, show error message.
      invalidEmailError: false, // If invalid email (regex check), show error message.
      noUsernameError: false, // If no username, show error message.
      noPasswordError: false, // If no password provided, show error message.
      invalidLoginError: false, // If invalid login, show error message.
      signupUserExistsError: false, // If user exists, show error message.
      alphanumericError: false, // If at least one username character is not alphanumeric, show error message.
      unmatchingPasswordError: false, // If signup passwords do not match, show error message.
      termsError: false, // If terms aren't checked, show error message.
      confirmPasswordError: false,
      shortUsernameError: false,
      shortPasswordError: false,
      needsUnalphanumericPasswordError: false
    };
  }


  toggleForm = () => {
    let form;
    if (this.state.form === 'login') {
      form = 'signup';
    } else if (this.state.form === 'signup') {
      form = 'login';
    }

    this.setState({form})
  }

  handleOpen = () => {
    this.setState({ modalOpen: true });
  };

  handleClose = () => {
    this.setState({ modalOpen: false });
  };


  // This returns a boolean that is true if the value has all alphanumeric characters.
  isAlphanumeric = value => {
    var letterNumber = /^[0-9a-zA-Z]+$/;
    if (value.match(letterNumber)) {
      return true;
    } else {
      return false;
    }
  };

  // This returns a boolean that is true if the email is valid.
  isValidEmail = email => {
    var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
  };

  isMissingPassword = (password1, password2) => {
    return (password1 || password2) && !(password1 && password2);
  };

  // Once signup button is pressed, then check if all of the appropriate fields are valid.
  onFormSubmit = value => {
    this.setState((prevState, props) => {
      // Grab all field and error properties off previous state.
      let {
        username,
        email,
        loginPassword,
        signupPassword1,
        signupPassword2,
        terms,
        noEmailError,
        invalidEmailError,
        noUsernameError,
        noPasswordError,
        invalidLoginError,
        signupUserExistsError,
        alphanumericError,
        unmatchingPasswordError,
        confirmPasswordError,
        termsError,
        needsUnalphanumericPasswordError,
        shortPasswordError,
        shortUsernameError
      } = prevState;

      // Check fields on each form and get errors if invalid.
      if (this.state.form === 'login') {
        if (username === '') noUsernameError = true;
        if (loginPassword === '') noPasswordError = true;
      } else if (this.state.form == 'signup') {
        if (username === '') noUsernameError = true;
        if (username.length < 3) shortUsernameError = true;
        if (!this.isAlphanumeric(username)) alphanumericError = true;
        if (this.isMissingPassword(signupPassword1, signupPassword2)) confirmPasswordError = true;
        if (signupPassword1 === '' && signupPassword2 === '') noPasswordError = true;
        if (signupPassword1 !== signupPassword2) unmatchingPasswordError = true;
        if (signupPassword1 === signupPassword2 && signupPassword1.length < 8) shortPasswordError = true;
        if (signupPassword1 === signupPassword2 && this.isAlphanumeric(signupPassword1)) needsUnalphanumericPasswordError = true;
        if (terms === false) termsError = true;

        if (email === '') noEmailError = true;
        if (!this.isValidEmail(email)) invalidEmailError = true;
      }

      // If any of these errors exist...
      if (
        noEmailError ||
        invalidEmailError ||
        noUsernameError ||
        invalidLoginError ||
        signupUserExistsError ||
        alphanumericError ||
        alphanumericError ||
        unmatchingPasswordError ||
        confirmPasswordError ||
        termsError ||
        needsUnalphanumericPasswordError ||
        shortPasswordError ||
        shortUsernameError
      ) {
        return {
          noEmailError,
          shortUsernameError,
          invalidEmailError,
          noUsernameError,
          noPasswordError,
          invalidLoginError,
          signupUserExistsError,
          alphanumericError,
          unmatchingPasswordError,
          confirmPasswordError,
          termsError,
          needsUnalphanumericPasswordError,
          shortPasswordError
        };
      } else {
        // Sign up and return original object.
        if (this.state.form === 'login') {
          const {username, loginPassword } = this.state;
          this.props.loginUser({username, password: loginPassword})
        } else if (this.state.form === 'signup') {
          const {username, signupPassword1, email} = this.state;
          console.log(this.state);
          this.props.signupUser({username, password: signupPassword1, email}, () => {
            this.props.loginUser({username, password: signupPassword1});
          });
        }
        return prevState;
      }
    });
  };

  onChange = (e, data) => {
    // 'e.target' is for field data. 'data' is for the terms' checkbox.
    if (e.target.value && e.target.name) {
      var { name, value } = e.target;
    }
    
    if (data && data.checked && data.name) {
      var { checked } = data;
    }



    this.setState((prevState, props) => {
         // Grab all properties off previous state.
      let { username, email, loginPassword, signupPassword1, signupPassword2, terms } = prevState;
      if (name === 'username') {
        username = value;
      } else if (name === 'loginPassword') {
        loginPassword = value;
      } else if (name === 'signupPassword1') {
        signupPassword1 = value;
      } else if (name === 'signupPassword2') {
        signupPassword2 = value;
      } else if (name === 'email') {
        email = value;
      } else if (data && data.name === 'terms') {
        terms = data.checked;
      } else {
        console.log('Error while calling this.onChange in _AuthModal.');
      }
      console.log(username, loginPassword, signupPassword1, signupPassword2, email, terms)
      return { username, loginPassword, signupPassword1, signupPassword2, email, terms };
    });
  };

  // Signup form goes here.
  signupForm = () => {
    // Create errors for signup.
    let showNoEmailError = this.state.noEmailError ? <div>No Email Error</div> : null;
    let showInvalidEmailError = this.state.showInvalidEmailError ? <div>Invalid Email</div> : null;
    let showNoUsernameError = this.state.noUsernameError ? <div>No username</div> : null;
    let showNoPasswordError = this.state.noPasswordError ? <div>No password</div> : null;
    let showSignupUserExistsError = this.state.signupUserExistsError ? <div>Signup User Exists</div> : null;
    let showUnmatchingPasswordError = this.state.unmatchingPasswordError ? <div>Passwords do not match.</div> : null;
    let showTermsError = this.state.termsError ? <div>You did not check off terms and conditions.</div> : null;
    let showConfirmPasswordError = this.state.confirmPasswordError ? <div>Confirm password.</div> : null;
    let showShortPasswordError = this.state.shortPasswordError ? (
      <div>Username must be greater than 2 characters.</div>
    ) : null;
    let showShortUsernameError = this.state.shortUsernameError ? (
      <div>Password must be at least 8 characters.</div>
    ) : null;
    let showNeedsUnalphanumericPasswordError = this.state.needsUnalphanumericPasswordError ? (
      <div>Password must contain a non-alphanumeric character.</div>
    ) : null;

    return (
      <div className="SignupForm">
        <Form>
          <Form.Field error={showNoEmailError || showInvalidEmailError || showShortUsernameError} required>
            <label>Email</label>
            <input name="email" placeholder="Email" onChange={this.onChange} />
            {showNoEmailError}
            {showInvalidEmailError}
            {showShortUsernameError}
          </Form.Field>
          <Form.Field error={showNoUsernameError || showShortUsernameError}>
            <label>Username</label>
            <input name="username" placeholder="Username" onChange={this.onChange} />
            {showNoUsernameError}
            {showShortUsernameError}
          </Form.Field>
          <Form.Field error={showNoPasswordError || showUnmatchingPasswordError || showConfirmPasswordError || showNeedsUnalphanumericPasswordError} required>
            <label>Password</label>
            <input name="signupPassword1" placeholder="Password" type="password" onChange={this.onChange} />
          </Form.Field>
          <Form.Field error={showNoPasswordError || showUnmatchingPasswordError || showConfirmPasswordError || showNeedsUnalphanumericPasswordError} required>
            <input name="signupPassword2" placeholder="Confirm Password" type="password" onChange={this.onChange} />
            {showNoPasswordError}
            {showUnmatchingPasswordError}
            {showConfirmPasswordError}
            {showNeedsUnalphanumericPasswordError}
          </Form.Field>
          <Form.Field>
            <Checkbox name="terms" label="I agree to the Terms and Conditions." onChange={this.onChange} />
            {showTermsError}
          </Form.Field>
          {showSignupUserExistsError}
        </Form>
      </div>
    );
  };

  // Login form goes here.
  loginForm = () => {
    // Create errors for login.
    let showNoUsernameError = this.state.noUsernameError ? <div>No username</div> : null;
    let showNoPasswordError = this.state.noPasswordError ? <div>No password</div> : null;
    let showInvalidLoginError = this.state.invalidEmailError ? <div> Invalid Login</div> : null;
    return (
      <div className="LoginForm">
        <Form>
          <Form.Field error={showNoUsernameError} required>
            <label>Username</label>
            <input name="username" placeholder="Username" onChange={this.onChange} />
            {showNoUsernameError}
          </Form.Field>
          <Form.Field error={showNoPasswordError} required>
            <label>Password</label>
            <input name="loginPassword" placeholder="Password" type="password" onChange={this.onChange} />
            {showNoPasswordError}
          </Form.Field>
          {showInvalidLoginError}
        </Form>
      </div>
    );
  };

  render() {
    let open = this.props.authOpened;
    let text, oppText, form, message;
    if (this.state.form === 'login') {
      text = 'Log In';
      oppText = 'Sign Up';
      form = this.loginForm();
      message = "Don't have an account yet?";
    } else if (this.state.form === 'signup') {
      text = 'Sign Up';
      oppText = 'Log In'
      form = this.signupForm();
      message = 'Have an account?';
    }

    return (
      <Modal trigger={<div />} open={open} onClose={this.props.openAuth.bind(this, false)} size="tiny">
        <Header icon="id card" content={text} />
        <Modal.Content>{form}</Modal.Content>
        <Modal.Actions style={{ paddingTop: '2px' }}>
          <p style={{ margin: '2px' }}>{message}</p>
          <Button style={{ float: 'left' }} color="black" size="medium" onClick={this.props.openAuth.bind(this, false)}>
            Cancel
          </Button>
          <Button style={{ float: 'left' }} color="blue" size="medium" onClick={this.onFormSubmit}>
            {text}
          </Button>
          <Button content={oppText} onClick={this.toggleForm} />
        </Modal.Actions>
      </Modal>
    );
  }
}

// Unsure what state will be used on props, so returning all.
function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, actions)(_AuthModal);
