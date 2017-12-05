import axios from 'axios'

// const api = axios.create({
//   baseUrl: 'https://api.darksky.net/'
// })

export const fetchRainfall = () => {
  return axios.get('http://localhost:7000/rainfall', {
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    proxy: {
      host: '10.1.5.4',
      port: 7001
    }
  })
    .then( res => res.json )
    .catch( err => {
      console.log(err)
    })
}
