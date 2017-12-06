import React from 'react';
import { Button, Checkbox, Form, Segment } from 'semantic-ui-react';
import * as actions from '../actions';

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  render() {
    return (
      <div className="LoginForm">
        <Form>
           <Form.Field required>
            <label>Username</label>
            <input name="username" placeholder="Username" />
          </Form.Field>
          <Form.Field required>
            <label>Password</label>
            <input name="password" placeholder="Password" type="password" />
          </Form.Field>
        </Form>
      </div>
    );
  }
}
