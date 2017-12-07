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

  onChange = e => {
    let name = e.target.name;
    let value = e.target.value;
    this.setState((prevState, props) => {
      let { username, password1, password2, email, terms } = prevState;

      if (name === 'username') {
        username = value;
      } else if (name === 'password1') {
        password1 = value;
      } else if (name === 'password2') {
        password2 = value;
      } else if (name === 'terms') {
        terms = value;
      } else if (name === 'email') {
        email = value;
      }
      this.props.setPayload({ username, password1, password2, email, terms });
      return { username, password1, password2, email, terms };
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

  render() {
    return (
      <div className="SignupForm">
        <Form>
          <Form.Field required>
            <label>Email</label>
            <input name="email" placeholder="Email" onChange={this.onChange} />
          </Form.Field>
          <Form.Field required>
            <label>Username</label>
            <input name="username" placeholder="Username" onChange={this.onChange} />
          </Form.Field>
          <Form.Field required>
            <label>Password</label>
            <input name="password1" placeholder="Password" type="password" onChange={this.onChange} />
          </Form.Field>
          <Form.Field required>
            <input name="password2" placeholder="Confirm Password" type="password" onChange={this.onChange} />
          </Form.Field>
          {this.state.passwordError ? (
            <Label basic color="red" pointing="above">
              Passwords do not match.
            </Label>
          ) : null}
          <Form.Field>
            <Checkbox name="terms" label="I agree to the Terms and Conditions" onChange={this.onChange} />
            {this.state.termsError ? (
              <Message
                error
                header="Action Forbidden"
                content="You can only sign up for an account once with a given e-mail address."
              />
            ) : null}
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
