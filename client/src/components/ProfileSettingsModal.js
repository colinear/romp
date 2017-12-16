import React, { Component } from 'react';
import { Popup, Button, Header, Image, Modal } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { toggleProfileSettingsModal } from '../actions/index';

import ProfilePictureUploader from './ProfilePictureUploader';

class ProfileSettingsModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      description: ''
    }
  }

  close = () => this.props.toggleProfileSettingsModal(false);

  render() {
    const { open, dimmer } = this.state;

    return (
      <div>
        <Modal dimmer={dimmer} open={this.props.profileSettingsOpened} onClose={this.close}>
          <Modal.Header>Select a Photo</Modal.Header>
          <Modal.Content image>
            <Image wrapped size="medium" src="https://www.reduceimages.com/img/image-after.jpg" />
            <Modal.Description>
              <Header>Default Profile Image</Header>
              <ProfilePictureUploader />
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button positive icon="checkmark" labelPosition="right" content="Save" onClick={this.close} />
          </Modal.Actions>
        </Modal>
      </div>
    );
  }
}

function mapStateToProps({ profileSettingsOpened }) {
  return { profileSettingsOpened };
}

export default connect(mapStateToProps, { toggleProfileSettingsModal })(ProfileSettingsModal);
