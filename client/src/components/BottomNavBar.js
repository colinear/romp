import React from 'react';
import { Dropdown, Icon, Menu, Sticky } from 'semantic-ui-react';
import { search } from '../actions/index.js';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';


class BottomNavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    }
  }

  onChange = (event) => {
    let query = event.target.value;
    this.setState({query});
  }

  handleEnter = (event) => {
    if (event.key === 'Enter') {
      this.props.search(this.state.query);
      browserHistory.push('/search');
    }
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    return (
      <Sticky>
        <div>
          <Menu attached="top" className="NavBar-bottom-menu">
            <Dropdown item icon="wrench" simple>
              <Dropdown.Menu>
                <Dropdown.Item>
                  <Icon name="dropdown" />
                  <span className="text">New</span>

                  <Dropdown.Menu>
                    <Dropdown.Item>Document</Dropdown.Item>
                    <Dropdown.Item>Image</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown.Item>
                <Dropdown.Item>Open</Dropdown.Item>
                <Dropdown.Item>Save...</Dropdown.Item>
                <Dropdown.Item>Edit Permissions</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Header>Export</Dropdown.Header>
                <Dropdown.Item>Share</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Menu.Menu position="right">
              <div className="ui right aligned category search item">
                <div className="ui transparent icon input">
                  <input className="prompt" type="text" placeholder="Search animals..." onChange={this.onChange} onKeyPress={this.handleEnter}/>
                  <i className="search link icon" />
                </div>
                <div className="results" />
              </div>
            </Menu.Menu>
          </Menu>
        </div>
      </Sticky>
    );
  }
}

export default connect(null, { search })(BottomNavBar);