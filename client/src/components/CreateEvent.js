import React, { Component } from 'react';
import { Form, Input, TextArea, Button, Icon } from 'semantic-ui-react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../actions';

class CreateEvent extends Component {
  constructor(props) {
    console.log('create event', props);
    super(props);
    this.state = {
      event: '',
      game: '',
      location: '',
      description: '',
      creator: props.user._id,
    };
  }

  onChange = e => {
    let name = e.target.name;
    let value = e.target.value;
    this.setState((prevState, props) => {
      console.log('creator madness', this.state);
      let { event, game, location, description, creator } = prevState;

      if (name === 'event') {
        event = value;
      } else if (name === 'game') {
        game = value;
      } else if (name === 'location') {
        location = value;
      } else if (name === 'description') {
        description = value;
      }

      this.props.setPayload({ event, game, location, description, creator });
      return { event, game, location, description, creator };
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
