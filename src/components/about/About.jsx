import React from 'react'
import './about.css'
import ME from '../../assets/rms.jpg'
import {FaAward} from 'react-icons/fa'
import {BsPeopleFill} from 'react-icons/bs'
import {MdFolderSpecial} from 'react-icons/md'

const About = () => {
  return (
    <section id="about">
      {/* <h5>md.rabby.mahmud@gmail.com</h5> */}
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me"/>
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>3+ Years</small>
            </article>
            <article className="about__card">
              <MdFolderSpecial className='about__icon'/>
              <h5>Projects</h5>
              <small>15+ Completed</small>
            </article>
            <article className="about__card">
              <BsPeopleFill className='about__icon'/>
              <h5>Clientele</h5>
              <small>20+ worldwide</small>
            </article>
          </div>

          <p>
            I'm an enthusiastic, responsible, and hard-working IT person. Being worked for different projects
            helped me to adapt to the changes quickly and made me a mature team worker. I am able to work
            well both in a team environment as well as using my own initiative. I am able to work well under
            pressure and adhere to strict deadlines.

          </p>
          
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        
        </div>
      </div>
    </section>
  )
}

export default About