
// const myComponentStyle = {
//   color: 'red',
//   fontSize : 50,
//   fontFamily: '"Segoe WPC", "Segoe UI", SFUIText-Light, HelveticaNeue-Light, sans-serif, "Droid Sans Fallback"',
//   fontWeight: 400,

  
// }

// const paragraphStyle = {
//   color: 'white',
//   fontSize: '30px', // Adjust the font size as needed
//   fontFamily: '"Segoe WPC", "Segoe UI", SFUIText-Light, HelveticaNeue-Light, sans-serif, "Droid Sans Fallback"',
//   fontWeight: 400,
//   padding : 10,
//   marginLeft : 20,
// };

import React from 'react';

const container = {
  overflowY: 'auto',
  height : 660
}

const headingStyle = {
  color: '#6A9955',
  fontSize: '50px',
  fontFamily: '"Segoe WPC", "Segoe UI", SFUIText-Light, HelveticaNeue-Light, sans-serif, "Droid Sans Fallback"',
  fontWeight: 400,
  marginLeft : 20,
};

const paragraphStyle = {
  color: "#CCCCCC",
  fontSize: '30px', // Adjust the font size as needed
  fontFamily: '"Segoe WPC", "Segoe UI", SFUIText-Light, HelveticaNeue-Light, sans-serif, "Droid Sans Fallback"',
  fontWeight: 400,
    padding : 10,
  marginLeft : 20,
};

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function highlightKeywords(paragraph, keywords) {
  const regex = new RegExp(`\\b(${keywords.join('|')})\\b`, 'gi');

  return paragraph.split(regex).map((chunk, index) => {
    if (keywords.includes(chunk.toLowerCase())) {
      return (
        <span key={index} style={{ color: getRandomColor(), fontWeight: 600 }}>
          {chunk}
        </span>
      );
    }
    return <span key={index}>{chunk}</span>;
  });
}

function Skills() {
  const skillsText = `
    As a dynamic and detail-oriented Full Stack Developer, I specialize in
    the MERN stack, demonstrating proficiency in MongoDB, Express.js,
    React.js, and Node.js. My expertise extends to database management with
    MySQL, ensuring seamless integration and efficient data handling.
    
    I am well-versed in version control using Git, enabling collaborative
    development and streamlined project management. Additionally, my
    proficiency in Docker reflects my commitment to efficient and scalable
    application deployment.
    
    With a strong foundation in front-end development, I am experienced in
    crafting interactive and responsive user interfaces using React.js and
    Next.js. My design sensibility is enhanced by my mastery of Material-UI,
    ensuring a polished and user-friendly experience.

    In addition, I bring extensive knowledge in AWS (Amazon Web Services), leveraging cloud computing solutions to optimize scalability, security, and performance in web applications. This includes experience in deploying applications, managing resources, and ensuring reliable infrastructure on the AWS platform.
    
    These skills, coupled with a passion for clean and efficient code,
    position me as a versatile developer capable of contributing to a wide
    range of projects.
  `;

  const keywordsToHighlight = ['git', 'docker', 'aws', 'next.js','mongodb','mysql','mern','express.js','node.js'];

  const paragraphs = skillsText.split('\n').filter(paragraph => paragraph.trim() !== '');

  return (
    <div style={container}>
      <h1 style={headingStyle}>//Skills</h1>
      {paragraphs.map((paragraph, index) => (
        <div key={index} style={paragraphStyle}>
          {highlightKeywords(paragraph, keywordsToHighlight)}
        </div>
      ))}
    </div>
  );
}

export default Skills;

