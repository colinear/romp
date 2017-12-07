import React from 'react';

class EventPage extends React.Component {
  componentWillMount() {
    // Make call to the server for the particular event here.
  }

  render() {
    // If no event data is loaded, then simply return "loading"
    return <div>This is the events page.</div>
  }
}

export default EventPage;