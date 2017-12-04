import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions } from '../actions/index.js';

// import TwitchVideoEmbed from './TwitchVideoEmbed.js';

class TwitchVideos extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    let videos = <div>Loading...</div>;
    if (this.props.posts.streams) {
      // Map streams to divs that will contain the embeddable twitch videos. 
      videos = this.props.posts.streams.map((video, index) => {
        return (
          <span>{video._id}</span>
          // <TwitchVideoEmbed video={video._id} />
        );
      });
    // Limit videos to two for easier display for now.
      videos = videos.slice(0, 2);
    }
    return <div>Video IDs coming back: {videos}</div>;
  }
}

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TwitchVideos);
