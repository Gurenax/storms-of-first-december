import axios from 'axios'

// const api = axios.create({
//   baseUrl: 'https://api.darksky.net/'
// })

export const fetchRainfall = () => {
  return axios.get('http://localhost:7000/rainfall/5a251c713d350edd7c64715d')
    .then( res => res.data )
    .catch( err => {
      console.log(err)
    })
}
