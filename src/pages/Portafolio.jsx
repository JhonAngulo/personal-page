import React from 'react'

import 'assets/styles/pages/portafolio.css'

import { portafolio } from 'data/proyects'

const Home = () => {
  return (
    <div className='proyects-container'>

      {
        portafolio.map((item) => (
          <div className='proyect-item' key={item.id}>
          <h3 className='proyect__title'>{item.titulo}</h3>
          <img
            className='proyect__image'
            src={item.imagen}
            alt='proyecto pagina personal'
          />
          <div className='proyect__details'>
            <h4>Detalles:</h4>
            <p>
              {item.detalles}
            </p>
            <a className='proyect__link' href={item.url}>{item.url}</a>
            <a className='proyect__link' href={item.repositorio}>Repositorio</a>
          </div>
        </div>
        ))
      }

    </div>
  )
}

export default Home
