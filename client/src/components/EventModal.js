import React from 'react';
import { Button, Header, Icon, Image, Modal } from 'semantic-ui-react';
import CreateEvent from './CreateEvent';

const EventModal = () => (
  <Modal trigger={<div style={{float: "right", paddingBottom: "101px"}}><Button className="create-event-button">Create Event</Button></div>}>
    <Modal.Header>Profile Picture</Modal.Header>
    <Modal.Content image>
      <Image wrapped size='medium' src='/assets/images/wireframe/image.png' />
      <Modal.Description>
        <Header>Modal Header</Header>
        <p>This is an example of expanded content that will cause the modal's dimmer to scroll</p>
        <CreateEvent src='/assets/images/wireframe/paragraph.png' />
      </Modal.Description>
    </Modal.Content>
    <Modal.Actions>
      <Button primary>
        Proceed <Icon name='right chevron' />
      </Button>
    </Modal.Actions>
  </Modal>
)

export default EventModal
