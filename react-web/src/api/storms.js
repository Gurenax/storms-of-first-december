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
  let url = 'http://localhost:7000/rainfall'
  if (!!city && !!year && !!month) {
    url += `?city=${city}&year=${year}&month=${month}`
  } else if (!!city && !!year) {
    url += `?city=${city}&year=${year}`
  } else if (!!city) {
    url += `?city=${city}`
  }

  return axios
    .get(url)
    .then(res => res.data)
    .catch(err => {
      console.log(err)
    })
}

export const postRainfall = (city, date, amount) => {
  let url = 'http://localhost:7000/rainfall'

  let input = {
    city: 'Brisbane',
    date: '2017-12-06',
    amount: 4
  }

  axios.post(url, input).then(res => {
    console.log(res)
  })
}
