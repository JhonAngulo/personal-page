import React from 'react'

import 'assets/styles/pages/home.css'

const Home = () => {
  return (
    <div className='home-container card'>
      <h1 className='home__title fadeInDown'>¡Bienvenido!</h1>
      <div className='fadeInUp'>
        <h2>Soy, Jhon Manuel Angulo Moncada</h2>
        <p>
          Frontend Developer y Técnico electrónico amante de la tecnología, la
          programación y el desarrollo.
        </p>
        <p>
          En esta pagina podras encontrar informacion para conocerme, las
          tecnologias que manejo, mi curriculum y los proyectos que
          realizado.
        </p>
        <p>Gracias por visitar mi página personal.</p>
      </div>
    </div>
  )
}

export default Home
