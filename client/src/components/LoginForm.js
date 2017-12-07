import React from 'react';
import { Button, Checkbox, Form, Segment } from 'semantic-ui-react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../actions';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
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
      let { username, password } = prevState;

      if (name === 'username') {
        username = value;
      } else if (name === 'password') {
        password = value;
      } 

      this.props.setPayload({ username, password });
      return { username, password };
    });
  };

  render() {
    return (
      <div className="SignupForm">
        <Form>
          <Form.Field required>
            <label>Username</label>
            <input name="username" placeholder="Username" onChange={this.onChange} />
          </Form.Field>
          <Form.Field required>
            <label>Password</label>
            <input name="password" placeholder="Password" type="password" onChange={this.onChange} />
          </Form.Field>
        </Form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, actions)(LoginForm);

// export default class LoginForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       username: '',
//       password: ''
//     };
//   }

//   render() {
//     return (
//       <div className="LoginForm">
//         <Form>
//            <Form.Field required>
//             <label>Username</label>
//             <input name="username" placeholder="Username" />
//           </Form.Field>
//           <Form.Field required>
//             <label>Password</label>
//             <input name="password" placeholder="Password" type="password" />
//           </Form.Field>
//         </Form>
//       </div>
//     );
//   }
// }

// class Login extends React.Component {
//   handleFormSubmit(fields) {
//     console.log(fields);
//   };

//   render() {
//     console.log(this.props);
//     const { handleSubmit, fields: { username, password }} = this.props;

//     return (
//       <div className="Login">
//         <Form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
//           <Form.Field required>
//             <label>Username</label>
//             <input {...username} />
//           </Form.Field>
//           <Form.Field>
//             <label>Password</label>
//             <input {...password} placeholder="Password" type="password" />
//           </Form.Field>
//           <Button type="submit">Log In</Button>
//         </Form>
//       </div>
//     );
//   }
// }

// function mapStateToProps(state) {
//   return { errorMessage: state.auth.error }
// }

// export default reduxForm({
//   form: 'login',
//   fields: ['username', 'password']
// }, mapStateToProps, actions)(Login);
