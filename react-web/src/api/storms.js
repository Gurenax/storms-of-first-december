import axios from 'axios'

// const api = axios.create({
//   baseUrl: 'https://api.darksky.net/'
// })

// export const fetchRainfall = () => {
//   return axios.get('http://localhost:7000/rainfall/')
//     .then( res => res.data )
//     .catch( err => {
//       console.log(err)
//     })
// }

export const fetchRainfall = (city, year, month) => {
  let url
  if (!!city && !!year && !!month) {
    url = `http://localhost:7000/rainfall?city=${city}&year=${year}&month=${month}`
  }
  else if (!!city && !!year) {
    url = `http://localhost:7000/rainfall?city=${city}&year=${year}`
  }
  else if (!!city) {
    url = `http://localhost:7000/rainfall?city=${city}`
  }
  else {
    url = 'http://localhost:7000/rainfall'
  }

  return axios.get(url)
  .then( res => res.data )
  .catch( err => {
    console.log(err)
  })
}
