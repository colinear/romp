// Libraries
import React, { Component } from 'react';

// Components
import Header from './Header.js';
import Footer from './Footer.js';

import PhotoGrid from './PhotoGrid.js';

// Styles
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <PhotoGrid />
        <Footer />
      </div>
    );
  }
}

export default App;
