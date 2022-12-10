import React, { useState } from 'react'
import { useCountryAppContext } from '../context'
import { AiOutlineSearch } from 'react-icons/ai'
import { IoIosArrowDown } from 'react-icons/io'

const countryList = ['Africa', 'America', 'Asia', 'Europe', 'Oceania']

const Input = () => {
  const [toggleList, setToggleList] = useState(false)

  const { handleInputChange, searchTerm, filter, handleSelectChange } =
    useCountryAppContext()

  const handleToggle = () => setToggleList(prev => !prev)

  return (
    <section className='inputSection'>
      <div className='inputDiv'>
        <input
          type='search'
          placeholder='Search for a country...'
          value={searchTerm}
          onChange={handleInputChange}
        />
        <AiOutlineSearch />
      </div>
      <div className='selectDiv'>
        <p onClick={handleToggle}>
          {filter || 'Filter by Region'} <IoIosArrowDown />
        </p>
        {toggleList && (
          <ul>
            {countryList.map((country, index) => (
              <li
                key={index}
                onClick={e => {
                  handleToggle()
                  handleSelectChange(e.target.textContent)
                }}
              >
                {country}
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}

export default Input
