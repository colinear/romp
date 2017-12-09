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
    console.log(events);
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
    const { games } = this.props.results;
    let cards = games.map((game, index) => {
      return <SearchGameCard game={game} />;
    });
    return cards;
  };

  render() {
    console.log(this.props.results);
    if (this.props.results) {
      return (
        <div className="SearchPage">
          <Segment>
            <Card.Group>
              {this.renderSearchUserCards()}
              {this.renderSearchGameCards()}
              {this.renderSearchEventCards()}
            </Card.Group>
          </Segment>
        </div>
      );
    } else {
      return <div>Loading...</div>;
    }
  }
}

function mapStateToProps({ results }) {
  return { results };
}

export default connect(mapStateToProps)(SearchPage);
