import React from 'react'

import imagen from 'assets/images/imagen.jpeg'

import logoGit from 'assets/images/logo_git.svg'
import logoGithub from 'assets/images/logo_github.svg'
import logoHtml from 'assets/images/logo_html.svg'
import logoCss from 'assets/images/logo_css3.svg'
import logoJavascript from 'assets/images/logo_javascript.svg'
import logoReact from 'assets/images/logo_react.svg'
import logoNode from 'assets/images/logo_node.svg'

import 'assets/styles/pages/curriculum.css'
const Home = () => {
  const activeTab = (event) => {
    let tabItems = document.getElementsByClassName('curriculum__tab-item')
    for (let i = 0; i < tabItems.length; i++) {
      const element = tabItems[i]
      element.classList.remove('active')
    }
    event.target.classList.add('active')
  }

  return (
    <div className='curriculum-container'>
      <div className='curriculum__info'>
        <img
          className='curriculum__image'
          src={imagen}
          alt='foto jhon angulo'
        />

        <div>
          <h3>Ubicacion</h3>
          <p>Soledad, Atlántico - Colombia</p>
        </div>

        <div className='tecno'>
          <h3>Tecnologias</h3>
          <div className='tecno__item'>
            <img className='tecno__logo' src={logoGit} alt='logo git' />
            <p className='tecno__name'>Git</p>
          </div>
          <div className='tecno__item'>
            <img className='tecno__logo' src={logoGithub} alt='logo github' />
            <p className='tecno__name'>GitHub</p>
          </div>
          <div className='tecno__item'>
            <img className='tecno__logo' src={logoHtml} alt='logo html' />
            <p className='tecno__name'>Html</p>
          </div>
          <div className='tecno__item'>
            <img className='tecno__logo' src={logoCss} alt='logo css3' />
            <p className='tecno__name'>Css</p>
          </div>
          <div className='tecno__item'>
            <img
              className='tecno__logo'
              src={logoJavascript}
              alt='logo javascript'
            />
            <p className='tecno__name'>Javascript</p>
          </div>
          <div className='tecno__item'>
            <img className='tecno__logo' src={logoReact} alt='logo react' />
            <p className='tecno__name'>React</p>
          </div>
          <div className='tecno__item'>
            <img className='tecno__logo' src={logoNode} alt='logo node js' />
            <p className='tecno__name'>Node</p>
          </div>
        </div>
      </div>
      <div>
        <h1 className='curriculum__title'>jhon manuel angulo moncada</h1>
        <div className='curriculum__tab'>
          <span onClick={activeTab} className='curriculum__tab-item active'>
            Experiencia laboral
          </span>
          <span onClick={activeTab} className='curriculum__tab-item'>
            Formacion
          </span>
          <span onClick={activeTab} className='curriculum__tab-item'>
            Formacion Virtual
          </span>
        </div>
        <div className='experience-container'>
          <div className='experience__card'>
            <p>
              <strong>Empresa: </strong>MCA SYSTEMS SAS
            </p>
            <p>
              <strong>Duración: </strong>2016 - actualidad
            </p>
            <p>
              <strong>Cargo: </strong>Técnico de laboratorio
            </p>
            <p>
              <strong>Funciones: </strong>Desarrollo de plataforma de la empresa
              relacionada con ahorro energético, en la cual participe en varias
              ramas. desde la obtención de los datos en el hardware usando
              lenguaje Luup UPnP, pasando por el backend en Node y la interfaz
              gráfica en React.
            </p>
          </div>

          <div className='experience__card'>
            <p>
              <strong>Empresa: </strong>MCA SYSTEMS SAS
            </p>
            <p>
              <strong>Duración: </strong>2013 - 2015
            </p>
            <p>
              <strong>Cargo: </strong>Técnico de laboratorio
            </p>
            <p>
              <strong>Funciones: </strong>Instalaciones productos tecnologicos a
              cliente final
            </p>
          </div>

          <div className='experience__card'>
            <p>
              <strong>Empresa: </strong>DATAGAS SAS
            </p>
            <p>
              <strong>Duración: </strong>2011 - 2012
            </p>
            <p>
              <strong>Cargo: </strong>Técnico de mantenimiento
            </p>
            <p>
              <strong>Funciones: </strong>Mantenimiento de hardware y software
              en estaciones de combustible
            </p>
          </div>

          <div className='experience__card'>
            <p>
              <strong>Empresa: </strong>CABLE EXPRESS
            </p>
            <p>
              <strong>Duración: </strong>Practicas
            </p>
            <p>
              <strong>Cargo: </strong>Técnico electrónico
            </p>
            <p>
              <strong>Funciones: </strong>Reparación de cajas codificadoras
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
