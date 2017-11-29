// Libraries
import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

// Components
import Header from './Header.js';
import Footer from './Footer.js';

// Styles
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Grid fluid>
          <Row className="App-photos">
            <Col xs={12} md={3}>
              <img src="https://lh4.googleusercontent.com/-OowXWkgMSHI/AAAAAAAAAAI/AAAAAAAAANE/rOf2DCA2AXo/photo.jpg" />
            </Col>
            <Col xs={12} md={3}>
              <img src="https://i.pinimg.com/736x/ee/65/02/ee65020f6b7491b4c73ebf2b1abb20c5--the-heavens-lightning.jpg" />
            </Col>
            <Col xs={12} md={3}>
              <img src="https://lh5.googleusercontent.com/-5J5sg8zM-xI/AAAAAAAAAAI/AAAAAAABqdY/CAwXvPSSST8/photo.jpg" />
            </Col>
            <Col xs={12} md={3}>
              <img src="https://lh5.googleusercontent.com/-W0hkrrMAl3A/AAAAAAAAAAI/AAAAAAAAEHk/MG5aFF2cEB8/photo.jpg" />
            </Col>
          </Row>
        </Grid>
        <Footer />
      </div>
    );
  }
}

export default App;
