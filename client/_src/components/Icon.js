import React from 'react';
import icon from '../assets/homer-simpson.svg';
import '../styles/Icon.css';

export default class Icon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ''
    };
  }

  render() {
    return (
      <div>
        <img src={icon} className="Icon" alt="logo" />
      </div>
    );
  }
}
