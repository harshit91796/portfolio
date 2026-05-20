import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Close, ChatBubbleOutline } from '@mui/icons-material'
import { useFiles } from '../context/FilesContext'

const STORAGE_KEY = 'portfolio_onboarding_seen_v1'

const OnboardingToast = () => {
  const { files } = useFiles()
  const { pathname } = useLocation()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (files.length > 0) return
    if (window.localStorage?.getItem(STORAGE_KEY) === 'true') return
    const t = setTimeout(() => setVisible(true), 1800)
    return () => clearTimeout(t)
  }, [files.length])

  useEffect(() => {
    if (files.length > 0 && visible) {
      setVisible(false)
      try {
        window.localStorage?.setItem(STORAGE_KEY, 'true')
      } catch {
        /* ignore */
      }
    }
  }, [files.length, visible])

  const dismiss = () => {
    setVisible(false)
    try {
      window.localStorage?.setItem(STORAGE_KEY, 'true')
    } catch {
      /* ignore */
    }
  }

  if (!visible) return null
  if (pathname.startsWith('/file/')) return null

  return (
    <div className="onboardingToast" role="status">
      <div className="onboardingToast__icon" aria-hidden="true">
        <ChatBubbleOutline sx={{ fontSize: 22 }} />
      </div>
      <div className="onboardingToast__body">
        <div className="onboardingToast__title">Got feedback or a job lead?</div>
        <div className="onboardingToast__desc">
          Click <strong>+ File</strong> in the explorer, or run{' '}
          <code>touch feedback.txt</code> in the terminal (<kbd>Ctrl</kbd>+<kbd>J</kbd>).
          Write anything, then hit Send — I'll get an email.
        </div>
        <div className="onboardingToast__actions">
          <Link to="/file/feedback.txt" className="onboardingToast__cta" onClick={dismiss}>
            Open a draft →
          </Link>
          <button type="button" className="onboardingToast__secondary" onClick={dismiss}>
            Not now
          </button>
        </div>
      </div>
      <button
        type="button"
        className="onboardingToast__close"
        onClick={dismiss}
        aria-label="Dismiss"
      >
        <Close sx={{ fontSize: 16 }} />
      </button>
    </div>
  )
}

export default OnboardingToast
