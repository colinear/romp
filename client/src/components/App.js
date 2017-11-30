// Libraries
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Components
import BottomNavBar from './BottomNavBar.js';
import Footer from './Footer.js';
import HomePage from './HomePage.js';
import TopNavBar from './TopNavBar.js';

// Styles
import '../styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let content = <HomePage />
    console.log(this.props);
    return (
      <div className="App">
        <TopNavBar />
        <BottomNavBar />
        {content}
        <Footer />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(App);
