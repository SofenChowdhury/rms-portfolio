import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id="experience">
      <h5>Work History</h5>
      <h2>My Experiences</h2>
      <div className="container experience__container">
        <div>
          <h3>Software Engineer</h3>
          <h3>
            <a className='experience__company' href="https://www.fairgroupbd.com/" target="_blank">
              Fair Group Bangladesh
            </a>
          </h3>
          <h3 className='experience__date'>November 2021 - Present</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>To support the department in running the work process.</h4>
                {/* <small className="text-light">Intermediete</small> */}
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>To collaborate with team members for the required tasks.</h4>
                {/* <small className="text-light">Intermediete</small> */}
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>To develop the given required tasks and also create API for mobile app.</h4>
                {/* <small className="text-light">Experienced</small> */}
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>To develop the coding structure and marge the work from the team members.</h4>
                {/* <small className="text-light">Experienced</small> */}
              </div>
            </article>
          </div>
        </div>
        <div>
          <h3>Jr. Software Engineer</h3>
          <h3>
            <a className='experience__company' href="https://www.aleshasolutions.com/" target="_blank">
              Alesha Solutions Ltd.
            </a>
          </h3>
          <h3 className='experience__date'>June 2021 - October 2021</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>LAMP - Full Stack</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>JavaScript/ReactJS/NextJS</h4>
                <small className="text-light">Advance</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>MySql</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>PHP/Laravel</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
        <div>
          <h3>Jr. Software Engineer</h3>
          <h3>
            <a className='experience__company' href="http://xobotronix.com/" target="_blank">
            Xobotronix
            </a>
          </h3>
          <h3 className='experience__date'>October 2019 - May 2021</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Bootstrap/jQuery</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>HTML5/CSS3</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>LAMP-Full Stack</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>JavaScript/ReactJS/NextJS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
        <div>
          <h3>Teaching Assistant</h3>
          <h3>
            <a className='experience__company' href="https://www.aiub.edu/" target="_blank">
              American International University - Bangladesh
            </a>
          </h3>
          <h3 className='experience__date'>June 2019 - September 2019</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>To help the students with lab tasks</h4>
                {/* <small className="text-light">Experienced</small> */}
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>To help the students understand study topics.</h4>
                {/* <small className="text-light">Experienced</small> */}
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>To help the teacher conduct lab exams</h4>
                {/* <small className="text-light">Experienced</small> */}
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>To help the teacher re-check lab exams paper</h4>
                {/* <small className="text-light">Experienced</small> */}
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience