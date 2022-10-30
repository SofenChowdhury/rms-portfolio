import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/fairmartLogo.png'
import IMG2 from '../../assets/aleshamartLogo.png'
import IMG3 from '../../assets/shahcementLogo.png'

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Works</h5>
      <h2>My Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__items">
          <div className="portfolio__items-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>Fair Mart</h3>
          <div className="portfolio__items-cta">
            {/* <a href="https://www.google.com" className='btn' target="_blank">Github</a> */}
            <a href="https://www.fairmart.com.bd/" className='btn btn-primary' target="_blank">Live</a>
          </div>
        </article>
        <article className="portfolio__items">
          <div className="portfolio__items-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>Alesha Mart</h3>
          <div className="portfolio__items-cta">
            {/* <a href="https://www.google.com" className='btn' target="_blank">Github</a> */}
            <a href="https://aleshamart.com/" className='btn btn-primary' target="_blank">Live</a>
          </div>
        </article>
        <article className="portfolio__items">
          <div className="portfolio__items-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>Shah Cement</h3>
          <div className="portfolio__items-cta">
            {/* <a href="https://www.google.com" className='btn' target="_blank">Github</a> */}
            <a href="https://shahcement.com/" className='btn btn-primary' target="_blank">Live</a>
          </div>
        </article>
        
      </div>
    </section>
  )
}

export default Portfolio