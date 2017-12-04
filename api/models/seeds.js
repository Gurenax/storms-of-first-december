const Rainfall = require('./rainfall')

const axios = require('axios')
const dotenv = require('dotenv').config()
const DARK_SKY_API_KEY = process.env.DARK_SKY_API_KEY

const {dateToEpoch, epochToDate} = require('../helpers/epoch')

const darksky = axios.create({
  baseURL: 'https://api.darksky.net/forecast/'
})

// Coordinates
// Melbourne
const melbourneCoordinates = '37.8136,144.9631'
// Sydney
const sydneyCoordinates = '33.8688,151.2093'
// Wellington
const wellingtonCoordinates = '41.2865,174.7762'

function fetchForecast(coordinates, time) {
  if (!!time) return darksky.get(`/${DARK_SKY_API_KEY}/${coordinates},${time}`)
  else return darksky.get(`/${DARK_SKY_API_KEY}/${coordinates}`)
}

// Delete all
// Rainfall.remove( {} )
//   .then( () => { console.log('Data destroyed!') })

// // Create data from Dark Sky API
// Promise.all([
//   // Melbourne - December 1, 2017
//   fetchForecast(melbourneCoordinates, dateToEpoch(new Date('2017-12-01'))),
//   // Melbourne - December 2, 2017
//   fetchForecast(melbourneCoordinates, dateToEpoch(new Date('2017-12-02'))),
//   // Melbourne - December 3, 2017
//   fetchForecast(melbourneCoordinates, dateToEpoch(new Date('2017-12-03'))),
//   // Melbourne - December 4, 2017
//   fetchForecast(melbourneCoordinates, dateToEpoch(new Date('2017-12-04')))
// ])
//   .then(results => {
//     results.map(result => {
//       // console.log( epochToDate(result.data.currently.time) )
//       // console.log( result.data.currently.precipIntensity )
//       Rainfall.create({
//         city: 'Melbourne',
//         date: epochToDate(result.data.currently.time),
//         amount: result.data.currently.precipIntensity
//       })
//     })
//   })
//   .then(() => {
//     console.log('Data creation complete!')
//   })
//   .catch(reason => {
//     console.log(reason)
//   })

// Promise.all([
//   // Sydney - December 1, 2017
//   fetchForecast(sydneyCoordinates, dateToEpoch(new Date('2017-12-01'))),
//   // Sydney - December 2, 2017
//   fetchForecast(sydneyCoordinates, dateToEpoch(new Date('2017-12-02'))),
//   // Sydney - December 3, 2017
//   fetchForecast(sydneyCoordinates, dateToEpoch(new Date('2017-12-03'))),
//   // Sydney - December 4, 2017
//   fetchForecast(sydneyCoordinates, dateToEpoch(new Date('2017-12-04')))
// ])
//   .then(results => {
//     results.map(result => {
//       // console.log( epochToDate(result.data.currently.time) )
//       // console.log( result.data.currently.precipIntensity )
//       Rainfall.create({
//         city: 'Sydney',
//         date: epochToDate(result.data.currently.time),
//         amount: result.data.currently.precipIntensity
//       })
//     })
//   })
//   .then(() => {
//     console.log('Data creation complete!')
//   })
//   .catch(reason => {
//     console.log(reason)
//   })

// Promise.all([
//   // Wellington - December 1, 2017
//   fetchForecast(wellingtonCoordinates, dateToEpoch(new Date('2017-12-01'))),
//   // Wellington - December 2, 2017
//   fetchForecast(wellingtonCoordinates, dateToEpoch(new Date('2017-12-02'))),
//   // Wellington - December 3, 2017
//   fetchForecast(wellingtonCoordinates, dateToEpoch(new Date('2017-12-03'))),
//   // Wellington - December 4, 2017
//   fetchForecast(wellingtonCoordinates, dateToEpoch(new Date('2017-12-04')))
// ])
//   .then(results => {
//     results.map(result => {
//       // console.log( epochToDate(result.data.currently.time) )
//       // console.log( result.data.currently.precipIntensity )
//       Rainfall.create({
//         city: 'Wellington',
//         date: epochToDate(result.data.currently.time),
//         amount: result.data.currently.precipIntensity
//       })
//     })
//   })
//   .then(() => {
//     console.log('Data creation complete!')
//   })
//   .catch(reason => {
//     console.log(reason)
//   })