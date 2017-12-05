const express = require('express')

// Rainfall model
const Rainfall = require('../models/rainfall')

// Helper functions for Rainfall
const { computeTotalRainfall, computeAverage, sortRainfallByAmount,
  computeMaxRainfall, computeMedianRainfall } = require('../helpers/rainfall')

const router = express.Router()

// Read all rainfall or Run a query
router.get('/rainfall', (req, res) => {
  const query = req.query
  // If ?city=, ?year=, ?month= was specified
  if (query.city && query.year && query.month) {
    const queryDateFrom = new Date(`${query.year}-${query.month}`)
    const queryDateTo = new Date(query.year, queryDateFrom.getMonth() + 1, 0, 23, 59, 59)
    console.log('queryDateFrom', queryDateFrom)
    console.log('queryDateTo', queryDateTo)
    
    Rainfall.find({
      city: query.city,
      date : {
        $gte : queryDateFrom,
        $lte : queryDateTo
      }
    })
    // Once it has loaded these documents
    .then(rainfall => {
      // Send them back as the response
      res.json(rainfall)
    })
    .catch(error => {
      res.status(400).json({ error: error.message })
    })
  }
  // If ?city=, ?year= was specified
  else if (query.city && query.year) {
    const queryDateFrom = new Date(`${query.year}-01`)
    const queryDateTo = new Date(`${query.year}-12-31 23:59:59`)
    console.log('queryDateFrom', queryDateFrom)
    console.log('queryDateTo', queryDateTo)
    
    Rainfall.find({
      city: query.city,
      date : {
        $gte : queryDateFrom,
        $lte : queryDateTo
      }
    })
    // Once it has loaded these documents
    .then(rainfall => {
      // Send them back as the response
      res.json(rainfall)
    })
    .catch(error => {
      res.status(400).json({ error: error.message })
    })
  }
  // If ?city=, ?month= was specified and no ?year
  else if (query.city && query.month) {
    res.status(400).json({ error: 'year parameter required' })
  }
  // If ?city= was specified
  else if (query.city) {
    Rainfall.find({ city: query.city })
      // Once it has loaded these documents
      .then(rainfall => {
        // Send them back as the response
        res.json(rainfall)
      })
      .catch(error => {
        res.status(400).json({ error: error.message })
      })
  }
  else {
    Rainfall.find()
      // Once it has loaded these documents
      .then(rainfall => {
        // Send them back as the response
        res.json(rainfall)
      })
      .catch(error => {
        res.status(400).json({ error: error.message })
      })
  }
})

// Rainfall summary routes
router.get('/rainfall/summary', (req, res) => {
  const query = req.query

  // If ?city=, ?year=, ?month= was specified
  if (query.city && query.year && query.month) {
    const queryDateFrom = new Date(`${query.year}-${query.month}`)
    const queryDateTo = new Date(query.year, queryDateFrom.getMonth() + 1, 0, 23, 59, 59)

    console.log('queryDateFrom', queryDateFrom)
    console.log('queryDateTo', queryDateTo)
    
    Rainfall.find({
      city: query.city,
      date : {
        $gte : queryDateFrom,
        $lt : queryDateTo
      }
    })
    // Once it has loaded these documents
    .then(rainfall => {
      // Get length of rainfall array
      const dataLength = rainfall.length
      // Get total amount of rainfall
      const total = computeTotalRainfall(rainfall)
      // Get average daily rainfall
      const average = computeAverage(total, dataLength)
      // Sort rainfall data into sortedData array
      const sortedData = sortRainfallByAmount(rainfall)
      // Get max rainfall
      const maxRainfall = computeMaxRainfall(sortedData)
      // Get median      
      const median = computeMedianRainfall(sortedData)
      
      // Send them back as the response
      return res.json({ 
        city: query.city,
        month: query.month,
        year: query.year,
        totalRainfall: total,
        averageDailyRain: average,
        medianRainfall: median,
        maxRainfall: maxRainfall,
      })
    })
    .catch(error => {
      res.status(400).json({ error: error.message })
    })
  }
  else {
    res.status(400).json({ error: 'city, year and month parameters required' })
  }

})

// Read an individual rainfall
router.get('/rainfall/:id', (req, res) => {
  const id = req.params.id
  // Ask the model for the document with this id
  Rainfall.findById(id)
    // Once it has loaded this document
    .then(rainfall => {
      // If an rainfall was found
      if(rainfall) {
        res.json(rainfall)
      }
      // If no rainfall was foound
      else {
        res.status(404).json({ error: `Rainfall not found with id: ${id}` })
      }
    })
    .catch(error => {
      // If there was an error, most likely with the format of the id
      res.status(400).json({ error: error.message })
    })
})

// Create
router.post('/rainfall', (req, res) => {
  const attributes = req.body
  Rainfall.create(attributes)
    .then(rainfall => {
      res.status(201).json(rainfall)
    })
    .catch(error => {
      res.status(400).json({ error: error })
    })
})

// Update
router.patch('/rainfall/:id', (req, res) => {
  const id = req.params.id
  const attributes = req.body
  Rainfall.findByIdAndUpdate(id, attributes, { new: true, runValidators: true })
    .then(rainfall => {
      // If an rainfall was found and updated
      if(rainfall) {
        
        res.status(200).json(rainfall) //{rainfall: rainfall, update: attributes})
      }
      // If no rainfall was found
      else {
        res.status(404).json({ error: `Rainfall not found with id: ${id}` })
      }
    })
    .catch(error => {
      res.status(400).json({ error: error })
    })
})

// Destroy
router.delete('/rainfall/:id', (req, res) => {
  const id = req.params.id
  Rainfall.findByIdAndRemove(id)
    .then(rainfall => {
      // If an rainfall was found and deleted
      if(rainfall) {
        res.status(200).json(rainfall)
      }
      // If no rainfall was found
      else {
        res.status(404).json({ error: `Rainfall not found with id: ${id}` })
      }
    })
    .catch(error => {
      res.status(400).json({ error: error })
    })
  
})

module.exports = router