import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import { Segment } from 'semantic-ui-react';
import 'pure-react-carousel/dist/react-carousel.es.css';

import '../styles/Carousel.css';

export default class Carousel extends React.Component {
  render() {
    return (
      <div style={styles.paddingAdjust}>
        <Segment style={styles.slider}>
          <CarouselProvider naturalSlideWidth={2} naturalSlideHeight={1} totalSlides={3} touchEnabled>
            <Slider>
              <Slide index={0} style={styles.slide('https://i.imgur.com/O0BvsKO.jpg')}>
                <div className="Carousel-Slide-bottom-text">
                  <p>Heart of the cards</p>
                </div>
              </Slide>
              <Slide index={1} style={styles.slide('https://i.ytimg.com/vi/BGtROJeMPeE/maxresdefault.jpg')}>
                <div className="Carousel-Slide-bottom-text">
                  <p>Leage of Legends Tournament</p>
                </div>
              </Slide>
              <Slide index={2} style={styles.slide('https://i.imgur.com/muZE5H7.jpg')}>
                <div className="Carousel-Slide-bottom-text">
                  <p>Flowers</p>
                </div>
              </Slide>
            </Slider>
            <div className="Carousel-buttons" style={styles.buttonHolder}>
              <ButtonBack>
                <img
                  className="Carousel-button-left"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Arrow_sans_left.svg/2000px-Arrow_sans_left.svg.png"
                  alt="back arrow"
                />
              </ButtonBack>
              <ButtonNext>
                <img
                  className="Carousel-button-right"
                  src="https://cdn2.iconfinder.com/data/icons/picol-vector/32/arrow_sans_right-512.png"
                  alt="forward arrow"
                />
              </ButtonNext>
            </div>
          </CarouselProvider>
        </Segment>
      </div>
    );
  }
}

const styles = {
  slide: img => {
    return {
      backgroundImage: `url(${img})`,
      backgroundSize: 'cover',
      backgroundPosition: 'bottom'
    };
  },
  buttonHolder: {
    maxHeight: 0
  },
  paddingAdjust: {
    padding: '0 80px 0 80px',
    maxHeight: '100vh'
  }
};
