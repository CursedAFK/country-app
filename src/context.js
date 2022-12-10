import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState
} from 'react'

const CountryAppContext = createContext()

export const CountryAppProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [filter, setFilter] = useState('')
  const [countries, setCountries] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const ALL_COUNTRIES_API = 'https://restcountries.com/v3.1/all'
  const COUNTRY_REGION_API = `https://restcountries.com/v3.1/region/${filter}`
  const COUNTRY_NAME_API = `https://restcountries.com/v3.1/name/${searchTerm}`

  const handleInputChange = e => setSearchTerm(e.target.value)
  const handleSelectChange = country => setFilter(country)

  const fetchCountry = async url => {
    try {
      setLoading(true)
      const response = await fetch(url)
      if (response.status === 404) {
        setError(true)
        return
      }
      const data = await response.json()
      setCountries(data)
      setError(false)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  const getAllCountries = useCallback(
    () => fetchCountry(ALL_COUNTRIES_API),
    [ALL_COUNTRIES_API]
  )

  const getCountryByRegion = useCallback(
    () => fetchCountry(COUNTRY_REGION_API),
    [COUNTRY_REGION_API]
  )

  const getCountryByName = useCallback(
    () => fetchCountry(COUNTRY_NAME_API),
    [COUNTRY_NAME_API]
  )

  useEffect(() => {
    getAllCountries()
  }, [getAllCountries])

  useEffect(() => {
    if (filter) getCountryByRegion()
  }, [filter, getCountryByRegion])

  useEffect(() => {
    if (searchTerm) getCountryByName()
  }, [searchTerm, getCountryByName])

  const store = {
    handleInputChange,
    searchTerm,
    filter,
    handleSelectChange,
    countries,
    loading,
    error
  }

  return (
    <CountryAppContext.Provider value={store}>
      {children}
    </CountryAppContext.Provider>
  )
}

export const useCountryAppContext = () => {
  return useContext(CountryAppContext)
}
