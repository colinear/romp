// Libraries
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from '../actions/actions_app.js';
import { bindActionCreators } from 'redux';

// Components
import Header from './Header.js';
import Footer from './Footer.js';
import PhotoGrid from './PhotoGrid.js';

// Styles
import '../styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props)
    return (
      <div className="App">
        <div
          onClick={() => {
            this.props.increment();
          }}
        >
          {this.props.counter}
        </div>
        <Header />
        <PhotoGrid />
        <Footer />
      </div>
    );
  }
}

function mapStateToProps(state) {
  // Whatever is returned will show up as props
  // inside of App.
  return state;
}

function mapDispatchToProps(dispatch) {
  // Whenever increment is called, the result
  // should be passed to all of our reducers.
  return bindActionCreators({ increment, decrement }, dispatch);
}

// Promote App from a component to a container - It needs to know about this
// new dispatch method, increment. Make it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(App);
