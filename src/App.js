import React from 'react';
import logo from './logo.svg';
import './App.css';
import Webcam from "react-webcam";


class WebcamCapture extends React.Component {
  setRef = webcam => {
    this.webcam = webcam;
  }; 

  state={
    imageSrc : null
  }
  
  capture = () => {
    const imageSrc = this.webcam.getScreenshot();
    this.setState({imageSrc : imageSrc})
  };

  render() {
    const videoConstraints = {
      width: 1280,
      height: 720,
      facingMode: "user"
    };

    return (
      <div>
        <Webcam
          audio={false}
          height={350}
          ref={this.setRef}
          screenshotFormat="image/jpeg"
          width={350}
          videoConstraints={videoConstraints}
        />
        <button onClick={this.capture}>Capture foto</button>
        <img src={this.state.imageSrc} className="rsgis-logo" />
        </div>
    );
  }
}



/* function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <p>
         SATAN ESPERA VOCÊ 666.
        </p>
        
      </header>
    </div>
  );
} */

export default WebcamCapture