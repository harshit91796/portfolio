import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Close } from '@mui/icons-material'
import { FileIconFor } from './fileIcons'

const TABS = [
  { name: 'aboutMe.txt', to: '/aboutMe' },
  { name: 'experience.ts', to: '/Ex' },
  { name: 'skills.ts', to: '/skills' },
  { name: 'projects.ts', to: '/achievment' },
  { name: 'myPhoto.jpg', to: '/myPic' },
]

const MiddleNav = () => {
  const { pathname } = useLocation()

  return (
    <nav className="vsTabBar" aria-label="Open editors">
      {TABS.map((tab) => {
        const active = pathname === tab.to
        return (
          <Link
            key={tab.to}
            to={tab.to}
            className={`vsTab${active ? ' is-active' : ''}`}
          >
            <FileIconFor name={tab.name} />
            <span className="vsTab__name">{tab.name}</span>
            <span
              className="vsTab__close"
              aria-hidden="true"
              role="presentation"
              title="Close (decorative)"
            >
              <Close sx={{ fontSize: 14 }} />
            </span>
          </Link>
        )
      })}
    </nav>
  )
}

export default MiddleNav
