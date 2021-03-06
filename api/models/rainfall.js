// Ensure we have established a connection to the database
const mongoose = require('./init')

// Define our model
const Rainfall = mongoose.model('Rainfall', {
  city: { type: String, required: [true, 'City is required'] },
  date: { type: Date, required: [true, 'Date is required'] },
  amount: { type: Number, required: [true, 'Amount is required'], default: 0 }
})

Rainfall.schema.index({ city: 1, date: 1 }, { unique: true })

module.exports = Rainfall
