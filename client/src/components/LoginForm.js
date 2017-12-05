import React from 'react';
import { Button, Checkbox, Form, Segment } from 'semantic-ui-react';

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  onSubmitHandler() {}

  render() {
    return (
      <div className="LoginForm">
        <Form>
          <Form.Field>
            <label>Username</label>
            <input placeholder="Username" />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input placeholder="Password" type="password" />
          </Form.Field>
          <Form.Field>
            <input placeholder="Password" type="password" />
          </Form.Field>
          <Form.Field>
            <Checkbox label="I agree to the Terms and Conditions" />
          </Form.Field>
        </Form>
      </div>
    );
  }
}
