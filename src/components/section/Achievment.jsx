import React, { useState } from 'react';
import '../../App.css';
import Tilt from 'react-vanilla-tilt';
import {css,js,f,node,react,vac,mon,my,i,socket} from '../../assets/index'


function Achievement() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="p1">
      <div className="projectContainer">
        <h1>//Shayraana (Social media app) <h6 style={{color : 'grey'}}>(run : npm go to shayraana)</h6></h1>
        <Tilt
          className="tilt"
          style={{ background: "transparent" }}
          options={{ scale: 4, max: 55 }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className={`projectContainerCard ${isHovered ? "glow" : ""}`}>
            {isHovered ? (
              <video
                autoPlay
                loop
                muted
                src={'https://bci-images.s3.ap-south-1.amazonaws.com/team/1702813960885_social.mp4'}
                width={500}
              />
            ) : (
              <div className="projectThumbnail">
                <video
                  autoPlay
                  loop
                  muted
                  src={"https://bci-images.s3.ap-south-1.amazonaws.com/team/1702813960885_social.mp4"}
                  width={500}
                />
              </div>
            )}
          </div>
        </Tilt>
        <div className="skillImg">
          <div className="skill">
            <img src={react} alt="" />
          </div>
          <div className="skill">
            <img src={node} alt="" />
          </div>
          <div className="skill">
            <img
              src={mon}
              alt=""
            />
          </div>
          <div className="skill">
            <img src={socket} alt="" />
          </div>
          <div className="skill">
            <img src="public\icons8-js-256.png" alt="" />
          </div>
          <div className="skill">
            <img src="public\icons8-css-200.png" alt="" />
          </div>
        </div>
        <h2>
          Developed a full-stack social media platform using MERN (MongoDB,
          Express.js, React.js, Node.js) stack. Implemented user authentication,
          post creation, liking, and commenting functionalities. Integrated
          image uploading with Multer for user posts. Utilized Axios for
          handling API requests between the frontend and backend. Designed a
          responsive and engaging user interface with Material-UI components.
          Implemented features such as user profiles, timeline feed, and
          real-time updates. Deployed the application to a cloud platform for
          seamless accessibility.
        </h2>
      </div>
      <div className="projectContainer">
        <h1>//Video to Transcript Converter 🎥✨ <h6 style={{color : 'grey'}}>(run : npm go to typescript)</h6></h1>
        <Tilt
          className="tilt"
          style={{ background: "transparent" }}
          options={{ scale: 4, max: 55 }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className={`projectContainerCard ${isHovered ? "glow" : ""}`}>
            {isHovered ? (
              <video
                autoPlay
                loop
                muted
                src={"../../../public/trans.mp4"}
                width={500}
              />
            ) : (
              <div className="projectThumbnail">
                <video
                  autoPlay
                  loop
                  muted
                  src={"../../../public/trans.mp4"}
                  width={500}
                />
              </div>
            )}
          </div>
        </Tilt>
        <div className="skillImg">
          <div className="skill">
            <img src={react} alt="" />
          </div>
          <div className="skill">
            <img src={node} alt="" />
          </div>
          <div className="skill">
            <img src={js} alt="" />
          </div>
          <div className="skill">
            <img src={css} alt="" />
          </div>
        </div>
        <h2>
          The "Video to Transcript Converter" is a personal project that I
          developed to streamline the process of transcribing YouTube videos
          into written text. As a tech enthusiast, I recognized the need for a
          user-friendly tool that simplifies the transcription workflow.
        </h2>
      </div>
      <div className="projectContainer">
        <h1>//Vaccine-dose <h6 style={{color : 'grey'}}>(run : npm go to vaccine)</h6></h1>
        <Tilt
          className="tilt"
          style={{ background: "transparent" }}
          options={{ scale: 4, max: 55 }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className={`projectContainerCard ${isHovered ? "glow" : ""}`}>
            <img
              style={{ objectFit: "fill", width: "100%", height: "300px" }}
              src={vac}
              alt=""
            />
          </div>
        </Tilt>
      <div className="skillImg">
      <div className="skill">
      <img src={node} alt="" />
    </div>
    <div className="skill">
      <img src={mon} alt="" />
    </div>
    <div className="skill">
            <img
              src={js}
              alt=""
            />
          </div>
      
      </div>
        <h2>
          Developed a full-stack social media platform using MERN (MongoDB,
          Express.js, React.js, Node.js) stack. Implemented user authentication,
          post creation, liking, and commenting functionalities. Integrated
          image uploading with Multer for user posts. Utilized Axios for
          handling API requests between the frontend and backend. Designed a
          responsive and engaging user interface with Material-UI components.
          Implemented features such as user profiles, timeline feed, and
          real-time updates. Deployed the application to a cloud platform for
          seamless accessibility.
        </h2>
      </div>
      <div className="projectContainer">
        <h1>//Bookish <h6 style={{color : 'grey'}}>(run : npm go to bookish)</h6></h1>
        <Tilt
          className="tilt"
          style={{ background: "transparent" }}
          options={{ scale: 4, max: 55 }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className={`projectContainerCard ${isHovered ? "glow" : ""}`}>
            <img
              style={{ objectFit: "fill", width: "100%", height: "400px" }}
              src="public\book.jpg"
              alt=""
            />
          </div>
        </Tilt>
      <div className="skillImg">
      <div className="skill">
      <img src={node} alt="" />
    </div>
    <div className="skill">
      <img src={js} alt="" />
    </div>
    <div className="skill">
            <img
              src={mon}
              alt=""
            />
          </div>
      
      </div>
        <h2>
        Developed a Books Management system using Node.js and
        MongoDB for Technetium project.
        Implemented RESTful APIs for user authentication, book
        management, and reviews.
        Ensured data integrity, error handling, and security using JWT
        tokens for authorization.
        </h2>
      </div>
      <div className="projectContainer">
        <h1>//Tuffy the courageous dog <h6 style={{color : 'grey'}}>(run : npm go to tuffy)</h6></h1>
        <Tilt
          className="tilt"
          style={{ background: "transparent" }}
          options={{ scale: 4, max: 55 }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className={`projectContainerCard ${isHovered ? "glow" : ""}`}>
          {isHovered ? (
            <video
              autoPlay
              loop
              muted
              src='public\Tuffy - Google Chrome 2023-01-14 20-37-56.mp4'
              width={500}
            />
          ) : (
            <div className="projectThumbnail">
              <video
                autoPlay
                loop
                muted
                src='public\Tuffy - Google Chrome 2023-01-14 20-37-56.mp4'
                width={500}
              />
            </div>
          )}
          </div>
        </Tilt>
      <div className="skillImg">
    <div className="skill">
      <img src={js} alt="" />
    </div>    
      </div>
        <h2>
          A game clone in which a dog(tuffy) try to kick some as**** to save his owner from evil.Purly made on Javascript canvas.
        </h2>
      </div>
      <div className="projectContainer">
      <h1>//Product-management(backend) <h6 style={{color : 'grey'}}>(run : npm go to shoppingApp)</h6></h1>
      <Tilt
        className="tilt"
        style={{ background: "transparent" }}
        options={{ scale: 4, max: 55 }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className={`projectContainerCard ${isHovered ? "glow" : ""}`}>
          <img
            style={{ objectFit: "fill", width: "100%", height: "300px" }}
            src="product.jpg"
            alt=""
          />
        </div>
      </Tilt>
    <div className="skillImg">
    <div className="skill">
    <img src={node} alt="" />
  </div>
  <div className="skill">
    <img src={js} alt="" />
  </div>
  <div className="skill">
          <img
            src={mon}
            alt=""
          />
        </div>
    
    </div>
      <h2>
        Developed a full-stack social media platform using MERN (MongoDB,
        Express.js, React.js, Node.js) stack. Implemented user authentication,
        post creation, liking, and commenting functionalities. Integrated
        image uploading with Multer for user posts. Utilized Axios for
        handling API requests between the frontend and backend. Designed a
        responsive and engaging user interface with Material-UI components.
        Implemented features such as user profiles, timeline feed, and
        real-time updates. Deployed the application to a cloud platform for
        seamless accessibility.
      </h2>
    </div>
    </div>
  );
}

export default Achievement;