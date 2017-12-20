import React from 'react';
import { Card } from 'semantic-ui-react';


const SearchGameCard = (props) => {
  console.log('props in SearchGameCard', props)
  let cover = props.game.cover.url.substring(0, 35) + props.game.cover.url.substring(43);
  let url = props.game.cover.url;
  cover = url.replace(/t_thumb/, 't_1080p');
  return (
    <div
      className="card"
      onClick={() => {
        // browserHistory.push(`/games/${props.game.id}`);
      }}
    >
      <div className="GameCard-image" style={{backgroundImage: `url("${cover}")`}}>
      </div>
      <div className="content">
        <div className="header">{props.game.name}</div>
        <div className="meta">
          <a>{}</a>
        </div>
        <div className="description">{props.game.description}</div>
      </div>
      <div className="extra content">
        {/* <span className="right floated">
          <StarRatingComponent
            name="star-rating"
            value={starRating}
            starCount={5}
          />
        </span> */}
        <span>
          <i className="user icon" />
          {0 /* add players who favorited */} Players
        </span>
      </div>
    </div>
  );
}

export default SearchGameCard;
