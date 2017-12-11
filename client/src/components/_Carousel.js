import React, { Component } from 'react';
import { render } from 'react-dom';
import { Icon } from 'semantic-ui-react';
import '../styles/carousel.css';

// Data for carousel
const carouselSlidesData = [
  {
    content:
      'Tomorrow, you will be released. If you are bored of brawling with thieves and want to achieve something there is a rare blue flower that grows on the eastern slopes. Pick one of these flowers. If you can carry it to the top of the mountain, you may find what you were looking for in the first place.',
    author: 'Bane',
    source: 'facebook',
    background:
      'https://na.leagueoflegends.com/sites/default/files/upload/art/akali_vs_baron_3.jpg'
  },
  {
    content: 'You have learn to bury your guilt with anger. I will teach you to confront it and to face the truth.',
    author: "Ra's Al Ghul",
    source: 'Snapchat',
    background:
      'https://images4.alphacoders.com/600/thumb-1920-600528.png'
  },
  {
    content:
      "Introduce a little anarchy, upset the established order and everything becomes chaos. I'm an agent of chaos. Oh, and you know the thing about chaos? It's fair.",
    author: 'Joker',
    source: 'facebook',
    background:
      'https://i.imgur.com/O0BvsKO.jpg'
  },
  {
    content:
      "I can't do that as Bruce Wayne... as a man. I'm flesh and blood. I can be ignored, destroyed. But as a symbol, I can be incorruptible, I can be everlasting.",
    author: 'Bruce Wayne',
    source: 'facebook',
    background:
      'https://images2.alphacoders.com/474/thumb-1920-474206.jpg'
  },
  {
    content: "But it's not who you are underneath... it's what you do that defines you.",
    author: 'Rachel Dawes',
    source: 'twitter',
    background:
      'http://nxcache.nexon.net/spotlight/196/00Htc-0374509c-8da4-4f85-8fd3-f5b6e664ac47.jpg'
  },
  {
    content:
      "When their enemies were at the gates the Romans would suspend democracy and appoint one man to protect the city. It wasn't considered an honor, it was a public service.",
    author: 'John Blake',
    source: 'Google+',
    background:
      'https://wallpapercave.com/wp/BWd0wj5.jpg'
  },
  {
    content: "Master Wayne, you've been gone a long time. You look very fashionable. Apart from the mud.",
    author: 'Alfred Pennyworth',
    source: 'twitter',
    background:
      'http://media.blizzard.com/wow/media/wallpapers/other/legion/legion-2560x1440-wide.jpg'
  }
];

// Component for left arrow
class CarouselLeftArrow extends Component {
  render() {
    return (
      <a href="#" className="carousel__arrow carousel__arrow--left" onClick={this.props.onClick}>
        <Icon name="chevron left" size="huge" />
      </a>
    );
  }
}

// Component for right arrow
class CarouselRightArrow extends Component {
  render() {
    return (
      <a href="#" className="carousel__arrow carousel__arrow--right" onClick={this.props.onClick}>
        <Icon name="chevron right" size="huge" />
      </a>
    );
  }
}

// Component for carousel indicator
class CarouselIndicator extends Component {
  render() {
    return (
      <li>
        <a
          className={
            this.props.index == this.props.activeIndex
              ? 'carousel__indicator carousel__indicator--active'
              : 'carousel__indicator'
          }
          onClick={this.props.onClick}
        />
      </li>
    );
  }
}

// Component for slide
export class CarouselSlide extends Component {
  render() {
    return (
      <div style={{ position: 'relative', top: '5vh', width: '100%', height: '100%' }}>
        <li
          className={
            this.props.index == this.props.activeIndex ? 'carousel__slide carousel__slide--active' : 'carousel__slide'
          }
        >
          <div>
            <p
              className="carousel-slide__content text-shadow"
              style={{
                width: '100%',
                color: 'white',
                width: '100%',
                height: '20vh',
                justifyContent: 'center',
                alignContent: 'true',
                padding: '25px 25px 10px 25px',
                borderRadius: '5px'
              }}
            >
              {this.props.slide.content}
              <p>
                <strong className="carousel-slide__author">{this.props.slide.author} </strong>
                <small className="carousel-slide__source">--{this.props.slide.source}</small>
              </p>
            </p>
          </div>
        </li>
      </div>
    );
  }
}

// Carousel component
export class Carousel extends Component {
  constructor(props) {
    super(props);

    this.goToSlide = this.goToSlide.bind(this);
    this.goToPrevSlide = this.goToPrevSlide.bind(this);
    this.goToNextSlide = this.goToNextSlide.bind(this);

    this.state = {
      activeIndex: 0
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.goToNextSlide();
    }, 5000);
  }

  goToSlide(index) {
    this.setState({
      activeIndex: index
    });
  }

  goToPrevSlide(e) {
    e.preventDefault();

    let index = this.state.activeIndex;
    let { slides } = this.props;
    let slidesLength = slides.length;

    if (index < 1) {
      index = slidesLength;
    }

    --index;

    this.setState({
      activeIndex: index
    });
  }

  goToNextSlide(e) {
    if (e) {
      e.preventDefault();
    }

    let index = this.state.activeIndex;
    let { slides } = this.props;
    let slidesLength = slides.length - 1;

    if (index === slidesLength) {
      index = -1;
    }

    ++index;

    this.setState({
      activeIndex: index
    });
  }

  render() {
    return (
      <div
        className="carousel parallax"
        style={{ backgroundImage: `url("${carouselSlidesData[this.state.activeIndex].background}")` }}
      >
        <CarouselLeftArrow onClick={e => this.goToPrevSlide(e)} />
        <div>
          <ul className="carousel__slides" style={{ width: '100%', height: '100%' }}>
            {this.props.slides.map((slide, index) => (
              <CarouselSlide key={index} index={index} activeIndex={this.state.activeIndex} slide={slide} />
            ))}
          </ul>
        </div>

        <CarouselRightArrow onClick={e => this.goToNextSlide(e)} />
        <div style={{ position: 'absolute', bottom: '15%', width: '100%' }}>
          <ul className="carousel__indicators" style={{ height: '20px', position: 'relative', top: '45px' }}>
            {this.props.slides.map((slide, index) => (
              <CarouselIndicator
                key={index}
                index={index}
                activeIndex={this.state.activeIndex}
                onClick={e => this.goToSlide(index)}
              />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

// Render Carousel component
// render(<Carousel slides={carouselSlidesData} />, carouselContainer);

export default class _Carousel extends React.Component {
  render() {
    return <Carousel slides={carouselSlidesData} />;
  }
}
