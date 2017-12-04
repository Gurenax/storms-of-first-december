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

6. Add model/init.js
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