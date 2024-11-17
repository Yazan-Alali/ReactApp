import React, { useEffect, useState } from 'react'

function MainNav() {
    const [isDarkMode, setIsDarkMode] = useState(false)

    useEffect(() => {
      const storedThemeMode = localStorage.getItem('themeMode')

      if (storedThemeMode === 'dark' || (!storedThemeMode && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        setIsDarkMode(true)
        document.documentElement.classList.add('dark')
      } else {
        setIsDarkMode(false)
        document.documentElement.classList.remove('dark')
      }

    }, [])

    const handleThemeToggle = () => {
        if (isDarkMode) {
          setIsDarkMode(false)
          localStorage.setItem('themMode', 'light')
          document.documentElement.classList.remove('dark')
        } else {
          setIsDarkMode(true)
          localStorage.setItem('themMode', 'dark')
          document.documentElement.classList.add('dark')
        }
    }

  return (
    <nav className="main-nav" aria-label="main-navigation">
    <a href="#main" className="skip-link">Skip to main content</a>

    <div className="container">
      <a href="/">
        <img className="show-light" src="/icons/logotype.svg" alt="Silicon logotype" />
        <img className="show-dark" src="/icons/logodark.svg" alt="Silicon logotype"/>
      </a>

      <div className="darkmode-toggle">
        <p>Dark Mode</p>
        <label className="toggle">
          <input type="checkbox" id="darkmode-switch" checked={isDarkMode} onChange={handleThemeToggle} />
          <span className="slider"></span>
        </label>
      </div>

      <button className="menu-btn" aria-controls="main-menu" aria-expanded="false" aria-label="toggle navigation">
        <img src="/icons/Button - Toggle navigation (1).svg" alt="" />
      </button>
      

      <ul id="main-menu" className="main-menu hide">
        <li>
          <a href="#" className="nav-link">Features</a>
          <a  href="#" className="nav-link">Contact</a>
        </li>
        <li>
          <a href="#" className="btn btn-primary">
            <img src="/icons/user.svg" alt="" />
            <span>Sign in / up</span>
          </a>
        </li>
      </ul>
    </div>

  </nav>
  )
}

export default MainNav
