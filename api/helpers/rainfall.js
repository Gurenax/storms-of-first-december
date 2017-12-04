// Rainfall helpers

const computeTotalRainfall = (rainfall) => {
  return rainfall.reduce( (total, value) => {
    return total + value.amount
  }, 0)
}

const computeAverage = (total, numberOfItems) => {
  return total / numberOfItems
}

const sortRainfallByAmount = (rainfall) => {
  return rainfall.slice().sort( (a,b) => a.amount-b.amount )
}

const computeMaxRainfall = (sortedRainfall) => {
  const dataLength = sortedRainfall.length
  return sortedRainfall[dataLength - 1].amount
}

const computeMedianRainfall = (sortedRainfall) => {
  const dataLength = sortedRainfall.length
  if (dataLength === 0) return 0
  
  let median = 0
  if (dataLength % 2 === 0) {
    const item1 = parseInt( (dataLength+1) / 2 - 1)
    const item2 = parseInt( (dataLength+1) / 2 )
    const item1Amount = sortedRainfall[item1].amount
    const item2Amount = sortedRainfall[item2].amount
    median = (item1Amount + item2Amount) / 2
  }
  else {
    const item = parseInt( (dataLength+1) / 2 - 1)
    median = sortedRainfall[item].amount
  }
  return median
}

module.exports = {
  computeTotalRainfall,
  computeAverage,
  sortRainfallByAmount,
  computeMaxRainfall,
  computeMedianRainfall
}