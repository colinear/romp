import React from 'react';
import ReactDOM from 'react-dom';
import { Carousel as Slider } from 'antd';
 
export default class Carousel extends React.Component {
  render() {
    return (
      <Slider>
        <div><h3>1</h3></div>
        <div><h3>2</h3></div>
        <div><h3>3</h3></div>
        <div><h3>4</h3></div>
      </Slider>
    );
  }
};