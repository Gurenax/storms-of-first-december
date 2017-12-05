import React from 'react'
import { toMonthName } from '../helpers/month'

const CityRain = ({
  city,
  month,
  year, 
  results
}) => {
  let subHeading
  if (city && month && year) {
    subHeading = `Rainfall for ${city} on ${toMonthName(month)} ${year}`
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
        {results.map( (result, index) => {
          return (
            <li key={`Rainfall-${index}`}>
              {result.date} - {result.city} - {result.amount}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default CityRain
