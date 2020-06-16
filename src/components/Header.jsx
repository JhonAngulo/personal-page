import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import 'assets/styles/components/header.css'
const Home = () => {
  const [state, setState] = useState(false)

  const handleMenu = () => {
    console.log('menu open')
    setState(!state)
  }

  return (
    <>
      <nav className='navbar'>
        <Link className='navbar__logo-link' to='/'>
          <h3 className='navbar__logo'>{'< jhon angulo />'}</h3>
        </Link>
        <ul className='navbar__items'>
          <li>
            <Link className='navbar__item' to='/'>
              <i className='material-icons'>home</i>Inicio
            </Link>
          </li>
          <li>
            <Link className='navbar__item' to='/conoceme'>
              <i className='material-icons'>account_box</i>Conóceme
            </Link>
          </li>
          <li>
            <Link className='navbar__item' to='/curriculum'>
              <i className='material-icons'>book</i>Curriculum
            </Link>
          </li>
          <li>
            <Link className='navbar__item' to='/portafolio'>
              <i className='material-icons'>article</i>Portafolio
            </Link>
          </li>
        </ul>

        <div className='navbar__menu' onClick={handleMenu}>
          <i className='material-icons'>
            {
              state ? 'menu_open' : 'menu'
            }
          </i>
        </div>
      </nav>
    </>
  )
}

export default Home
