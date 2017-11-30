import React from 'react';
import { Dropdown, Icon, Menu, Segment, Sticky } from 'semantic-ui-react';

import 'semantic-ui-css/semantic.min.css';

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
          <img src="../assets/sun.rays.small.png" />
        </Menu.Item>

        <Menu.Item name="features" active={activeItem === 'features'} onClick={this.handleItemClick}>
          Features
        </Menu.Item>

        <Menu.Item name="testimonials" active={activeItem === 'testimonials'} onClick={this.handleItemClick}>
          Testimonials
        </Menu.Item>

        <Menu.Item name="sign-in" active={activeItem === 'sign-in'} onClick={this.handleItemClick}>
          Sign-in
        </Menu.Item>
      </Menu>
    );
  }
}

export default BottomNavBar;
