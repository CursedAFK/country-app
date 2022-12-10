import React from 'react'
import { Link } from 'react-router-dom'

const Country = ({ flags, name, cca2, population, region, capital }) => {
  return (
    <Link to={`country/details/${cca2}`} className='countryDiv'>
      <img src={flags.png} alt={name.common} />
      <div className='countryDetails'>
        <h2>{name.common}</h2>
        <p>
          Population: <span>{population.toLocaleString()}</span>
        </p>
        <p>
          Region: <span>{region}</span>
        </p>
        <p>
          Capital: <span>{capital}</span>
        </p>
      </div>
    </Link>
  )
}

export default Country
