import React, { Component } from 'react';
import { Form, Input, TextArea, Button, Icon } from 'semantic-ui-react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../actions';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';


class CreateEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      event: '',
      game: '',
      location: '',
      description: '',
      creator: props.user,
      participants: [props.user],
      createdAt: '',
      eventAt: '',
    };
  }

  handleChange = date => {
    this.setState({
      eventAt: date
    });
  }

  onChange = e => {
    console.log('event: ', e.target)
    let name = e.target.name;
    let value = e.target.value;
    this.setState((prevState, props) => {
      let { event, game, location, description, creator, participants, createdAt, eventAt} = prevState;

      if (name === 'event') {
        event = value;
      } else if (name === 'game') {
        game = value;
      } else if (name === 'location') {
        location = value;
      } else if (name === 'description') {
        description = value;
      }

      this.props.setPayload({ event, game, location, description, creator, participants, createdAt: new Date(), eventAt: moment(this.state.eventAt._d).format('MMMM Do YYYY, h:mm a') });
      return { event, game, location, description, creator, participants, createdAt, eventAt };
    });
  };

  render() {
    return (
      <Form>
        <p>Time</p>
          <DatePicker
            name='eventAt'
            selected={this.state.eventAt}
            onChange={this.handleChange}
            showTimeSelect
            timeFormat='HH:mm'
            timeIntervals={30}
            dateFormat="LLL"
            placeholderText='Select a date'
          />
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
