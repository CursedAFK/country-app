import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useCountryAppContext } from '../context'
import Loading from '../components/Loading'
import { BsArrowLeft } from 'react-icons/bs'

const Flag = () => {
  const { countries } = useCountryAppContext()

  const { id } = useParams()

  const countryDetails = countries.find(country => country.cca2 === id)

  if (!countryDetails) {
    return <Loading />
  }

  return (
    <section className='countryDetailsPage'>
      <button className='backBtn'>
        <Link to='/'>
          <BsArrowLeft /> Back
        </Link>
      </button>
      <div className='container'>
        <img src={countryDetails.flags.png} alt={countryDetails.name.common} />
        <div className='detailsContainerWrapper'>
          <h2>{countryDetails.name.common}</h2>
          <div className='detailsContainer'>
            <div className='details'>
              <p>
                Native Name:{' '}
                <span>
                  {countryDetails.name.nativeName
                    ? Object.values(countryDetails.name.nativeName)[0].common
                    : ''}
                </span>
              </p>
              <p>
                Population:{' '}
                <span>{countryDetails.population.toLocaleString()}</span>
              </p>
              <p>
                Region: <span>{countryDetails.region}</span>
              </p>
              <p>
                Sub Region: <span>{countryDetails.subregion}</span>
              </p>
              <p>
                Capital: <span>{countryDetails.capital}</span>
              </p>
            </div>
            <div className='details'>
              <p>
                Top Level Domain: <span>{countryDetails.tld}</span>
              </p>
              <p>
                Currencies:{' '}
                <span>
                  {countryDetails.currencies
                    ? Object.values(countryDetails.currencies)[0].name
                    : ''}
                </span>
              </p>
              <p>
                Languages:{' '}
                <span>
                  {countryDetails.languages
                    ? Object.values(countryDetails.languages).map(
                        (item, index) => {
                          if (
                            index ===
                            Object.values(countryDetails.languages).length - 1
                          )
                            return item
                          return `${item}, `
                        }
                      )
                    : ''}
                </span>
              </p>
            </div>
          </div>
          <div className='borderWrapper'>
            <h3>Border Countries:</h3>
            <div className='borderDiv'>
              {countryDetails.borders?.map(border => (
                <button key={border}>{border}</button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Flag
