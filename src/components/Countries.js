import React from 'react'
import { useCountryAppContext } from '../context'
import Country from './Country'
import Loading from './Loading'
import NotFound from './NotFound'

const Countries = () => {
  const { countries, loading, error } = useCountryAppContext()

  if (loading) {
    return <Loading />
  }

  if (error) {
    return <NotFound />
  }

  return (
    <main className='countriesDiv'>
      {countries.map(country => (
        <Country key={country.cca2} {...country} />
      ))}
    </main>
  )
}

export default Countries
