import React from 'react';
import homerSimpson from '../assets/homer-simpson.svg';
import '../styles/Test.css';

export default class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ''
    };
  }

  render() {
    return (
      <div>
        <img src={homerSimpson} className="homer-simpson" alt="logo" />
        Hello! HELLOOOO.. Goodbye
      </div>
    );
  }
}
