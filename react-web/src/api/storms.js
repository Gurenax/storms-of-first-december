import axios from 'axios'

// const api = axios.create({
//   baseUrl: 'https://api.darksky.net/'
// })

export const fetchRainfall = () => {
  return axios.get('http://localhost:7000/rainfall/')
    .then( res => res.data )
    .catch( err => {
      console.log(err)
    })
}

export const fetchRainfallFromCity = (city) => {
  return axios.get(`http://localhost:7000/rainfall?city=${city}`)
  .then( res => res.data )
  .catch( err => {
    console.log(err)
  })
}