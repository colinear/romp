import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Segment } from 'semantic-ui-react';
import { browserHistory } from 'react-router';
import StarRatingComponent from 'react-star-rating-component';
import '../styles/GameCard.css';

import Parallax from './Parallax';

class SearchGameCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      games: props.game
    }
  }

  render() {
    console.log('PROPS in SearchGameCard: ', this.props)
    console.log('STATE in SearchGameCard: ', this.state)
    let rating;
    if (this.state.games.total_rating) {
      rating = this.state.games.total_rating;
    } else if (this.state.games.aggregated_rating) {
      rating = this.state.games.aggregated_rating;
    } else if (this.state.games.rating) {
      rating = this.state.games.rating;
    }
    if (rating) {
      rating = Math.floor(rating);
    } else {
      rating = 'n/a';
    }

    let description;
    if (this.state.games.summary) {
      description = this.state.games.summary;
    } else if (this.state.games.aggregated_rating) {
      description = this.state.games.storyline;
    }
    if (description) {
      description = description.slice(0, 240) + '...';
    }

    let starRating = Math.round(rating / 14);

    let cover = this.state.games.cover.url.substring(0, 35) + this.state.games.cover.url.substring(43);
    let url = this.state.games.cover.url;
    cover = url.replace(/t_thumb/, 't_1080p');

    return (
      <div
        className="card"
        onClick={() => {
          browserHistory.push(`/games/${this.state.games.id}`);
        }}
      >
        {/* <div className="SearchGameCard-image" style={{ backgroundImage: `url("${cover}")` }} /> */}
        <Parallax.Mouse background={cover} />
        <div className="content">
          <div className="header">{this.state.games.name}</div>
          <div className="meta">
            <a>{}</a>
          </div>
          <div className="description">{description}</div>
        </div>
        <div className="extra content">
          <span className="right floated">
            <StarRatingComponent
              name="star-rating" 
              value={starRating}
              starCount={7} /* number of icons in rating, default `5` */
            />
          </span>
          <span>
            <i className="user icon" />
            {0 /* add payers who favorited */} Players
          </span>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ games }) {
  return { games };
}

export default connect(mapStateToProps)(SearchGameCard);
