const express = require('express')
const Rainfall = require('../models/rainfall')

const router = express.Router()

// Read all rainfall or Run a query
router.get('/rainfall', (req, res) => {
  // const query = req.query
  // // If ?completed= was specified
  // if (query.completed) {
  //   // Validate that completed value is specified as true or false
  //   if(query.completed==='true'||query.completed==='false') {
  //     Rainfall.find({ completed: query.completed })
  //       // Once it has loaded these documents
  //       .then(rainfall => {
  //         // Send them back as the response
  //         res.json(rainfall)
  //       })
  //       .catch(error => {
  //         res.status(400).json({ error: error.message })
  //       })
  //   }
  //   else {
  //     // If not a valid value for completed
  //     res.status(400).json({ error: `${query.completed} is not valid` })
  //   }
  // }
  // else {
    Rainfall.find()
      // Once it has loaded these documents
      .then(rainfall => {
        // Send them back as the response
        res.json(rainfall)
      })
      .catch(error => {
        res.status(400).json({ error: error.message })
      })
  // }
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