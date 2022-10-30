import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/rms.jpg'
import HeaderSocial from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hi, it's me</h5>
        <h1>Chowdhury Md. Rabby Mahmud</h1>
        <h5 className="text-light"><strong>Full Stack Developer</strong></h5>
        <CTA />
        <HeaderSocial /> 
        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className='scroll__down'>md.rabby.mahmud@gmail.com</a>
      </div>
    </header>
  )
}

export default Header