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
    };
    this.style = {
      background: (img, x, y) => {
        let width = 290;
        let height = 400;
        let widthPercent = x / 290 * 100;
        let heightPercent = y / 400 * 100;
        if (x && y) {
          return {
            backgroundImage: `url("${img}")`,
            backgroundSize: 'auto',
            backgroundPositionX: `${widthPercent}%`,
            backgroundPositionY: `${heightPercent}%`,
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
  }

  handleMouseHover = (e) => {
      var bounds = e.target.getBoundingClientRect();
      console.log(e);
      console.log('Hovered!');
      let x = e.clientX - bounds.left;
      let y  = e.clientY - bounds.top;
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
      componentStyle = this.style.background(this.props.background, this.state.position.x, this.state.position.y);
    } else {
      componentStyle = this.style.background(this.props.background);
    }
    return <div style={componentStyle} onMouseMove={this.handleMouseHover} onMouseOut={this.handleMouseExit}></div>
  }
}
