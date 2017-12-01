// Libraries
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

// Components
import BottomNavBar from './BottomNavBar.js';
import Footer from './Footer.js';
import HomePage from './HomePage.js';
import SearchPage from './SearchPage.js';
import TopNavBar from './TopNavBar.js';

// Styles
import '../styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {

    console.log(this.props);

    return (
      <BrowserRouter>
        <div className="App">
          <TopNavBar />
          <BottomNavBar />
          <Route path="/" component={HomePage} />
          <Route path="/search" component={SearchPage} />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(App);
