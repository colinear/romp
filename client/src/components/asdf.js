import React, { Component } from 'react';
import { Form, Grid, Image, Transition, Segment } from 'semantic-ui-react';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';

const transitions = [
  'scale',
  'fade',
  'fade up',
  'fade down',
  'fade left',
  'fade right',
  'horizontal flip',
  'vertical flip',
  'drop',
  'fly left',
  'fly right',
  'fly up',
  'fly down',
  'swing left',
  'swing right',
  'swing up',
  'swing down',
  'browse',
  'browse right',
  'slide down',
  'slide up',
  'slide right'
];

const photos = [
  'https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/68dd54ca-60cf-4ef7-898b-26d7cbe48ec7/10-dithering-opt.jpg',
  'https://www.w3schools.com/css/trolltunga.jpg',
  'https://www.w3schools.com/w3css/img_lights.jpg'
];
const options = transitions.map(name => ({ key: name, text: name, value: name }));

export default class TransitionExampleSingleExplorer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animation: transitions[10],
      duration: 500,
      visible: true,
      currentPhoto: 0
    };
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  handleVisibility = () =>
    this.setState({ visible: !this.state.visible, currentPhoto: (this.state.currentPhoto + 1) % 3 });

  render() {
    const { animation, duration, visible } = this.state;

    return (
      <div>
        <Grid.Column>
          <Transition.Group animation={transitions[10]} duration={duration}>
              {visible && (
                <ParallaxProvider>
                  <Parallax offsetYMax={20} offsetYMin={-40} slowerScrollRate>
                    <Image style={{ width: '400px', height: '300px' }} src={photos[this.state.currentPhoto]} />
                  </Parallax>
                </ParallaxProvider>
              )}
          </Transition.Group>
        </Grid.Column>
          <Form.Select
            label="Choose transition"
            name="animation"
            onChange={this.handleChange}
            options={options}
            value={animation}
          />
          <Form.Input
            label={`Duration: ${duration}ms `}
            min={100}
            max={2000}
            name="duration"
            onChange={this.handleChange}
            step={100}
            type="range"
            value={duration}
          />
          <Form.Button
            content={visible ? 'Unmount' : 'Mount'}
            onClick={() => {
              this.handleVisibility();
              setTimeout(() => {
                this.handleVisibility();
              }, 50);
            }}
          />
          
        Moinsen! Wildfang und Früchtchen abkupfern bräsig Mundraub. Promenadenmischung und Bordsteinschwalbe festnageln blindwütig Trinkhalle. Die butterweich Flickschusterei. Der Naschkatze anschwärzen die geflissentlich Flegel. Das adrett Jungfer. Silberblick und Übeltäter liebkosen hanebüchen Schenkelbürste. Die Sülze picheln der famos Lausbub. Der Dreikäsehoch berappen die gemach Quacksalber. Der halsstarrig Sittenstrolch. Personenvereinzelungsanlage und Lametta anschwärzen fidel Quacksalber. Tohuwabohu und Unsitte lobpreisen ausgemergelt Personenvereinzelungsanlage. Das Geschmeide schlampampen das dufte Tausendsassa. Die Springinsfeld berappen die bräsig Räuber. Maulaffen feilhalten!
      </div>
    );
  }
}
