import React from 'react';
import { Dropdown, Icon, Menu } from 'semantic-ui-react';
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
    let query = (event.target.value).toLowerCase();
    this.setState({query});
  }

  handleEnter = (event) => {
    if (event.key === 'Enter') {
      this.props.search(this.state.query);
      browserHistory.push('/search');
      this.setState({
        query: ''
      })
    }
    console.log('hello', this.state.query);
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    return (
        <div style={{position: 'sticky', top: '-1px', zIndex: 500}}>
          <Menu attached="top" className="NavBar-bottom-menu">
            <Menu.Menu position="right">
              <div className="ui right aligned category search item">
                <div className="ui transparent icon input">
                  <input className="prompt" type="text" style={{width: '100vw'}} placeholder="Search by users, events, and games..." onChange={this.onChange} value={this.state.query} onKeyPress={this.handleEnter}/>
                  <i className="search link icon" />
                </div>
                <div className="results" />
              </div>
            </Menu.Menu>
          </Menu>
        </div>
    );
  }
}

export default connect(null, { search })(BottomNavBar);
