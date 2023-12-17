import React from 'react'
import AboutMe from './section/AboutMe'
import { Link } from 'react-router-dom'
import Experience from './section/Experience'
import Skills from './section/Skills'
import Achievment from './section/Achievment'
import {css,js,f,node,react,vac,mon,my,i,socket} from '../assets/index'

const Explorer = () => {

  return (
    <div className='Ex'>
      {/* <span>Explorer </span><span>...</span> */}
      <img src="image\ex.jpg"/>
    <Link className='aboutMe' to="/aboutMe">aboutMe.txt</Link>
    <Link className='aboutMe'  to="/Ex">experience</Link>
    <Link className='aboutMe'  to="/skills">Skills</Link>
    <Link className='aboutMe'  to = "/achievment">Project</Link>
    <Link className='aboutMe' style={{display : 'flex' ,gap : '5px', textAlign : 'center',alignItems : 'center'}} to = "/myPic"><div style={{ width : '20px' , height : '20px' }}><img style={{width : '100%', height : '100%'}} src={i} alt="" /></div> myPhoto.jpg</Link>
     
     
     
     
    </div>
  )
}

export default Explorer