import React from 'react';
import { Button, Checkbox, Form, Segment } from 'semantic-ui-react';

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: 'aaaa'
    };
  }

  onSubmitHandler() {}

  render() {
    return (
      <div className="LoginForm">
        <Form>
          <Form.Field required>
            <label>Email</label>
            <input placeholder="Email" />
          </Form.Field>
          <Form.Field>
            <Checkbox label="I agree to the Terms and Conditions" />
          </Form.Field>
        </Form>
      </div>
    );
  }
}
