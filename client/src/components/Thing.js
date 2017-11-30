import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import { Segment } from 'semantic-ui-react';
import { Parallax, Background } from 'react-parallax';
import 'pure-react-carousel/dist/react-carousel.es.css';

export default class extends React.Component {
  render() {
    return (
      <Segment>
        <CarouselProvider naturalSlideWidth={100} naturalSlideHeight={20} totalSlides={3}>
          <Slider>
            <Slide index={0}>
              <Parallax strength={400}>
                <Background>
                  <img src="http://www.fillmurray.com/400/300" />
                  <div
                    style={{
                      width: 800,
                      height: 300,
                      backgroundColor: '#450093'
                    }}
                  />
                  <img src="http://www.fillmurray.com/500/300" />
                </Background>
              </Parallax>
            </Slide>
            <Slide index={1}>I am the second Slide.</Slide>
            <Slide index={2}>I am the third Slide.</Slide>
          </Slider>
          <ButtonBack>Back</ButtonBack>
          <ButtonNext>Next</ButtonNext>
        </CarouselProvider>
      </Segment>
    );
  }
}
