const Rainfall = require('./rainfall')

Rainfall.create([
  {
    city: 'Melbourne',
    date: '2017-11-27',
    amount: 15.0
  },
  {
    city: 'Melbourne',
    date: '2017-11-28',
    amount: 12.0
  },
  {
    city: 'Melbourne',
    date: '2017-11-29',
    amount: 8.0
  },
  {
    city: 'Melbourne',
    date: '2017-11-30',
    amount: 15.0
  },
  {
    city: 'Melbourne',
    date: '2017-12-01',
    amount: 20.5
  }
])
.then( () => {
  Rainfall.find()
    .then( rainfallData => {
      console.log('Rainfall: ', rainfallData)
    })
    .catch( error => {
      console.error(error)
    })
})