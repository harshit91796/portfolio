import React from 'react'
import './home.css'
import { Sidebar } from '../Sidebar'
import Explorer from '../Explorer'
import { ArrowDownward, DynamicFeed, FileOpen, FileOpenOutlined, GitHub, Instagram, LinkedIn, Male, Terminal } from '@mui/icons-material'
import { Link } from 'react-router-dom'
function Home() {
  const handleDownloadResume = () => {
    // Replace 'your_resume.pdf' with the actual file name of your resume
    const resumeFilePath = `/Harshit_final_Resume2_compressed.pdf`;


    // Creating a virtual link element
    const link = document.createElement('a');
    link.href = resumeFilePath;
    link.download = 'Harshit_Rajput_Resume.pdf'; // Specify the desired file name for the user
    document.body.appendChild(link);

    // Triggering the click event to start the download
    link.click();

    // Removing the virtual link element
    document.body.removeChild(link);
  };

  return (
    <div className='homeContainer'>
       <div className="homeFirst">
         <div className="homeName">
         <h1>Harshit rajput</h1>
         <span>Full-Stack Webdevloper</span>
         </div>
       </div>
       <div className="homeSecond">
          <div className="secondLeft">
              <div className="secondStart">
                  <span className='start'>Start</span>
                  <span className='newFile'><FileOpenOutlined className='down' /><span className='h2'>press f11 for better experience</span></span>
                 <Link to='/aboutMe' style={{textDecoration: "none",color : 'inherit'}}> <span className='fileOpen'><FileOpen className='down'/><span className='h2'>Open portfolio</span></span></Link> 
                  <span className='download' style={{ cursor : 'pointer' }} onClick={handleDownloadResume}><ArrowDownward className='down'/><span className='h2'>Download resume</span></span>
              </div>
              <div className="secondStart">
                  <span className='start'>Commands</span>
                  <span className='newFile'><Terminal className='down' /><span className='h2' style={{color : '#cccccc'}}>Write "npm go to 'project name/link name'" to redirect </span></span>
                  <span className='fileOpen'><DynamicFeed className='down'/><span style={{color : '#cccccc'}} className='h2'>"ctrl+f" to toggle the terminal</span></span>
                  <div className="links"  >
                  <Link className='li' to={'https://github.com/harshit91796'}><GitHub/></Link>
                  <Link className='li' to={'https://www.linkedin.com/in/harshit-rajput-b03a0b265/'}><LinkedIn/></Link>
                  <Link className='li' to={'https://www.instagram.com/harshitrajput917/'}><Instagram/></Link>
                  </div>
                  <span className='download'><Male className='down'/><span className='h2'>My onlyfans</span></span>
              </div>
          </div>
          <div className="secondRight">
          <span className='end'>Walk through </span>
             <div className="imgContainer">
             <img className = "header1" src='image\w.jpg'></img>
             </div>
          </div>
       </div>
    </div>
  )
}

export default Home
