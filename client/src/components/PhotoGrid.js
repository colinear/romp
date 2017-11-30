import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Sticky } from 'semantic-ui-react';

// Styles
import '../styles/PhotoGrid.css';

const PhotoGrid = props => {
  return (
    <Grid className="PhotoGrid" fluid>
      <Row className="PhotoGrid-photos">
        <Col xs={12} md={6}>
          <img src="https://lh4.googleusercontent.com/-OowXWkgMSHI/AAAAAAAAAAI/AAAAAAAAANE/rOf2DCA2AXo/photo.jpg" />
        </Col>
        <Col xs={12} md={6}>
          <img src="https://i.pinimg.com/736x/ee/65/02/ee65020f6b7491b4c73ebf2b1abb20c5--the-heavens-lightning.jpg" />
        </Col>
        <Col xs={12} md={6}>
          <img src="https://lh5.googleusercontent.com/-5J5sg8zM-xI/AAAAAAAAAAI/AAAAAAABqdY/CAwXvPSSST8/photo.jpg" />
        </Col>
        <Col xs={12} md={6}>
          <img src="https://lh5.googleusercontent.com/-W0hkrrMAl3A/AAAAAAAAAAI/AAAAAAAAEHk/MG5aFF2cEB8/photo.jpg" />
        </Col>
      </Row>
    </Grid>
  );
};

export default PhotoGrid;
