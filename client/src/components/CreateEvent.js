import React, { Component } from 'react';
import { Form, Input, TextArea, Button, Icon } from 'semantic-ui-react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../actions';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';


class CreateEvent extends Component {
  constructor(props) {
    console.log('create event', props);
    super(props);
    this.state = {
      event: '',
      game: '',
      location: '',
      description: '',
      creator: props.user,
      participants: [props.user],
    };
  }

  onChange = e => {
    let name = e.target.name;
    let value = e.target.value;
    this.setState((prevState, props) => {
      // console.log('creator madness', this.state);
      let { event, game, location, description, creator, participants, createdAt, eventAt } = prevState;

      if (name === 'event') {
        event = value;
      } else if (name === 'game') {
        game = value;
      } else if (name === 'location') {
        location = value;
      } else if (name === 'description') {
        description = value;
      } else if (name === 'eventAt') {
        eventAt = value;
      }

      this.props.setPayload({ event, game, location, description, creator, participants, createdAt: new Date(), eventAt: moment(eventAt, 'MM-DD-YYYY').format('MMMM Do YYYY') });
      return { event, game, location, description, creator, participants, createdAt, eventAt };
    });
  };

  // date = (
  //   <DatePicker
  //     selected={this.state.startDate}
  //     onChange={this.handleChange}
  //     showTimeSelect
  //     timeFormat="HH:mm"
  //     timeIntervals={15}
  //     dateFormat="LLL"placeholderText="Select a date"
  //   />
  // );

  render() {
    return (
      <Form>
        <Form.Group widths='equal'>
          <Form.Field required id='form-input-control-event-name' name="event" control={Input} label='Event name' placeholder='Event name' onChange={this.onChange} />
          <Form.Field required id='form-input-control-game' name="game" control={Input} label='Game' placeholder='Game' onChange={this.onChange} />
          <Form.Field required id='form-input-control-location' name="location" control={Input} label='Location' placeholder='Location' onChange={this.onChange} />
        </Form.Group>
        <Form.Field id='form-textarea-control-description' name="description" control={TextArea} label='Description' placeholder='Description' onChange={this.onChange} />
        <Form.Field required id='form-input-control-eventAt' name="eventAt" control={Input} label='Time' placeholder='mm-dd-yyy' onChange={this.onChange} />

        {/* <Form.Field id='form-button-control-public' color="blue" control={Button} content='Confirm' /> */}
      </Form>
    )
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, actions)(CreateEvent);
