import React, { Component } from 'react';
import { Button, Header, Icon, Image, Modal } from 'semantic-ui-react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import CreateEvent from './CreateEvent';

class EventModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      payload: {}
    };
  }

  handleEvent = () => {
    const { event, game, location, description } = this.state.payload;
    this.props.createEvent({ event, game, location, description });
    this.setState({modalOpen: false});
  };

  handleOpen = () => {
    this.setState({ modalOpen: true });
  };

  handleClose = () => {
    this.setState({ modalOpen: false });
  };

  setPayload = fields => {
    this.setState({ payload: {...fields } });
  };

  render() {
    return (
      <Modal size="small" trigger={<div style={{float: "right"}}><Button onClick={this.handleOpen} className="create-event-button">Create Event</Button></div>} open={this.state.modalOpen}
        onClose={this.handleClose}>
        <Modal.Content image>
          <Modal.Description>
            <Header>Create New Event</Header>
            {/* <p>text here maybe</p> */}
            <CreateEvent src='/assets/images/wireframe/paragraph.png' setPayload={this.setPayload} />
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions style={{height: "3.5rem"}}>
          <Button style={{marginTop: "-7.5px"}} primary onClick={this.handleEvent}>
            Proceed <Icon name='right chevron' />
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, actions)(EventModal);
