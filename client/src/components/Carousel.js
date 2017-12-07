import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import { Segment } from 'semantic-ui-react';
import { connect } from 'react-redux';
import 'pure-react-carousel/dist/react-carousel.es.css';

import '../styles/Carousel.css';

const Carousel = (props) => {
  return (
    <div style={styles.paddingAdjust}>
      <Segment style={styles.slider}>
        <CarouselProvider naturalSlideWidth={2} naturalSlideHeight={1} totalSlides={3} touchEnabled>
          <Slider>

            {props.events.map((event, index) => {
              // console.log('event in Carousel', event)
              return <Slide 
                key={event._id.$oid}
                index={index}
                style={styles.slide(event.pictureURL)}
                // onClick={() => handleEventSlideClick(event)}
              >
                <div className="Carousel-Slide-bottom-text">
                  <h2 style={{margin: 0}}>{event.name}</h2>
                  <h3 style={{margin: 0}}>{event.description}</h3>
                  <h5 style={{margin: 0}}>{event.notes}</h5>
                </div>
              </Slide>
            })}
      
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

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(Carousel);
