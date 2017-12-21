import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Card, Grid, Segment } from 'semantic-ui-react';

import SearchEventCard from './SearchEventCard';
import SearchUserCard from './SearchUserCard';
import SearchGameCard from './SearchGameCard';

class SearchPage extends React.Component {
  constructor(props) {
    super(props);
  }

  renderSearchEventCards = () => {
    const { events } = this.props.results;
    let cards = events.map((event, index) => {
      return <SearchEventCard event={event} />;
    });
    return cards;
  };

  renderSearchUserCards = () => {
    const { users } = this.props.results;
    let cards = users.map((user, index) => {
      return <SearchUserCard user={user} />;
    });
    return cards;
  };

  renderSearchGameCards = () => {
    const games = this.props.results;
    let cards = games.body.map((game, index) => {
      return <SearchGameCard game={game} />;
    });
    return cards;
  };

  render() {
    // console.log('games in searchpage: ', this.props.results.body);
    let temp = this.props.results;
    if (temp.events || temp.users) {
      return (
        <div className="SearchPage">
          <Segment>
            <Card.Group>
              {temp.users ? this.renderSearchUserCards() : null}
              {temp.events ? this.renderSearchEventCards() : null}
            </Card.Group>
          </Segment>
        </div>
      );
    } else if (temp.body) {
      return (
        <div className="SearchPage">
          <Segment>
            <Card.Group>
              {temp.body.length > 1 ? this.renderSearchGameCards() : null}
            </Card.Group>
          </Segment>
        </div>
      );
    } else {
      return <div>loading...</div>;
    }
  }
}

function mapStateToProps({ results }) {
  return { results };
}

export default connect(mapStateToProps)(SearchPage);
