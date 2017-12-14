import React from 'react';
import { Menu } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';

import { openAuth, signoutUser } from '../actions/index.js';

import EventModal from './EventModal';

const icon = 'data:image/svg+xml;base64,Cgk8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSIgd2lkdGg9IjEyOCIgaGVpZ2h0PSIxMjgiIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj4KCgoJCTxkZWZzPgoJCQk8bGluZWFyR3JhZGllbnQgaWQ9IkdyYWRpZW50XzIiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMTAiIHkxPSIyNSIgeDI9IjkwIiB5Mj0iMjUiIHNwcmVhZE1ldGhvZD0icGFkIj4KPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI0ZGRkZGRiIgc3RvcC1vcGFjaXR5PSIwLjIiLz4KCjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iI0ZGRkZGRiIgc3RvcC1vcGFjaXR5PSIwLjQiLz4KPC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9IkdyYWRpZW50XzMiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iOTAiIHkxPSIzMiIgeDI9IjEwIiB5Mj0iMzIiIHNwcmVhZE1ldGhvZD0icGFkIj4KPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI0ZGRkZGRiIgc3RvcC1vcGFjaXR5PSIwLjEiLz4KCjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iI0ZGRkZGRiIgc3RvcC1vcGFjaXR5PSIwLjciLz4KPC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9IkdyYWRpZW50XzQiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMTAiIHkxPSI0OSIgeDI9IjYxIiB5Mj0iNDkiIHNwcmVhZE1ldGhvZD0icGFkIj4KPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI0ZGRkZGRiIgc3RvcC1vcGFjaXR5PSIwLjEiLz4KCjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iI0ZGRkZGRiIgc3RvcC1vcGFjaXR5PSIwLjciLz4KPC9saW5lYXJHcmFkaWVudD48ZyBpZD0iYmFja2dyb3VuZCI+CjxwYXRoIGZpbGw9InVybCgjYmFja2dyb3VuZC1ncmFkaWVudCkiIHN0cm9rZT0ibm9uZSIgZD0iIE0gODQuMDUgNTkuMDUgUSA4OS44NSA1NS4zIDg5Ljg1IDUwIDg5Ljg1IDQ0LjcgODQuMDUgNDAuOTUgTCAyNC4yIDIuMzUgUSAxOC40IC0xLjQgMTQuMyAwLjg1IDEwLjE1IDMuMTUgMTAuMTUgMTAuMDUgTCAxMC4xNSA4OS45NSBRIDEwLjE1IDk2LjkgMTQuMyA5OS4xNSAxOC40IDEwMS40IDI0LjIgOTcuNjUgTCA4NC4wNSA1OS4wNSBaIi8+CjwvZz48bWFzayBpZD0ibWFzayI+CjxwYXRoIGZpbGw9IiNGRkZGRkYiIHN0cm9rZT0ibm9uZSIgZD0iIE0gODQuMDUgNTkuMDUgUSA4OS44NSA1NS4zIDg5Ljg1IDUwIDg5Ljg1IDQ0LjcgODQuMDUgNDAuOTUgTCAyNC4yIDIuMzUgUSAxOC40IC0xLjQgMTQuMyAwLjg1IDEwLjE1IDMuMTUgMTAuMTUgMTAuMDUgTCAxMC4xNSA4OS45NSBRIDEwLjE1IDk2LjkgMTQuMyA5OS4xNSAxOC40IDEwMS40IDI0LjIgOTcuNjUgTCA4NC4wNSA1OS4wNSBaIi8+CjwvbWFzaz48ZyBpZD0iZ2xvc3MtdG9wIj4KPHBhdGggZmlsbD0idXJsKCNHcmFkaWVudF8yKSIgc3Ryb2tlPSJub25lIiBkPSIgTSA4OC40IDQ1LjIgUSA4Ni45IDQyLjc1IDg0LjA1IDQwLjk1IEwgMjQuMiAyLjM1IFEgMTguNCAtMS40IDE0LjMgMC44NSAxMC4xNSAzLjE1IDEwLjE1IDEwLjA1IEwgMTAuMTUgNTAgODkuODUgNTAgUSA4OS44NSA0Ny41IDg4LjQgNDUuMiBaIi8+CjwvZz48ZyBpZD0iZ2xvc3MtcmlnaHQiPgo8cGF0aCBmaWxsPSJ1cmwoI0dyYWRpZW50XzMpIiBzdHJva2U9Im5vbmUiIGQ9IiBNIDg0LjA1IDU5LjA1IFEgODkuODUgNTUuMyA4OS44NSA1MCA4OS44NSA0NC43IDg0LjA1IDQwLjk1IEwgMjQuMiAyLjM1IFEgMTguNCAtMS40IDE0LjMgMC44NSAxMC4xNSAzLjE1IDEwLjE1IDEwLjA1IEwgMTAuMTUgNDEuNiA3NS40NSA2NC42IDg0LjA1IDU5LjA1IFoiLz4KPC9nPjxnIGlkPSJnbG9zcy1sZWZ0Ij4KPHBhdGggZmlsbD0idXJsKCNHcmFkaWVudF80KSIgc3Ryb2tlPSJub25lIiBkPSIgTSAxNC4zIDAuODUgUSAxMC4xNSAzLjE1IDEwLjE1IDEwLjA1IEwgMTAuMTUgODkuOTUgUSAxMC4xNSA5My4xIDExLjA1IDk1LjM1IDEyIDk3LjU1IDEzLjY1IDk4LjcgTCA2MS4yIDI2LjIgMjQuMiAyLjM1IFEgMTguNCAtMS40IDE0LjMgMC44NSBaIi8+CjwvZz4KCQkJCgk8bGluZWFyR3JhZGllbnQgaWQ9ImJhY2tncm91bmQtZ3JhZGllbnQiIHgxPSIwIiB5MT0iMCIgeTI9IjEiIHgyPSIwIiA+CgkJPHN0b3Agc3RvcC1jb2xvcj0iIzFiNzcyNCIgb2Zmc2V0PSIwJSIvPgoJCTxzdG9wIHN0b3AtY29sb3I9IiNmZmRlMTEiIG9mZnNldD0iMTAwJSIvPgoJPC9saW5lYXJHcmFkaWVudD4KCgkJCQoJCQkKCQkJPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJwaWN0dXJlIiB2aWV3Qm94PSIwIDAgMzIgMzIiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj4KICAgIDxzdHlsZT4KICAgICAgICAuc3Qwe2ZpbGw6IzMzMzMzMzt9CiAgICA8L3N0eWxlPgogICAgPHBhdGggY2xhc3M9InN0MCIgZD0iTTE2IDBDNy4yIDAgMCA3LjIgMCAxNnM3LjIgMTYgMTYgMTYgMTYtNy4yIDE2LTE2UzI0LjggMCAxNiAwem0wIDMwQzguMyAzMCAyIDIzLjcgMiAxNlM4LjMgMiAxNiAyczE0IDYuMyAxNCAxNC02LjMgMTQtMTQgMTR6Ii8+CiAgICA8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMjUuNyAxMS42Yy0uNC0uNC0xLS4zLTEuNC4xbC04LjMgOS04LjItOWMtLjQtLjQtMS0uNC0xLjQtLjEtLjQuNC0uNCAxLS4xIDEuNGw5IDkuOGMuMS4xLjEuMS4yLjFsLjEuMWMuMSAwIC4yLjEuNC4xLjEgMCAuMyAwIC40LS4xIDAgMCAuMSAwIC4xLS4xLjEgMCAuMS0uMS4yLS4xbDktOS44Yy40LS40LjQtMSAwLTEuNHoiLz4KPC9zdmc+CgkJCQoJCTwvZGVmcz4KCgkJCgoJCQk8dXNlIHhsaW5rOmhyZWY9IiNiYWNrZ3JvdW5kIiBmaWxsPSJ1cmwoI2JhY2tncm91bmQtZ3JhZGllbnQpIiAvPgoKCQkKCgkJCTxnIG1hc2s9InVybCgjbWFzaykiPgoJCQkJPGcgdHJhbnNmb3JtPSIKCQkJCSAgICAgICAgdHJhbnNsYXRlKAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDM1IDUwCikKICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZSg1IDEwKSByb3RhdGUoMjcwKSBzY2FsZSgwLjQ0OTk5OTk5OTk5OTk5OTk2KSAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGUoCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLTM1IC01MAopIj4KCQkJCQkJPHVzZSB4bGluazpocmVmPSIjcGljdHVyZSIgICAvPgoJCQkJPC9nPgoJCQk8L2c+CgoJCQoKCgoJPC9zdmc+Cg==';


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
          <img style={{color: 'white'}}
            src={icon}
            alt="ROMP"
          />
        </Menu.Item>

        <Menu.Item name="events" active={activeItem === 'events'} onClick={this.handleItemClick} as={Link} to="/events">
          Events
        </Menu.Item>

        {/* Show login button if not signed in. */}
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
        ) : null}

        {/* Show create event button at top if logged in. */}
        {!showLogin ? (
          <Menu.Item as={Link} position="right">
            <EventModal />
            Add an Event
          </Menu.Item>
        ) : null}

        {/* Show user's button at top if logged in. */}
        {!showLogin ? (
          <Menu.Item as={Link} active={activeItem === 'user'} to={`/user/${user._id}`}>
            <img src={user.profilePicURL} style={{borderRadius: '30px', width: '30px', height: '30px', margin: '3px'}}/>
            <span>  {user.username}</span>
          </Menu.Item>
        ) : null}

        {/* Show logout button if not signed in. */}
        {!showLogin ? (
          <Menu.Item name="logout" active={activeItem === 'logout'} active={activeItem === 'logout'}
            onClick={(e, { name }) => {
              this.handleItemClick(e, { name });
              this.props.signoutUser();
            }}
          >
            {/* adding log out button, need to toggle and show only when user logged in */}
            Logout
          </Menu.Item>
        ) : null}

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
