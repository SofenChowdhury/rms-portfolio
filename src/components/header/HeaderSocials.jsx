import React from 'react'

import {BsLinkedin, BsGithub, BsFacebook } from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/chowdhury-md-rabby-mahmud-a02831180/" target="_blank"><BsLinkedin /></a>
        <a href="https://github.com/SofenChowdhury" target="_blank"><BsGithub /></a>
        {/* <a href="" target="_blank"><BsFacebook /></a> */}
    </div>
  )
}

export default HeaderSocials