import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

class SearchPage extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    console.log(this.props.results);
    return <div>This is the search page.</div>
  }
}

function mapStateToProps({ results }) {
  return { results };
}

export default connect(mapStateToProps)(SearchPage);