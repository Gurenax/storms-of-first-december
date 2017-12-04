# Storms

1. yarn add express
2. yarn add nodemon
3. yarn add body-parser

4. Modify package.json
```javascript
{
  "name": "api",
  "version": "1.0.0",
  "main": "index.js",
  "author": "Glenn Dimaliwat <glenn.dimaliwat@gmail.com>",
  "license": "MIT",
  "dependencies": {
    "body-parser": "^1.18.2",
    "express": "^4.16.2"
  },
  "devDependencies": {
    "nodemon": "^1.12.1"
  },
  "scripts": {
    "dev": "nodemon server.js"
  }
}
```

5. Add server.js
```javascript
const express = require('express')
const bodyParser = require('body-parser')

const server = express()

server.use(bodyParser.json())

server.listen(7000, () => {
  console.log('Started at http://localhost:7000')
})
```

6. yarn add mongoose

7. Add model/init.js
```javascript
const mongoose = require('mongoose')

// Use the Promise functionality built into Node.js
mongoose.Promise = global.Promise
// Connect to our local database
mongoose.connect(
  'mongodb://localhost/storms',
  { useMongoClient: true }
)
.then(() => {
  console.log('Successfully connected to database')
})
.catch((error) => {
  //   If there was an error connecting to the database
  if (error) console.log('Error connecting to MongoDB database', error)
})

module.exports = mongoose
```

8. yarn add axios

9. Add model/seeds.js



## User Stories
### As a user
1. To create weather data, I want to enter the amount of rainfall for each day
2. To classify rainfall by city, I want to have a city attribute
3. To compute total amount of rainfall, I want to query by city and date (i.e. month/year)
4. To compute average, median and max rainfall, I want to query by city and date (i.e. month/year)


## Dark Sky API
Melbourne - 37.8136,144.9631
Sydney - 33.8688,151.2093
Wellington - 41.2865,174.7762


## Model
### Rainfall
- city: String
- date: Date
- amount: Number


## Epoch Date Conversion
To use the dark sky API, I needed to convert a date timestamp to epoch and vice versa
```javascript
// Converts a Date() to Epoch
function dateToEpoch(date) {
  return date.getTime() / 1000
}

// Converts an Epoch to Date()
function epochToDate(epoch) {
  const date = new Date(0)
  date.setUTCSeconds(epoch)
  return date
}
```


## Routes
To query all rainfall data
```
http://localhost:7000/rainfall
```

To query for a list of rainfall data `(year is required when month is specified)`
```
http://localhost:7000/rainfall?city=Melbourne&year=2017&month=12
http://localhost:7000/rainfall?city=Melbourne&year=2017
http://localhost:7000/rainfall?city=Melbourne
```

To query for a summary of rainfall data `(city, year and month required)`
```
http://localhost:7000/rainfall/summary?city=Melbourne&year=2017&month=12
```

The rest of the routes are standard `i.e. post, patch, delete, get`