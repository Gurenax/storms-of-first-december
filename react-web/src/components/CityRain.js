import React from 'react'

const CityRain = ({
  city,
  month,
  year, 
  results
}) => {
  let subHeading
  if (city && month && year) {
    subHeading = `Rainfall for ${city} on ${month}-${year}`
  }
  else if (city && year) {
    subHeading = `Rainfall for ${city} on ${year}`
  }
  else if (city) {
    subHeading = `Rainfall for ${city}`    
  }
  else {
    subHeading = `All rainfall everywhere for ever`    
  }


  return (
    <div>
      <h2>
        {subHeading}
      </h2>
      <ul>
        {results.map(result => {
          return (
            <li>
              {result.date} - {result.city} - {result.amount}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default CityRain
