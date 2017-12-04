// Epoch Converter helpers

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

module.exports = {
  dateToEpoch,
  epochToDate
}