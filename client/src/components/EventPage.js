import React from 'react';
import { connect } from 'react-redux';
import { getEvent } from '../actions/index.js';
import { Grid, Image, Segment } from 'semantic-ui-react';

const fillerImage = 'http://www.fillmurray.com/300/200';



class EventPage extends React.Component {
  componentWillMount() {
    // Make call to the server for the particular event here using an action.
    this.props.getEvent(this.props.routeParams.eventid);
  }

  render() {
    if (this.props.event) {
      // Pull properties off event.
      let { name, description, liveStream, spectators, teams, image } = this.props.event.data;
      console.log(this.props.event);
      // If image is undefined, make it a filler image.
      image = !this.props.image ? fillerImage : image;

      return (
        <Segment>
          <Grid>
            <Grid.Row>
              <Grid.Column width={3}>
                <Image src={image} />
              </Grid.Column>
              <Grid.Column width={13}>
                <h1>{name}</h1>
                <p>{description}</p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      );
    } else {
      return <div>Loading...</div>;
    }
  }
}

function mapStateToProps({ event }) {
  return { event };
}

export default connect(mapStateToProps, { getEvent })(EventPage);
