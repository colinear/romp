import React from 'react';
import { Button, Checkbox, Form, Segment, Label, Message } from 'semantic-ui-react';
import { connect } from 'react-redux';
import * as actions from '../actions';

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
      termsError: false
    };
  }

  handleFormSubmit({ email, password }) {
    // Need to do something to log user in
    this.props.loginUser({ email, password });
  }

  onChange = e => {
    let name = e.target.name;
    let value = e.target.value;
    if (name === 'username') {
      this.setState({ username: value });
    } else if (name === 'password1') {
      this.setState({ password1: value });
    } else if (name === 'password2') {
      this.setState({ password2: value });
    } else if (name === 'terms') {
      this.setState({ terms: value });
    }

    // Set component's payload.
    const { username, password1, password2, email, terms } = this.state;
    this.props.setPayload({ username, password1, password2, email, terms });
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
            <input placeholder="Email" />
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
            <input name="password2" placeholder="Password" type="password" onChange={this.onChange} />
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
