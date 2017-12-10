import React from 'react';
import { Menu } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';

import { openAuth, signoutUser } from '../actions/index.js';

import AuthModal from './AuthModal.js';

class TopNavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  handleLoginButtonClick = () => {
    if (!this.props.auth.authenticated) {
      this.props.openAuth(true);
    }
  };

  render() {
    const { activeItem } = this.state;
    const { user, auth } = this.props;

    let showLogin = true;
    if (auth.authenticated && user.hasOwnProperty('username')) {
      showLogin = false;
    } else {
      showLogin = true;
    }

    return (
      <Menu attached="top" inverted>
        <Menu.Item as={Link} to="/homepage">
          <img
            src="https://images.vexels.com/media/users/3/145135/isolated/preview/76608161d143a7d27f20cdcc336bc09c-sun-sharp-rays-big-and-small-icon-by-vexels.png"
            alt="ROMP"
          />
        </Menu.Item>

        <Menu.Item name="events" active={activeItem === 'events'} onClick={this.handleItemClick} as={Link} to="/events">
          Events
        </Menu.Item>

        <Menu.Item name="games" active={activeItem === 'games'} onClick={this.handleItemClick} as={Link} to="/games">
          Games
        </Menu.Item>
        {showLogin ? (
          <Menu.Item
            name="sign-in"
            active={activeItem === 'sign-in'}
            position="right"
            onClick={(e, { name }) => {
              this.props.openAuth(true);
              this.handleItemClick(e, { name });
            }}
          >
            Log In
          </Menu.Item>
        ) : (
          <Menu.Item name="logout" active={activeItem === 'logout'} position="right" onClick={this.handleItemClick}>
            {/* adding log out button, need to toggle and show only when user logged in */}
            <div onClick={this.props.signoutUser}>Logout</div>
          </Menu.Item>
        )}
      </Menu>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ openAuth, signoutUser }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TopNavBar);
