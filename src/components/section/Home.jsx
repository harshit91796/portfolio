import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
import {
  EditOutlined,
  FolderOpenOutlined,
  CloudDownloadOutlined,
  GitHub,
  LinkedIn,
  PersonOutline,
  Build,
  WorkOutline,
  FolderSpecialOutlined,
  TerminalOutlined,
  NoteAddOutlined,
} from '@mui/icons-material'
import './home.css'

const RECENT = [
  {
    slug: 'shayraana',
    label: 'shayraana.ts',
    path: '~/projects',
    url: 'https://github.com/harshit91796/shayrana_SocialMedia_app',
  },
  {
    slug: 'transcript',
    label: 'transcript.ts',
    path: '~/projects',
    url: 'https://github.com/harshit91796/Video_to_transcripy',
  },
  {
    slug: 'vaccine',
    label: 'vaccine.ts',
    path: '~/projects',
    url: 'https://github.com/harshit91796/vaccine_slot_booking',
  },
  {
    slug: 'bookish',
    label: 'bookish.ts',
    path: '~/projects',
    url: 'https://github.com/harshit91796/Book_Management',
  },
  {
    slug: 'tuffy',
    label: 'tuffy.js',
    path: '~/games',
    url: 'https://harshit91796.github.io/tuffy-game/',
  },
  {
    slug: 'shoppingApp',
    label: 'shoppingApp.ts',
    path: '~/projects',
    url: 'https://github.com/harshit91796/shoping_app',
  },
]

const WALKTHROUGHS = [
  {
    title: 'Get to know me',
    desc: 'A short read on who I am, how I got here, and how I work.',
    Icon: PersonOutline,
    to: '/aboutMe',
  },
  {
    title: 'What I work with',
    desc: 'The stack I reach for, grouped by where it sits.',
    Icon: Build,
    to: '/skills',
  },
  {
    title: "Where I've shipped",
    desc: 'My experience at FunctionUp and what I owned.',
    Icon: WorkOutline,
    to: '/Ex',
  },
  {
    title: 'Browse projects',
    desc: "Six things I've built end-to-end. Click any preview to open the repo.",
    Icon: FolderSpecialOutlined,
    to: '/achievment',
  },
]

const downloadResume = () => {
  const link = document.createElement('a')
  link.href = '/Harshit_final_Resume2_compressed.pdf'
  link.download = 'Harshit_Rajput_Resume.pdf'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

function Home() {
  const navigate = useNavigate()

  return (
    <div className="welcomeView">
      <header className="welcomeView__hero">
        <h1 className="welcomeView__name">Harshit Rajput</h1>
        <p className="welcomeView__tagline">Full-Stack Developer · Bhopal, India</p>
        <span className="welcomeView__status" role="status">
          <span className="welcomeView__statusDot" aria-hidden="true" />
          Open to opportunities
        </span>
      </header>

      <div className="welcomeView__grid">
        <div className="welcomeView__column">
          <section className="welcomeView__section">
            <h2 className="welcomeView__sectionTitle">Start</h2>

            <a
              className="welcomeView__action"
              href="https://www.linkedin.com/in/harshit-rajput-b03a0b265/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <EditOutlined className="welcomeView__actionIcon" />
              <span>New chat<span className="welcomeView__actionDim">…</span></span>
            </a>

            <Link className="welcomeView__action welcomeView__action--accent" to="/file/feedback.txt">
              <NoteAddOutlined className="welcomeView__actionIcon" />
              <span>Leave me a note<span className="welcomeView__actionDim">…</span></span>
            </Link>

            <Link className="welcomeView__action" to="/aboutMe">
              <FolderOpenOutlined className="welcomeView__actionIcon" />
              <span>Open portfolio<span className="welcomeView__actionDim">…</span></span>
            </Link>

            <button
              type="button"
              className="welcomeView__action"
              onClick={downloadResume}
            >
              <CloudDownloadOutlined className="welcomeView__actionIcon" />
              <span>Download resume<span className="welcomeView__actionDim">…</span></span>
            </button>

            <a
              className="welcomeView__action"
              href="https://github.com/harshit91796"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHub className="welcomeView__actionIcon" />
              <span>Clone Git repository<span className="welcomeView__actionDim">…</span></span>
            </a>
          </section>

          <section className="welcomeView__section">
            <h2 className="welcomeView__sectionTitle">Recent</h2>
            {RECENT.map((item) => (
              <a
                key={item.slug}
                className="welcomeView__recent"
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="welcomeView__recentLabel">{item.label}</span>
                <span className="welcomeView__recentPath">{item.path}</span>
              </a>
            ))}
            <button
              type="button"
              className="welcomeView__more"
              onClick={() => navigate('/achievment')}
            >
              More<span className="welcomeView__actionDim">…</span>
            </button>
          </section>
        </div>

        <div className="welcomeView__column">
          <section className="welcomeView__section">
            <h2 className="welcomeView__sectionTitle">Walkthroughs</h2>
            {WALKTHROUGHS.map(({ title, desc, Icon, to }) => (
              <Link key={to} className="welcomeView__walkthrough" to={to}>
                <span className="welcomeView__walkthroughIcon">
                  <Icon sx={{ fontSize: 22 }} />
                </span>
                <span className="welcomeView__walkthroughBody">
                  <span className="welcomeView__walkthroughTitle">{title}</span>
                  <span className="welcomeView__walkthroughDesc">{desc}</span>
                </span>
              </Link>
            ))}
          </section>
        </div>
      </div>

      <footer className="welcomeView__footer">
        <div className="welcomeView__hints">
          <span className="welcomeView__hint">
            <TerminalOutlined sx={{ fontSize: 14 }} />
            Open terminal · <kbd>Ctrl</kbd> <kbd>J</kbd>
          </span>
          <span className="welcomeView__hint">
            Toggle fullscreen · <kbd>F11</kbd>
          </span>
        </div>

        <div className="welcomeView__links">
          <a
            href="https://github.com/harshit91796"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <GitHub sx={{ fontSize: 18 }} />
          </a>
          <a
            href="https://www.linkedin.com/in/harshit-rajput-b03a0b265/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <LinkedIn sx={{ fontSize: 18 }} />
          </a>
        </div>

        <label className="welcomeView__checkbox">
          <input type="checkbox" defaultChecked />
          Show welcome page on startup
        </label>
      </footer>
    </div>
  )
}

export default Home
