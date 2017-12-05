const Rainfall = require('./rainfall')

// Delete all
Rainfall.remove({}).then(() => {
  console.log('Data destroyed!')
  process.exit(0)
})
