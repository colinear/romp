import React from 'react';
import { Form, Input, TextArea, Button, Icon } from 'semantic-ui-react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../actions';

class CreateEvent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      event: '',
      game: '',
      location: '',
      description: ''
    };
  }

  onChange = e => {
    console.log('VALUE: ', e.target.value);
    let name = e.target.name;
    let value = e.target.value;
    this.setState((prevState, props) => {
      let { event, game, location, description } = prevState;

      if (name === 'event') {
        event = value;
      } else if (name === 'game') {
        game = value;
      } else if (name === 'location') {
        location = value;
      } else if (name === 'description') {
        description = value;
      }

      return { event, game, location, description };
    });
  };

  render() {
    return (
      <Form>
        <Form.Group widths='equal'>
          <Form.Field required id='form-input-control-event-name' name="event" control={Input} label='Event name' placeholder='Event name' onChange={this.onChange} />
          <Form.Field required id='form-input-control-game' name="game" control={Input} label='Game' placeholder='Game' onChange={this.onChange} />
          <Form.Field required id='form-input-control-location' name="location" control={Input} label='Location' placeholder='Location' onChange={this.onChange} />
        </Form.Group>
        <Form.Field id='form-textarea-control-description' name="description" control={TextArea} label='Description' placeholder='Description' onChange={this.onChange} />
        {/* <Form.Field id='form-button-control-public' color="blue" control={Button} content='Confirm' /> */}
      </Form>
    )
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, actions)(CreateEvent);
