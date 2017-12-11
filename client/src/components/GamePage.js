import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Grid, Image, Card, Segment } from 'semantic-ui-react';
import dateFormat from 'dateformat';

class GamePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      game: props.games.find((game => {
        return game.id === Number(props.params.gameid)
      }))
    }
  }

  render() {
    let date = new Date(this.state.game.first_release_date).toString()
    let cover = this.state.game.cover.url.replace(/t_thumb/, 't_1080p');
    return (
      <Segment>
        <Grid centered="true">
          <Grid.Row columns={3}>
            <Grid.Column style={{paddingLeft: "12%"}}>
              <img src={cover} style={{width: "100%", height: "100%"}} />
            </Grid.Column>
            <Grid.Column textAlign="center" style={{paddingRight: "15%"}}>
              <h1>{this.state.game.name}</h1>
              <h2>{dateFormat(date, "dddd, mmmm dS, yyyy")}</h2>
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
              <p>{this.state.game.summary}</p>
            </Grid.Column>
            <Grid.Column textAlign="center">
            <p>{this.state.game.aggregated_rating ? this.state.game.aggregated_rating : 'N/A'}</p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    )
  }
}

function mapStateToProps({ games }) {
  return { games };
}

export default connect(mapStateToProps)(GamePage);
