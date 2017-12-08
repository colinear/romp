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
      <div>
        <Segment>
          <Grid centered="true">
            <Grid.Row columns={3}>
              <Grid.Column style={{paddingLeft: "12%"}}>
                <Card raised image={"https://igdb.spacechop.com/igdb/image/upload/t_cover_big/ebyoyogasgtr71mhj5ce.jpg"} />
              </Grid.Column>
              <Grid.Column textAlign="center" style={{paddingRight: "15%"}}>
                <h1>Dota 2</h1>
                <h2>Release Date</h2>
                <h3>Publisher</h3>
              </Grid.Column>
              <Grid.Column>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Grid centered="true" style={{marginTop: "-13%", marginLeft: "4%"}}>
            <Grid.Row columns={3}>
              <Grid.Column />
              <Grid.Column textAlign="left">
                <p>Genre: genre</p>
                <p>Platforms: platforms</p>
                <p>Game description <br></br>
                  more... <br></br>
                  more...<br /><br />
                </p>
              </Grid.Column>
              <Grid.Column textAlign="center">
              <p>Rating</p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        {/* <Segment>
          <Grid centered="true">
            <Grid.Row columns={2}>
              <Grid.Column textAlign="center">
                <p>Genre: genre</p>
                <p>Platforms: platforms</p>
                <p>Game description</p>
              </Grid.Column>
              <Grid.Column textAlign="center">
              <p>Rating</p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment> */}
      {/* <Grid divided='vertically'>
        <Grid.Row columns={2}>
          <Grid.Column>
            test
          </Grid.Column>
          <Grid.Column>
            test 2
          </Grid.Column>
        </Grid.Row>

        <Grid.Row columns={3}>
          <Grid.Column>
            test
          </Grid.Column>
          <Grid.Column>
            test 2
          </Grid.Column>
          <Grid.Column>
            test 3
          </Grid.Column>
        </Grid.Row>
      </Grid> */}
      </div>
    )
  }
}


export default GamePage
