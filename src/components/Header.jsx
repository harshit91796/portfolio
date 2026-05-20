import React from 'react'
import { Link } from 'react-router-dom'
import {
  Close,
  CropSquare,
  Remove,
  ViewSidebar,
  ViewQuilt,
  Apps,
} from '@mui/icons-material'

const menus = ['File', 'Edit', 'Selection', 'View', 'Go', 'Run', 'Terminal', 'Help']

const VSCodeLogo = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
    <path
      fill="#0098FF"
      d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z"
    />
  </svg>
)

const Header = () => {
  return (
    <header className="vsTitleBar" role="banner">
      <div className="vsTitleBar__left">
        <Link
          to="/"
          className="vsTitleBar__logo"
          aria-label="Home"
          title="Home"
        >
          <VSCodeLogo />
        </Link>
        <nav className="vsTitleBar__menus" aria-label="Application menu">
          {menus.map((m) => (
            <button key={m} type="button" className="vsTitleBar__menu">
              <span className="vsTitleBar__menuLetter">{m[0]}</span>
              {m.slice(1)}
            </button>
          ))}
        </nav>
      </div>

      <div className="vsTitleBar__title">
        Harshit Rajput Portfolio &mdash; Visual Studio Code
      </div>

      <div className="vsTitleBar__right">
        <button type="button" className="vsTitleBar__iconBtn" aria-label="Toggle primary sidebar">
          <ViewSidebar sx={{ fontSize: 16 }} />
        </button>
        <button type="button" className="vsTitleBar__iconBtn" aria-label="Toggle panel">
          <ViewQuilt sx={{ fontSize: 16 }} />
        </button>
        <button type="button" className="vsTitleBar__iconBtn" aria-label="Toggle secondary sidebar">
          <Apps sx={{ fontSize: 16 }} />
        </button>
        <span className="vsTitleBar__divider" />
        <button type="button" className="vsTitleBar__winBtn" aria-label="Minimize">
          <Remove sx={{ fontSize: 16 }} />
        </button>
        <button type="button" className="vsTitleBar__winBtn" aria-label="Maximize">
          <CropSquare sx={{ fontSize: 14 }} />
        </button>
        <button type="button" className="vsTitleBar__winBtn vsTitleBar__winBtn--close" aria-label="Close">
          <Close sx={{ fontSize: 16 }} />
        </button>
      </div>
    </header>
  )
}

export default Header
