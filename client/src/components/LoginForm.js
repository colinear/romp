import React from 'react';
import { Button, Checkbox, Form, Segment, Label } from 'semantic-ui-react';

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password1: '',
      password2: '',
      passwordError: false,
      usernameError: false
    };
  }

  onSubmitHandler = () => {
    if (this.state.password1 === this.state.password2) {
      this.setState({passwordError: false});
      // Submit to server
    } else {
      // Give error
      this.setState({passwordError: true});
    }
  }

  onChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    if (name === 'username') {
      this.setState({username: value});
    } else if (name === 'password1') {
      this.setState({password1: value});
    } else if (name === 'password2') {
      this.setState({password2: value});
    }
  }

  render() {
    return (
      <div className="LoginForm">
        <Form>
          <Form.Field required>
            <label>Username</label>
            <input name="username" placeholder="Username" onChange={this.onChange} />
          </Form.Field>
          <Form.Field required>
            <label>Password</label>
            <input name="password1" placeholder="Password" type="password" onChange={this.onChange}/>
          </Form.Field>
          <Form.Field required>
            <input name="password2" placeholder="Password" type="password" onChange={this.onChange} />
          </Form.Field>
           {(this.state.passwordError) ? <Label basic color='red' pointing='below'>Passwords do not match.</Label> : null}
          <Form.Field>
            <Checkbox label="I agree to the Terms and Conditions" />
          </Form.Field>
        </Form>
      </div>
    );
  }
}
