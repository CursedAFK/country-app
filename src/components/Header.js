import React, { useState } from 'react'
import { BsMoon, BsFillMoonFill } from 'react-icons/bs'

const Header = () => {
  const [darkMode, setDarkMode] = useState(false)

  const handleClick = () => setDarkMode(prev => !prev)

  return (
    <header className={`${darkMode && 'dark'}`}>
      <h2>Where in the world?</h2>
      <nav onClick={handleClick}>
        {darkMode ? <BsFillMoonFill /> : <BsMoon />}
        <h4>Dark Mode</h4>
      </nav>
    </header>
  )
}

export default Header
