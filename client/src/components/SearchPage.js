import React from 'react';
import axios from 'axios';


class SearchPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    return <div>This is the search page.</div>
  }
}

export default SearchPage;