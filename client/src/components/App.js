import React from 'react';
import { Component } from 'react';

import BottomNavBar from './BottomNavBar';
import AuthModal from './AuthModal';
import TopNavBar from './TopNavBar';
import Footer from './Footer';
import RandomUserGenerator from './RandomUserGenerator';
import RandomEventGenerator from './RandomEventGenerator';
import EventModal from './EventModal';

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
        <EventModal />
        {this.props.children}
      </div>
    );
  }
}
