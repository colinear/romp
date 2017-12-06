import React from 'react';
import { Button, Checkbox, Form, Segment, Label, Message } from 'semantic-ui-react';

export default class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password1: '',
      password2: '',
      terms: false,
      passwordError: true,
      usernameError: false,
      termsError: false
    };
  }

  onSubmitHandler = () => {
    if (this.state.password1 === this.state.password2 && this.state.terms === true) {
      this.setState({ passwordError: false });
      // Submit to server
    } else {
      // Give error
      this.setState({ passwordError: true });
    }
  };

  onChange = e => {
    let name = e.target.name;
    let value = e.target.value;
    console.log(name, value);
    if (name === 'username') {
      if (this.isAlphanumeric(value) && this.usernameError === false) {
        console.log('is alphanumeric');
        this.setState({ username: value });
      } else if (!this.isAlphanumeric(value)) {
        this.setState({ username: this.state.username });
      }
    } else if (name === 'password1') {
      this.setState({ password1: value });
    } else if (name === 'password2') {
      this.setState({ password2: value });
    } else if (name === 'terms') {
      this.setState({ terms: value });
    }
  };

  // TODO: Fix alphanumeric function for username and set message when terms is ok.
  isAlphanumeric = (value) => {
    var letterNumber = /^[0-9a-zA-Z]+$/;
    if (value.match(letterNumber)) {
      return true;
    } else {
      return false;
    }
  }

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
            <Label basic color="red" pointing="below">
              Passwords do not match.
            </Label>
          ) : null}
          <Form.Field>
            <Checkbox name="terms" label="I agree to the Terms and Conditions" onChange={this.onChange} />
            {(this.state.termsError) ?
              <Message
                error
                header="Action Forbidden"
                content="You can only sign up for an account once with a given e-mail address."
              /> : null
            }
          </Form.Field>
        </Form>
      </div>
    );
  }
}
