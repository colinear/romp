import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Grid, Image, Card, Segment } from 'semantic-ui-react';
import axios from 'axios';

const ROOT_URL = 'http://localhost:3001';

class GamePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      game: null,
    }
  }
  render() {
    return (
      <Segment>
        <Grid centered="true">
          <Grid.Row columns={3}>
            <Grid.Column style={{paddingLeft: "12%"}}>
              <img src={this.props.games[1].cover.url} style={{width: "100%", height: "100%"}} />
            </Grid.Column>
            <Grid.Column textAlign="center" style={{paddingRight: "15%"}}>
              <h1>{this.props.games[1].name}</h1>
              <h2>{this.props.games[1].first_release_date}</h2>
              <h3>Developer</h3>
            </Grid.Column>
            <Grid.Column>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Grid centered="true" style={{marginLeft: "4%"}}>
          <Grid.Row columns={3}>
            <Grid.Column />
            <Grid.Column textAlign="left">
              <p>Genre: genre</p>
              <p>Platforms: platforms</p>
              <p>{this.props.games[1].summary}</p>
            </Grid.Column>
            <Grid.Column textAlign="center">
            <p>{this.props.games[1].aggregated_rating ? this.props.games[1].aggregated_rating : 'N/A'}</p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    )
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(GamePage);
