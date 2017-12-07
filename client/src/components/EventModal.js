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
      <Modal trigger={<div style={{float: "right", paddingBottom: "101px"}}><Button onClick={this.handleOpen} className="create-event-button">Create Event</Button></div>} open={this.state.modalOpen}
        onClose={this.handleClose}>
        <Modal.Header>Profile Picture</Modal.Header>
        <Modal.Content image>
          <Image wrapped size='medium' src='/assets/images/wireframe/image.png' />
          <Modal.Description>
            <Header>Modal Header</Header>
            <p>This is an example of expanded content that will cause the modal's dimmer to scroll</p>
            <CreateEvent src='/assets/images/wireframe/paragraph.png' setPayload={this.setPayload} />
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button primary onClick={this.handleEvent}>
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
