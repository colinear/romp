import React from 'react';
import { Component } from 'react';

import BottomNavBar from './BottomNavBar';
import TopNavBar from './TopNavBar';


import 'semantic-ui-css/semantic.min.css';

export default class App extends Component {
  render() {
    return (
      <div>
        <TopNavBar />
        <BottomNavBar />
        {this.props.children}
      </div>
    );
  }
}
