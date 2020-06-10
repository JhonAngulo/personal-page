import React from 'react'
import { Link } from 'react-router-dom'

import 'assets/styles/components/header.css'
const Home = () => {
  return (
    <>
      <nav className='navbar'>
        <Link className='navbar__logo-link' to=''>
          <h3 className='navbar__logo'>{'< jhon angulo />'}</h3>
        </Link>
        <ul className='navbar__items'>
          <li>
            <Link className='navbar__item' to=''>
              <i className='material-icons'>home</i>Inicio
            </Link>
          </li>
          <li>
            <Link className='navbar__item' to=''>
              <i className='material-icons'>account_box</i>Conóceme
            </Link>
          </li>
          <li>
            <Link className='navbar__item' to=''>
              <i className='material-icons'>book</i>Curriculum
            </Link>
          </li>
          <li>
            <Link className='navbar__item' to=''>
              <i className='material-icons'>article</i>Portafolio
            </Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Home
