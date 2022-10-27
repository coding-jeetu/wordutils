//import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import { render } from 'react-dom';

// import Fragmentdemo from './Components/Fragmentdemo';
// import Purecomp from './Components/Purecomp'
// import RefsDemo from './Components/RefsDemo';
import Textform from './Components/Textform'
import About from './Components/About';
class app extends Component {
  render() {
    return (
      <div className="App">
    <div className = "Container my-3">
        <Textform heading = "Enter your content here" />
        {/* <About/> */}
        
        
        </div>
      </div>
    )

  }
}

export default app;
