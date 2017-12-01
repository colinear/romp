import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import { Segment } from 'semantic-ui-react';
import 'pure-react-carousel/dist/react-carousel.es.css';

import '../styles/Carousel.css';

export default class extends React.Component {
  render() {
    console.log(document.getElementsByClassName('carousel__next-button'));
    return (
      <Segment style={styles.slider}>
        <CarouselProvider naturalSlideWidth={100} naturalSlideHeight={40} totalSlides={3} touchEnabled>
          <Slider>
            <Slide index={0} style={styles.slide('https://imgur.com/muZE5H7')}>
              <div className="Carousel-Slide-bottom-text">
                <p>Pretty flowers.</p>
              </div>
            </Slide>
            <Slide index={1} style={styles.slide('https://imgur.com/2tKtziE')}>
              <div className="Carousel-Slide-bottom-text">
                <p>Pretty flowers.</p>
              </div>
            </Slide>
            <Slide index={2} style={styles.slide('https://imgur.com/O0BvsKO')}>
              <div className="Carousel-Slide-bottom-text">
                <p>Pretty flowers.</p>
              </div>
            </Slide>
          </Slider>
          <div className="Thing-buttons">
            <ButtonBack>
              <img className="Thing-button-left" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Arrow_sans_left.svg/2000px-Arrow_sans_left.svg.png" />
            </ButtonBack>
            <ButtonNext>
              <img className="Thing-button-right" src="https://cdn2.iconfinder.com/data/icons/picol-vector/32/arrow_sans_right-512.png" />
            </ButtonNext>
          </div>
        </CarouselProvider>
      </Segment>
    );
  }
}

const styles = {
  slide: img => {
    return {
      backgroundImage: `url(${img})`
    };
  }
};
