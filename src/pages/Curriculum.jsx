import React from 'react'
import TabCurriculum from 'components/TabCurriculum'

import imagen from 'assets/images/imagen.jpeg'

import logoGit from 'assets/images/logo_git.svg'
import logoGithub from 'assets/images/logo_github.svg'
import logoHtml from 'assets/images/logo_html.svg'
import logoCss from 'assets/images/logo_css3.svg'
import logoJavascript from 'assets/images/logo_javascript.svg'
import logoReact from 'assets/images/logo_react.svg'
import logoNode from 'assets/images/logo_node.svg'
import logo_typescript from 'assets/images/logo_typescript.svg'
import logo_material_ui from 'assets/images/logo_material_ui.svg'

import 'assets/styles/pages/curriculum.css'

const Home = () => {
  return (
    <div className='curriculum-container'>
      <div className='curriculum__info'>
        <img
          className='card_2 curriculum__image'
          src={imagen}
          alt='foto jhon angulo'
        />

        <div>
          <h3>Ubicacion</h3>
          <p>Soledad, Atlántico - Colombia</p>
        </div>

        <h3>Tecnologias</h3>
        <div className='tecno'>
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
            <p className='tecno__name'>JavaScript</p>
          </div>
          <div className='tecno__item'>
            <img className='tecno__logo' src={logoReact} alt='logo react' />
            <p className='tecno__name'>React</p>
          </div>
          <div className='tecno__item'>
            <img className='tecno__logo' src={logoNode} alt='logo node js' />
            <p className='tecno__name'>Node</p>
          </div>
          <div className='tecno__item'>
            <img className='tecno__logo' src={logo_typescript} alt='logo node js' />
            <p className='tecno__name'>Typescript</p>
          </div>
          <div className='tecno__item'>
            <img className='tecno__logo' src={logo_material_ui} alt='logo node js' />
            <p className='tecno__name'>Material UI</p>
          </div>
        </div>
      </div>
      <div>
        <h1 className='curriculum__title'>jhon manuel angulo moncada</h1>
        <TabCurriculum />
      </div>
    </div>
  )
}

export default Home
