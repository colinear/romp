// Libraries
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import actions from '../actions/index.js';

// Components
import BottomNavBar from './BottomNavBar.js';
import Footer from './Footer.js';
import HomePage from './HomePage.js';
import SearchPage from './SearchPage.js';
import TopNavBar from './TopNavBar.js';

// Styles
import '../styles/App.css';

class App extends Component {
  render() {
    console.log('App props: ', this.props);

    return (
      <BrowserRouter>
        <div className="App">
          <div className="App-navbars">
            <TopNavBar />
            <BottomNavBar />
          </div>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/search" component={SearchPage} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

// export default connect(mapStateToProps, mapDispatchToProps)(App);
export default App;
