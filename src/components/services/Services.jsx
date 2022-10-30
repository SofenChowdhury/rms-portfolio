import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>My Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>To support the department in running the work process.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>To collaborate with team members for the required tasks.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>To develop the given required tasks and also create API for mobile app.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>To develop the coding structure.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>To develop the coding structure.</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Web Skills</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>JavaScript/ReactJS/NextJS</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>PHP 8/Laravel 9</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Bootstrap5/HTML5/CSS3</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>MySQL/Laragon/Docker</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>LAMP - Full Stack</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services