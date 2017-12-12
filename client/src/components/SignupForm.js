import React from 'react';
import { Button, Checkbox, Form, Segment, Label, Message } from 'semantic-ui-react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { userInfo } from 'os';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password1: '',
      password2: '',
      terms: false,
      passwordError: false,
      usernameError: false,
      termsError: false,
      email: ''
    };
  }

  handleFormSubmit({ email, password }) {
    // Need to do something to log user in
    this.props.loginUser({ email, password });
  }

  onChange = (e, data)=> {
    let name = e.target.name;
    let value = e.target.value;
    let object = data;
    this.setState((prevState, props) => {
      let { username, password1, password2, email, terms, usernameError, passwordError, termsError } = prevState;
      // Check if username is alphanumeric.
      if (name === 'username') {
        if (this.isAlphanumeric(value) || value === '') {
          username = value;
          usernameError = false;
        } else {
          usernameError = true;
        }
      } else if (name === 'password1') {
        password1 = value;
      } else if (name === 'password2') {
        password2 = value;
      } else if (name === 'email') {
        email = value;
      } else if (data.name === 'terms') {
        terms = data.checked;
        if (!terms) {
          termsError = true;
        } else {
          termsError = false;
        }
      }

      // If there are no errors, send data to the modal.
      if (!passwordError && !usernameError && !termsError) {
        this.props.setPayload({ username, password1, password2, email, terms });
      }
      return { username, password1, password2, email, terms, passwordError, termsError, usernameError };
    });
  };
  
  // TODO: Fix alphanumeric function for username and set message when terms is ok.
  isAlphanumeric = value => {
    var letterNumber = /^[0-9a-zA-Z]+$/;
    if (value.match(letterNumber)) {
      return true;
    } else {
      return false;
    }
  };

  handlePasswordMatch = () => {
    if (!(this.state.password1 === this.state.password2)) {
      this.setState({passwordError: true})
    } else {
      this.setState({passwordError: false})
    }
  }

  render() {
    let usernameError = this.state.usernameError ? <Label basic color="red" pointing="above">Username must contain only letters and numbers.</Label> : null;
    let passwordError = this.state.passwordError ? (<Label basic color="red" pointing="above">Passwords do not match.</Label>) : null;
    let termsError = this.state.termsError ? <Label basic color='red' pointing='left'>You must accept the terms and conditions.</Label> : null;
    return (
      <div className="SignupForm">
        <Form>
          <Form.Field required>
            <label>Email</label>
            <input name="email" placeholder="Email" onChange={this.onChange} />
          </Form.Field>
          <Form.Field required error={this.state.usernameError}>
            <label>Username</label>
            <input name="username" placeholder="Username" onChange={this.onChange} />
            {usernameError}
          </Form.Field>
          <Form.Field required error={this.state.passwordError}>
            <label>Password</label>
            <input name="password1" placeholder="Password" type="password" onChange={this.onChange} />
          </Form.Field>
          <Form.Field required error={this.state.passwordError} >
            <input name="password2" placeholder="Confirm Password" type="password" onChange={this.onChange} onBlur={this.handlePasswordMatch}/>
            {passwordError}
          </Form.Field> 
          <Form.Field>
            <Checkbox name="terms" label="I agree to the Terms and Conditions" onChange={this.onChange} />
            {termsError}
          </Form.Field>
        </Form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, actions)(SignupForm);
