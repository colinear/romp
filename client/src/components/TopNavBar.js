import React from 'react';
import { Menu } from 'semantic-ui-react';

import 'semantic-ui-css/semantic.min.css';

import CredentialsModal from './CredentialsModal.js';

class BottomNavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;
    return (
      <Menu attached="top" inverted>
        <Menu.Item>
          <img
            src="https://images.vexels.com/media/users/3/145135/isolated/preview/76608161d143a7d27f20cdcc336bc09c-sun-sharp-rays-big-and-small-icon-by-vexels.png"
            alt="ROMP"
          />
        </Menu.Item>

        <Menu.Item name="features" active={activeItem === 'features'} onClick={this.handleItemClick}>
          Features
        </Menu.Item>

        <Menu.Item name="testimonials" active={activeItem === 'testimonials'} onClick={this.handleItemClick}>
          Testimonials
        </Menu.Item>

        <Menu.Item name="sign-in" active={activeItem === 'sign-in'} onClick={this.handleItemClick}>
          <CredentialsModal />
        </Menu.Item>
      </Menu>
    );
  }
}

export default BottomNavBar;
