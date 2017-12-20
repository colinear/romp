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
          <Grid.Row columns={2}>
            <Grid.Column style={{paddingLeft: "12%"}}>
              <img src={cover} style={{width: "85%", height: "90%"}} />
            </Grid.Column>
            <Grid.Column textAlign="center" style={{paddingRight: "15%"}}>
              <h1>{this.state.game.name}</h1>
              <h3>Developer: n/a</h3>
              <h3>Release Date: {dateFormat(date, "mmmm yyyy")}</h3>
              <p>Genre: video game</p>
              <p>Platforms: various</p>
              <p>{this.state.game.summary}</p>
              <h4>Rating: {this.state.game.aggregated_rating ? Math.round(this.state.game.aggregated_rating) : 'N/A'}</h4>
            </Grid.Column>
            <Grid.Column>
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
