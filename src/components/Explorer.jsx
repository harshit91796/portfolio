import React, { useEffect, useRef, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import {
  MoreHoriz,
  NoteAddOutlined,
  CreateNewFolderOutlined,
  RefreshOutlined,
  UnfoldLessOutlined,
  KeyboardArrowDown,
  KeyboardArrowRight,
} from '@mui/icons-material'
import { FolderIcon, FileIconFor } from './fileIcons'
import { useFiles } from '../context/FilesContext'

const ROOT_FILES = [
  { name: 'aboutMe.txt', to: '/aboutMe' },
  { name: 'experience.ts', to: '/Ex' },
  { name: 'skills.ts', to: '/skills' },
]

const PROJECT_FILES = [
  { name: 'shayraana.ts' },
  { name: 'transcript.ts' },
  { name: 'vaccine.ts' },
  { name: 'bookish.ts' },
  { name: 'tuffy.js' },
  { name: 'shoppingApp.ts' },
]

const TAIL_FILES = [{ name: 'myPhoto.jpg', to: '/myPic' }]

const Caret = ({ open }) =>
  open ? (
    <KeyboardArrowDown sx={{ fontSize: 16 }} />
  ) : (
    <KeyboardArrowRight sx={{ fontSize: 16 }} />
  )

const Explorer = ({ isOpen = false, onClose }) => {
  const [portfolioOpen, setPortfolioOpen] = useState(true)
  const [projectsOpen, setProjectsOpen] = useState(true)
  const [draftsOpen, setDraftsOpen] = useState(true)
  const [newFileMode, setNewFileMode] = useState(false)
  const [newFileName, setNewFileName] = useState('')
  const newFileInputRef = useRef(null)
  const escapedRef = useRef(false)
  const initializedRef = useRef(false)
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const { files: userFiles, createFile } = useFiles()

  const isOnProjects = pathname === '/achievment'

  useEffect(() => {
    if (newFileMode) {
      escapedRef.current = false
      newFileInputRef.current?.focus()
    }
  }, [newFileMode])

  useEffect(() => {
    if (initializedRef.current && onClose) onClose()
    initializedRef.current = true
  }, [pathname])

  const startNewFile = (e) => {
    e?.stopPropagation()
    setPortfolioOpen(true)
    setDraftsOpen(true)
    setNewFileName('')
    setNewFileMode(true)
  }

  const commitNewFile = () => {
    if (escapedRef.current) {
      escapedRef.current = false
      setNewFileMode(false)
      return
    }
    const trimmed = newFileName.trim()
    setNewFileMode(false)
    if (!trimmed) return
    const finalName = /\.[a-z0-9]+$/i.test(trimmed) ? trimmed : `${trimmed}.txt`
    const createdName = createFile(finalName)
    navigate(`/file/${encodeURIComponent(createdName)}`)
  }

  const onNewFileKey = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      commitNewFile()
    } else if (e.key === 'Escape') {
      e.preventDefault()
      escapedRef.current = true
      setNewFileMode(false)
      setNewFileName('')
    }
  }

  const fileRow = (file, paddingLeft = 20) => {
    const active = pathname === file.to
    return (
      <Link
        key={file.to}
        to={file.to}
        className={`vsExplorer__row vsExplorer__file${active ? ' is-active' : ''}`}
        style={{ paddingLeft }}
      >
        <FileIconFor name={file.name} />
        <span className="vsExplorer__name">{file.name}</span>
      </Link>
    )
  }

  const showDraftsFolder = userFiles.length > 0 || newFileMode

  return (
    <aside
      className={`vsExplorer${isOpen ? ' is-open' : ''}`}
      aria-label="Explorer"
    >
      <div className="vsExplorer__header">
        <span className="vsExplorer__title">Explorer</span>
        <button
          type="button"
          className="vsExplorer__iconBtn"
          aria-label="Views and More Actions…"
          title="Views and More Actions…"
        >
          <MoreHoriz sx={{ fontSize: 16 }} />
        </button>
      </div>

      <div className="vsExplorer__group">
        <div className="vsExplorer__groupHeader">
          <button
            type="button"
            className="vsExplorer__groupToggle"
            onClick={() => setPortfolioOpen((o) => !o)}
            aria-expanded={portfolioOpen}
          >
            <Caret open={portfolioOpen} />
            <span>Portfolio</span>
          </button>
          <div className="vsExplorer__groupActions">
            <button
              type="button"
              className="vsExplorer__iconBtn"
              aria-label="New File"
              title="New File…"
              onClick={startNewFile}
            >
              <NoteAddOutlined sx={{ fontSize: 16 }} />
            </button>
            <button
              type="button"
              className="vsExplorer__iconBtn"
              aria-label="New Folder"
              title="New Folder… (not implemented)"
            >
              <CreateNewFolderOutlined sx={{ fontSize: 16 }} />
            </button>
            <button
              type="button"
              className="vsExplorer__iconBtn"
              aria-label="Refresh Explorer"
              title="Refresh Explorer"
            >
              <RefreshOutlined sx={{ fontSize: 16 }} />
            </button>
            <button
              type="button"
              className="vsExplorer__iconBtn"
              aria-label="Collapse Folders in Explorer"
              title="Collapse Folders in Explorer"
              onClick={() => {
                setProjectsOpen(false)
                setDraftsOpen(false)
              }}
            >
              <UnfoldLessOutlined sx={{ fontSize: 16 }} />
            </button>
          </div>
        </div>

        {portfolioOpen && (
          <div className="vsExplorer__tree">
            {ROOT_FILES.map((f) => fileRow(f))}

            <Link
              to="/achievment"
              className={`vsExplorer__row vsExplorer__folder${isOnProjects ? ' is-active' : ''}`}
              style={{ paddingLeft: 8 }}
            >
              <span
                className="vsExplorer__folderCaret"
                role="button"
                tabIndex={-1}
                onClick={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  setProjectsOpen((o) => !o)
                }}
              >
                <Caret open={projectsOpen} />
              </span>
              <FolderIcon open={projectsOpen} />
              <span className="vsExplorer__name">projects</span>
            </Link>

            {projectsOpen &&
              PROJECT_FILES.map((p) => (
                <Link
                  key={p.name}
                  to="/achievment"
                  className="vsExplorer__row vsExplorer__file"
                  style={{ paddingLeft: 36 }}
                >
                  <FileIconFor name={p.name} />
                  <span className="vsExplorer__name">{p.name}</span>
                </Link>
              ))}

            {showDraftsFolder && (
              <>
                <button
                  type="button"
                  className="vsExplorer__row vsExplorer__folder"
                  style={{ paddingLeft: 8 }}
                  onClick={() => setDraftsOpen((o) => !o)}
                >
                  <span className="vsExplorer__folderCaret">
                    <Caret open={draftsOpen} />
                  </span>
                  <FolderIcon open={draftsOpen} />
                  <span className="vsExplorer__name">drafts</span>
                </button>

                {draftsOpen && (
                  <>
                    {newFileMode && (
                      <div
                        className="vsExplorer__row vsExplorer__newFileRow"
                        style={{ paddingLeft: 36 }}
                      >
                        <FileIconFor name={newFileName || 'untitled.txt'} />
                        <input
                          ref={newFileInputRef}
                          type="text"
                          value={newFileName}
                          onChange={(e) => setNewFileName(e.target.value)}
                          onKeyDown={onNewFileKey}
                          onBlur={commitNewFile}
                          placeholder="filename.txt"
                          spellCheck="false"
                          autoComplete="off"
                          className="vsExplorer__newFileInput"
                        />
                      </div>
                    )}
                    {userFiles.map((f) => {
                      const to = `/file/${encodeURIComponent(f.name)}`
                      const active = decodeURIComponent(pathname) === decodeURIComponent(to)
                      return (
                        <Link
                          key={f.id}
                          to={to}
                          className={`vsExplorer__row vsExplorer__file${active ? ' is-active' : ''}`}
                          style={{ paddingLeft: 36 }}
                        >
                          <FileIconFor name={f.name} />
                          <span className="vsExplorer__name">{f.name}</span>
                        </Link>
                      )
                    })}
                  </>
                )}
              </>
            )}

            {TAIL_FILES.map((f) => fileRow(f))}
          </div>
        )}
      </div>
    </aside>
  )
}

export default Explorer
