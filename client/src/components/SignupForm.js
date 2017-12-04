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
            <label>Email</label>
            <input placeholder="First Name" />
          </Form.Field>
          <Form.Field>
            <Checkbox label="I agree to the Terms and Conditions" />
          </Form.Field>
          <Button type="submit">Submit</Button>
        </Form>
      </div>
    );
  }
}
