import React, { Component } from 'react';
import Particles from 'react-particles-js';
import ComWrapper from './components/WrapperPart/WrapperPart';
import './App.css';

const particlesOptions = {
particles: {
  number: {
    value: 20,
    density: {
      enable: true,
      value_area: 1000
    }
  },
  color: {
    value: "#fff"
  },
  shape: {
    stroke:{
      width: 0,

    },
    image: {
      type: "circle"
    }
  },
  size: {
    value: 100,
    random: true,
    anim: {
      enable: false
    }
  },
  opacity: {
    value: .1,
    random: true,
    anim: {
      enable: false
    }
  },
  line_linked:{
    enable_auto: false,
    opacity: 0
  },
  move: {
    enable: true,
    direction: "top",
    speed: 1.6,
    out_mode: "out",
    random: true,
    bounce: false
  }
},
ineractivity: {
  onhover: {
    enable: false
  },
  onclick: {
    enable: false
  },
  modes: {
    enable: false
  }
}
}

class App extends Component {
  render() {
    return (
      <div className="App">
      <Particles className='particles' params={particlesOptions}/>
      <ComWrapper /> 
        </div>
        
    );
  }
}

export default App;
