import React from 'react';
import { Component } from 'react';

import BottomNavBar from './BottomNavBar';
import AuthModal from './AuthModal';
import TopNavBar from './TopNavBar';
import Footer from './Footer';
import RandomUserGenerator from './RandomUserGenerator';
// import RandomTeamGenerator from './RandomTeamGenerator';
import EventModal from './EventModal';
import RandomEventGenerator from './RandomEventGenerator';
import RandomTeamGenerator from './RandomTeamGenerator';
import GamePage from './GamePage'

import 'semantic-ui-css/semantic.min.css';

export default class App extends Component {
  render() {
    return (
      <div>
        <TopNavBar />
        <BottomNavBar />
        <AuthModal />
        <RandomUserGenerator />
        <RandomEventGenerator />
        <RandomTeamGenerator />

        {this.props.children}

        <EventModal />
      </div>
    );
  }
}
