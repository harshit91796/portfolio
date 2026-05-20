import React from 'react'
import {
  ErrorOutline,
  ReportProblemOutlined,
  CallSplit,
  Sync,
  Wifi,
  Code,
  Check,
  NotificationsNone,
  AccountCircle,
} from '@mui/icons-material'

const Footer = () => {
  return (
    <footer className="vsStatusBar" role="contentinfo">
      <div className="vsStatusBar__left">
        <button
          type="button"
          className="vsStatusBar__item vsStatusBar__item--errors"
          title="No problems"
        >
          <ErrorOutline sx={{ fontSize: 14 }} />
          <span>0</span>
          <ReportProblemOutlined sx={{ fontSize: 14, ml: '6px' }} />
          <span>0</span>
        </button>
        <button
          type="button"
          className="vsStatusBar__item vsStatusBar__item--branch"
          title="Current branch"
        >
          <CallSplit sx={{ fontSize: 14 }} />
          <span>main</span>
          <Sync sx={{ fontSize: 14, ml: '4px' }} />
        </button>
        <button
          type="button"
          className="vsStatusBar__item vsStatusBar__item--liveShare"
          title="Live Share"
        >
          <AccountCircle sx={{ fontSize: 14 }} />
          <span>Live Share</span>
        </button>
      </div>

      <div className="vsStatusBar__right">
        <span className="vsStatusBar__item vsStatusBar__item--cursor">Ln 12, Col 22</span>
        <span className="vsStatusBar__item vsStatusBar__item--spaces">Spaces: 2</span>
        <span className="vsStatusBar__item vsStatusBar__item--encoding">UTF-8</span>
        <span className="vsStatusBar__item vsStatusBar__item--eol">CRLF</span>
        <span className="vsStatusBar__item vsStatusBar__item--language">
          <Code sx={{ fontSize: 14 }} />
          <span>JavaScript JSX</span>
        </span>
        <span className="vsStatusBar__item vsStatusBar__item--goLive">
          <Wifi sx={{ fontSize: 14 }} />
          <span>Go Live</span>
        </span>
        <span className="vsStatusBar__item vsStatusBar__item--prettier">
          <Check sx={{ fontSize: 14 }} />
          <span>Prettier</span>
        </span>
        <button
          type="button"
          className="vsStatusBar__item vsStatusBar__item--notifications"
          aria-label="Notifications"
        >
          <NotificationsNone sx={{ fontSize: 14 }} />
        </button>
      </div>
    </footer>
  )
}

export default Footer
