import React from 'react';
import 'twitch-embed';

export default class TwitchVideoPlayer extends React.Component {
	constructor(props) {
		super(props);
		this.player = null;
		this.state = {
			id: null
		};
	}

	componentWillMount() {
		this.setId();
	}

	componentDidMount() {
		this.setPlayer();
	}

	componentDidUpdate() {
		this.setPlayer();
	}

	componentWillReceiveProps(nextProps) {
		this.setId();
		this.setPlayer();

		//can check for props and call player functions here
	}

	setId() {
		if (!this.state.id) {
			if (this.props.channel) {
				this.channel = true;
				this.setState({
					id: `twitch-${this.props.channel}`
				});
			}
			if (this.props.video) {
				this.channel = false;
				this.setState({
					id: `twitch-${this.props.video}`
				});
			}
		}
	}

	setPlayer() {
		if (!this.player) {
			const options = {};
			if (this.channel) {
				options.channel = this.props.channel;
			} else {
				options.video = this.props.video;
			}
			if (typeof window !== 'undefined' && window.Twitch) {
				this.player = new window.Twitch.Player(this.state.id, options);
			}
		}
	}

	render() {
		return (
			<div id={this.state.id || ''} className="twitch-video-embed"></div>
		);
	}
}