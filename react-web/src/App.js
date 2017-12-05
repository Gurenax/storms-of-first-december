import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

/* Storms API */
import { fetchRainfall } from './api/storms'


class App extends Component {
  
  /* Events */
  onClickGetRainfallData = (event) => {
    console.log('Clicked!')
    fetchRainfall()
      .then( data => {
        console.log(data)
      })
  }

  render() {
    return (
      <div className="App container-fluid">
        <h1>Hello</h1>
        <button className='btn btn-primary' onClick={this.onClickGetRainfallData}>Get Rainfall</button>
      </div>
    );
  }
}

export default App;
