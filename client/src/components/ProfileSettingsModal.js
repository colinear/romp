import React, { Component } from 'react';
import { Popup, Button, Header, Image, Modal } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { toggleProfileSettingsModal } from '../actions/index';
import ImageUploader from 'react-images-upload';
import Dropzone from 'react-dropzone';

import ProfilePictureUploader from './ProfilePictureUploader';
import axios from 'axios';

const ROOT_URL = `http://localhost:3001`;

class ProfileSettingsModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      description: '',
      picture: ''
    };
  }

  onDrop = ([{ preview }]) => {

    const xhr = new XMLHttpRequest;
    xhr.responseType = 'blob';
    xhr.onload = () => {
      let recoveredBlob = xhr.response;
      let reader = new FileReader;
      reader.onload = () => {
        let blobAsDataUrl = reader.result;
        let user = Object.assign({}, this.props.user);
        user.profilePicURL = blobAsDataUrl;
        this.setState({picture: blobAsDataUrl})
      }
      reader.readAsDataURL(recoveredBlob);
    }
    xhr.open('GET', preview);
    xhr.send();
  }

  close = () => this.props.toggleProfileSettingsModal(false);

  sendImage = () => {
    let user = Object.assign({}, this.props.user);
    user.profilePicURL = this.state.picture;
    console.log(this.state.picture);
    axios.post(`${ROOT_URL}/updateUser`, {user});
    this.close();
  };

  render() {
    const { open, dimmer } = this.state;

    return (
      <div>
        <Modal style={{ maxWidth: '250px', textAlign: 'center' }} dimmer={dimmer} open={this.props.profileSettingsOpened} onClose={this.close}>
          <Modal.Header>Select a Photo</Modal.Header>
          <Modal.Content>
            <Header style={{ textAlign: 'center' }}>Upload a Profile Picture.</Header>
            <Dropzone onDrop={this.onDrop} />
          </Modal.Content>
          <Modal.Actions>
            <Button positive icon="checkmark" labelPosition="right" content="Save" onClick={this.sendImage} />
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
