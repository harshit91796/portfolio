import React, { useState } from 'react'
import Tilt from 'react-vanilla-tilt'
import { CodeBlock, Line } from '../CodeBlock'
import { book, socket, vac } from '../../assets/index'

const K = ({ children }) => <span className="tok-kw">{children}</span>
const V = ({ children }) => <span className="tok-var">{children}</span>
const P = ({ children }) => <span className="tok-prop">{children}</span>
const S = ({ children }) => <span className="tok-str">{`'${children}'`}</span>
const C = ({ children }) => <span className="tok-cmt">{children}</span>
const Doc = ({ children }) => <span className="tok-doc">{children}</span>
const Tag = ({ children }) => <span className="tok-tag">{children}</span>
const Op = ({ children }) => <span className="tok-op">{children}</span>

const list = (items) =>
  items.flatMap((item, i) => [
    <S key={`s${i}`}>{item}</S>,
    i < items.length - 1 ? <Op key={`,${i}`}>{', '}</Op> : null,
  ])

const PROJECTS = [
  {
    slug: 'unseenPrice',
    title: 'Unseen Price',
    blurb: 'Hyperlocal Indian marketplace platform',
    link: 'https://www.unseenprice.com',
    cmd: 'npm go to unseenPrice',
    stack: ['React', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'Razorpay', 'Supabase'],
    notes: [
      'Built the entire frontend and backend end-to-end',
      'Radius-based geospatial search with MongoDB $centerSphere and 2dsphere indexes',
      'Razorpay subscriptions across 4 plan tiers with signature-verified webhooks',
      'Self-serve native ad platform with fair Fisher-Yates rotation and frequency capping',
      'Direct client-to-Supabase image uploads with client-side compression',
      'JWT auth with refresh rotation, Google OAuth and email verification gating',
      'Sparse product variant system with MRP pricing and a moderation pipeline',
    ],
    media: { type: 'image', src: '/unseenprice.png' },
  },
  {
    slug: '26 Letters ',
    title: ' 26 Letters ',
    blurb: 'Photographer\'s portfolio website',
    link: 'https://github.com/harshit91796/portfolia',  
    cmd: 'npm go to 26Letters',
    stack: ['React', "TypeScript","Tailwind CSS"],
    notes: [
      'A single-page interactive portfolio for a photography studio ', 
      ' featuring a cinematic loading sequence',
      ,'scroll-choreographed section transitions, and image-driven storytelling.',
      'CSS Modules for scoped, maintainable styles',
      'Features interactive project cards and smooth animations',
    ],
    media: { type: 'iframe', src: 'https://youtube.com/embed/RQ9L3n9df8g?autoplay=1&mute=1&loop=1&playlist=RQ9L3n9df8g&controls=0' },
  },
  {
    slug: 'shayraana',
    title: 'Shayraana',
    blurb: 'Social media app',
    link: 'https://github.com/harshit91796/shayrana_SocialMedia_app',
    cmd: 'npm go to shayraana',
    stack: ['React', 'Node.js', 'MongoDB', 'Express.js', 'Multer', 'socket.io', 'Material-UI'],
    notes: [
      'Full MERN stack with auth, posts, likes and comments',
      'Image uploads handled via Multer',
      'Responsive UI built with Material-UI',
    ],
    media: { type: 'video', src: 'https://bci-images.s3.ap-south-1.amazonaws.com/team/1702813960885_social.mp4' },
  },
  {
    slug: 'transcript',
    title: 'Video → Transcript',
    blurb: 'YouTube video to text converter',
    link: 'https://github.com/harshit91796/Video_to_transcripy',
    cmd: 'npm go to transcript',
    stack: ['React', 'Node.js', 'MongoDB', 'YouTube API'],
    notes: [
      'Paste a YouTube URL, get the transcript back as text',
      'Built to streamline note-taking from technical videos',
    ],
    media: { type: 'video', src: '/trans.mp4' },
  },
  {
    slug: 'vaccine',
    title: 'Vaccine Slot Booking',
    blurb: 'Backend for vaccine appointment booking',
    link: 'https://github.com/harshit91796/vaccine_slot_booking',
    cmd: 'npm go to vaccine',
    stack: ['Node.js', 'Express.js', 'MongoDB', 'JWT'],
    notes: [
      'REST API for citizen registration and slot booking',
      'Role-based access for admins and users',
      'Schema-level validation and rate limiting',
    ],
    media: { type: 'image', src: vac },
  },
  {
    slug: 'bookish',
    title: 'Bookish',
    blurb: 'Books management REST API',
    link: 'https://github.com/harshit91796/Book_Management',
    cmd: 'npm go to bookish',
    stack: ['Node.js', 'Express.js', 'MongoDB', 'JWT'],
    notes: [
      'CRUD APIs for books, authors and reviews',
      'JWT-based authorization with role guards',
      'Strong validation and consistent error handling',
    ],
    media: { type: 'image', src: book },
  },
  {
    slug: 'tuffy',
    title: 'Tuffy the Courageous Dog',
    blurb: 'Browser canvas game',
    link: 'https://harshit91796.github.io/tuffy-game/',
    cmd: 'npm go to tuffy',
    stack: ['JavaScript', 'Canvas API'],
    notes: [
      'A canvas-based action game built from scratch',
      'Tuffy fights bad guys to save his owner',
    ],
    media: { type: 'iframe', src: 'https://www.youtube.com/embed/ZU5sKUzQDFc?autoplay=1&mute=1&loop=1&playlist=ZU5sKUzQDFc&controls=0' },
  },
  {
    slug: 'shoppingApp',
    title: 'Product Management',
    blurb: 'E-commerce backend',
    link: 'https://github.com/harshit91796/shoping_app',
    cmd: 'npm go to shoppingApp',
    stack: ['Node.js', 'Express.js', 'MongoDB'],
    notes: [
      'Catalog, cart and order REST APIs',
      'Authentication and role-based product management',
      'Pagination, filtering and search across products',
    ],
    media: { type: 'image', src: '/product.jpg' },
  },
]

const ProjectMedia = ({ media, title }) => {
  if (media.type === 'video') {
    return (
      <video
        className="projectMedia"
        src={media.src}
        autoPlay
        loop
        muted
        playsInline
        aria-label={`${title} preview`}
      />
    )
  }
  if (media.type === 'iframe') {
    return (
      <iframe
        className="projectMedia"
        src={media.src}
        title={`${title} preview`}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      />
    )
  }
  return <img className="projectMedia" src={media.src} alt={`${title} preview`} />
}

const ProjectCard = ({ project, index }) => {
  const [hovered, setHovered] = useState(false)

  return (
    <article
      className="projectCard"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <CodeBlock filename={`projects/${project.slug}.ts`}>
        <Line><C>/**</C></Line>
        <Line><C>{' * '}</C><Doc>{project.title}</Doc><C>{' — '}</C><Doc>{project.blurb}</Doc></Line>
        <Line><C>{' * '}</C><Tag>@link</Tag><Doc>{` ${project.link}`}</Doc></Line>
        <Line><C>{' * '}</C><Tag>@run</Tag><C>{`  `}</C><Doc>{project.cmd}</Doc></Line>
        <Line><C>{' */'}</C></Line>
        <Line />
        <Line><K>const</K> <V>{project.slug}</V> <Op>=</Op> {'{'}</Line>
        <Line indent={1}><P>stack</P><Op>: [</Op>{list(project.stack)}<Op>],</Op></Line>
        <Line indent={1}><P>notes</P><Op>: [</Op></Line>
        {project.notes.map((note, i) => (
          <Line key={i} indent={2}>
            <S>{note}</S>
            <Op>,</Op>
          </Line>
        ))}
        <Line indent={1}><Op>],</Op></Line>
        <Line>{'}'}<Op>;</Op></Line>
      </CodeBlock>

      <a
        className="projectMediaWrap"
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        aria-label={`Open ${project.title}`}
      >
        <Tilt
          className="projectTilt"
          options={{ scale: 1.02, max: 12, glare: true, 'max-glare': 0.25 }}
        >
          <div className={`projectMediaFrame${hovered ? ' is-hovered' : ''}`}>
            <ProjectMedia media={project.media} title={project.title} />
          </div>
        </Tilt>
      </a>
    </article>
  )
}

function Achievement() {
  return (
    <div className="projectsView">
      <div className="projectsView__intro">
        <CodeBlock filename="projects/index.ts" language="typescript">
          <Line><C>// Selected projects. Each one lives in its own file below.</C></Line>
          <Line><C>// Type `</C><Doc>help</Doc><C>` or `</C><Doc>ls</Doc><C>` in the terminal (Ctrl+J) to navigate.</C></Line>
          <Line><C>// Click any preview to open the repo or demo.</C></Line>
        </CodeBlock>
      </div>
      {PROJECTS.map((p, i) => (
        <ProjectCard key={p.slug} project={p} index={i} />
      ))}
    </div>
  )
}

export default Achievement
