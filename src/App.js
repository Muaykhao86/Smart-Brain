import React, { Component } from 'react';
import Particles from 'react-particles-js';
import ComWrapper from './components/WrapperPart/WrapperPart';
import './App.css';

const particlesOptions = {
  particles: {
    number:{
      value:30,
      density:{
        enable:true,
        value_area: 800
  }}}
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
