import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

/* Storms API */
import { fetchRainfall, fetchRainfallFromCity } from './api/storms'


class App extends Component {
  state = {
    city: null,
    month: null,
    year: null,
    results: []
  }
  
  /* Events */
  onClickGetRainfallData = (event) => {
    const { city } = this.state
    
    fetchRainfallFromCity(city)
      .then( data => {
        this.setState ( (prevState) => {
          const results = Object.assign(prevState.results, data)
          return {
            results: results
          }
        })
      })
  }

  onChangeUpdateMonth = (event) => {
    const value = event.target.value
    this.setState ({
      month: value
    })
  }

  onChangeUpdateYear = (event) => {
    const value = event.target.value
    this.setState ({
      year: value
    })
  }

  onChangeUpdateCity = (event) => {
    const value = event.target.value
    this.setState ({
      city: value
    })
  }

  render() {
    const { city, month, year, results } = this.state

    return (
      <div className="App container-fluid">
        <h1>Hello</h1>
        <button className='btn btn-primary' onClick={this.onClickGetRainfallData}>Get Rainfall</button>
        <br/>
        <input placeholder="Month" type="number" onChange={this.onChangeUpdateMonth} min="1" max="12" /><br/>
        <input placeholder="Year" type="number" onChange={this.onChangeUpdateYear} min="1900" max="9999" /><br/>
        <input placeholder="City" type="text" onChange={this.onChangeUpdateCity} /><br/>
        
        <h2>Rainfall for {city} on {month}-{year}</h2>
        <ul>
          {results.map( result => {
            return(
              <li>{result.date} - {result.city} - {result.amount}</li>
            )
          })}
        </ul>
      </div>
    );
  }
}

export default App;
