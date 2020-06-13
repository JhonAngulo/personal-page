import React from 'react'

import 'assets/styles/pages/home.css'

const Home = () => {
  return (
    <div className='home-container'>
      <h1 className='home__title fadeInDown'>¡Bienvenido a mi página web!</h1>
      <div className='fadeInUp'>
        <h2>Mi nombre es Jhon Manuel Angulo Moncada</h2>
        <p>Gracias por visitar mi página personal.</p>
        <p>
          Técnico electrónico amante de la tecnología, programación de
          microcontroladores en assembler y c, programación web: html, css,
          javascritp, React, node.
        </p>
        <p>
          En esta pagina podras encontrar informacion para conocerme, las
          tecnologias que manejo manejo, mi curriculum y los proyectos que
          realizado.
        </p>
      </div>
    </div>
  )
}

export default Home
