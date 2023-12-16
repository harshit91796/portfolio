import React from 'react'
import AboutMe from './section/AboutMe'
import Achievment from './section/Achievment'
import { Link } from 'react-router-dom'


const MiddleNav = () => {
  return (
    <>
    <ul className='nav'>
    <Link className='aboutMe2' to="/aboutMe">aboutMe.txt</Link>
    <Link className='aboutMe2'  to="/Ex">experience</Link>
    <Link className='aboutMe2'  to="/skills">Skills</Link>
    <Link className='aboutMe2'  to = "/achievment">Project</Link>
    <Link className='aboutMe2'  to = "/myPic">myPhoto.jpg</Link>
    
    </ul>
    </>
  )
}

export default MiddleNav