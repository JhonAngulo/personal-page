import { useState } from 'react'
import { Link } from 'react-router-dom'

import '../assets/styles/components/header.css'

const Header = () => {
  const [state, setState] = useState(false)

  const handleMenu = () => {
    setState(!state)
    document.body.classList.toggle('body__menu-open')
  }

  const menu = [
    { id: 1, option: 'Inicio', icon: 'home', link: '/' },
    { id: 2, option: 'Conóceme', icon: 'account_box', link: '/conoceme' },
    { id: 3, option: 'Curriculum', icon: 'book', link: '/curriculum' },
    { id: 4, option: 'Portafolio', icon: 'article', link: '/portafolio' },
  ]

  return (
    <>
      <nav className={`navbar ${state && 'open' }`}>
        <Link className='navbar__logo-link' to='/'>
          <h3 className='navbar__logo'>{'< jhon angulo />'}</h3>
        </Link>
        <ul className='navbar__items'>
          {menu.map((item) => (
            <li key={item.id}>
              <Link className='navbar__item' to={item.link}>
                <i className='material-icons'>{item.icon}</i>
                {item.option}
              </Link>
            </li>
          ))}
        </ul>

        <div className='navbar__menu' onClick={handleMenu}>
          <i className='material-icons'>{state ? 'menu_open' : 'menu'}</i>
        </div>
      </nav>

      <div className={`mobile__menu ${state && 'open' }`}>
        <Link className='mobile__menu-link' to='/'>
          <h3 className='mobile__menu-logo'>{'< jhon angulo />'}</h3>
        </Link>
        <ul className='mobile__menu-items'>
          {menu.map((item) => (
            <li key={item.id} className='mobile__menu-item-container'>
              <Link to={item.link} className='mobile__menu-item' onClick={handleMenu}>
                <i className='material-icons'>{item.icon}</i>
                {item.option}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Header
