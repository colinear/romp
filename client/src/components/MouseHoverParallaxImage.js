import React from 'react';

export default class MouseHoverParallaxImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
      position: {
        x: 0,
        y: 0
      }
    }
  }

  handleMouseHover = (e) => {
      console.log('Hovered!');
      let x = e.clientX;
      let y  = e.clientY;
      console.log(x, y);
      this.setState({hover: true, position: {x, y}});
  }

  handleMouseExit = (e) => {
    this.setState({hover: false});
  }

  render() {
    let componentStyle;
    console.log(this.state);
    if (this.state.hover) {
      componentStyle = style.background(this.props.background, this.state.position.x, this.state.position.y);
    } else {
      componentStyle = style.background(this.props.background);
    }
    return <div style={componentStyle} onMouseMove={this.handleMouseHover} onMouseOut={this.handleMouseExit}></div>
  }
}

const style = {
  background: (img, x, y) => {
    let width = 290;
    let height = 400;
    let widthPercent = x / 290 * 100;
    let heightPercent = y / 290 * 100;
    if (x && y) {
      return {
        backgroundImage: `url("${img}")`,
        backgroundSize: 'auto',
        backgroundPositionX: `${widthPercent * 0.5}%`,
        backgroundPositionY: `${heightPercent * 0.5}%`,
        height: '400px',
        width: '100%'
      }
    } else {
      return {
        backgroundImage: `url("${img}")`,
        backgroundSize: 'cover',
        height: '400px',
        width: '100%'
      }
    }
  }
};