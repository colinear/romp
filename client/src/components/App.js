import React from 'react';
import { Component } from 'react';

import BottomNavBar from './BottomNavBar';
import AuthModal from './AuthModal';
import TopNavBar from './TopNavBar';
import Footer from './Footer';
// import RandomTeamGenerator from './RandomTeamGenerator';
import EventModal from './EventModal';
import GamePage from './GamePage'

import 'semantic-ui-css/semantic.min.css';

export default class App extends Component {
  render() {
    return (
      <div>
        <TopNavBar />
        <BottomNavBar />
        <AuthModal />

        {this.props.children}

      </div>
    );
  }
}
