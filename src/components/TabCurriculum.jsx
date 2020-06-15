import React from 'react'

import { experiencia, formacion, formacionVirtual } from 'data/curriculum'

const TabCurriculum = () => {
  const activeTab = (event) => {
    let tabItems = document.getElementsByClassName('curriculum__tab-item')
    let tabOption = document.getElementsByClassName('curriculum__tab-option')

    for (let i = 0; i < tabItems.length; i++) {
      const element = tabItems[i]
      element.classList.remove('active')
    }
    for (let i = 0; i < tabOption.length; i++) {
      const element = tabOption[i]
      element.classList.remove('active')
    }
    event.target.classList.add('active')
    tabOption[event.target.id].classList.add('active')
  }
  return (
    <>
      <div className='curriculum__tab'>
        <span
          onClick={activeTab}
          className='curriculum__tab-item active'
          id='0'
        >
          Experiencia laboral
        </span>
        <span onClick={activeTab} className='curriculum__tab-item' id='1'>
          Formación
        </span>
        <span onClick={activeTab} className='curriculum__tab-item' id='2'>
          Formación Virtual
        </span>
      </div>
      <div className='curriculum__tab-option active'>
        {experiencia.map((item) => (
          <div className='experience__card' key={item.id}>
            <p>
              <strong>Empresa: </strong> {item.empresa}
            </p>
            <p>
              <strong>Duración: </strong> {item.duracion}
            </p>
            <p>
              <strong>Cargo: </strong> {item.cargo}
            </p>
            <p>
              <strong>Funciones: </strong> {item.funciones}
            </p>
          </div>
        ))}
      </div>
      <div className='curriculum__tab-option'>
        {formacion.map((item) => (
          <div className='experience__card' key={item.id}>
            <p>
              <strong>Título: </strong> {item.titulo}
            </p>
            <p>
              <strong>Institución: </strong> {item.institucion}
            </p>
            <p>
              <strong>Ciudad: </strong> {item.ciudad}
            </p>
            <p>
              <strong>Detalles: </strong> {item.detalles}
            </p>
          </div>
        ))}
      </div>
      <div className='curriculum__tab-option'>
        {formacionVirtual.map((item) => (
          <div className='experience__card' key={item.id}>
            <p>
              <strong>Carrera: </strong> {item.carrera}
            </p>
            <p>
              <strong>Plataforma: </strong> {item.plataforma}
            </p>
            <p>
              <strong>Duración: </strong> {item.duracion}
            </p>
            <p>
              <strong>Estado: </strong> {item.estado}
            </p>
          </div>
        ))}
      </div>
    </>
  )
}

export default TabCurriculum
