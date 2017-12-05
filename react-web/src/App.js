import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import CityRain from './components/CityRain'

/* Storms API */
import { fetchRainfall, postRainfall } from './api/storms'


class App extends Component {
  state = {
    city: null,
    month: null,
    year: null,
    heading: {
      city: null,
      month: null,
      year: null
    },
    results: []
  }
  
  /* Events */
  onClickGetRainfallData = (event) => {
    const { city, year, month } = this.state
    
    fetchRainfall(city, year, month)
      .then( data => {
        this.setState ( (prevState) => {
          
          const results = data.length > 0 ? Object.assign(prevState.results, data) : []
          return {
            heading: {
              city: city,
              month: month,
              year: year
            },
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

  onClickAddData = (event) => {
    console.log('Adding data...')
    postRainfall()
  }

  onChangeInputDate = (event) => {
    
  }

  onChangeInputCity = (event) => {

  }

  onChangeInputAmount = (event) => {

  }

  render() {
    const { heading, results } = this.state

    return (
      <div className="App container-fluid">
        <h1>Hello</h1>
        <button className='btn btn-primary' onClick={this.onClickGetRainfallData}>Get Rainfall</button>
        <br/>
        <input placeholder="Month" type="number" onChange={this.onChangeUpdateMonth} min="1" max="12" /><br/>
        <input placeholder="Year" type="number" onChange={this.onChangeUpdateYear} min="1900" max="9999" /><br/>
        <input placeholder="City" type="text" onChange={this.onChangeUpdateCity} /><br/>
        
        {results.length>0 &&
        <CityRain 
          city = {heading.city}
          month = {heading.month}
          year = {heading.year}
          results = {results}
        />
        }

        <input placeholder="Date" type="text" onChange={this.onChangeInputDate} /><br/>
        <input placeholder="City" type="text" onChange={this.onChangeInputCity} /><br/>
        <input placeholder="Amount" type="number" onChange={this.onChangeInputAmount} /><br/>
        <button className='btn btn-primary' onClick={this.onClickAddData} >Add Data</button>
        
      </div>
    );
  }
}

export default App;
