import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import {
  DeleteOutline,
  SendOutlined,
  CheckCircleOutline,
  ErrorOutline,
  Close as CloseIcon,
  NoteAddOutlined,
  AddOutlined,
  ArrowBack,
} from '@mui/icons-material'
import { FileIconFor } from '../fileIcons'
import { useFiles } from '../../context/FilesContext'

const Toast = ({ toast, onDismiss }) => {
  if (!toast) return null
  return (
    <div
      className={`fileEditor__toast fileEditor__toast--${toast.kind}`}
      role={toast.kind === 'error' ? 'alert' : 'status'}
    >
      <span className="fileEditor__toastIcon">
        {toast.kind === 'success' && <CheckCircleOutline sx={{ fontSize: 18 }} />}
        {toast.kind === 'error' && <ErrorOutline sx={{ fontSize: 18 }} />}
        {toast.kind === 'loading' && <span className="fileEditor__spinner" aria-hidden="true" />}
      </span>
      <span className="fileEditor__toastMsg">{toast.message}</span>
      {toast.kind !== 'loading' && (
        <button
          type="button"
          className="fileEditor__toastDismiss"
          onClick={onDismiss}
          aria-label="Dismiss"
        >
          <CloseIcon sx={{ fontSize: 14 }} />
        </button>
      )}
    </div>
  )
}

const EmptyState = ({ requestedName, files, createFile, navigate }) => {
  const wantedName = requestedName.trim()
  const resolvedName = wantedName
    ? (/\.[a-z0-9]+$/i.test(wantedName) ? wantedName : `${wantedName}.txt`)
    : null

  const handleCreate = () => {
    const created = createFile(resolvedName || 'feedback.txt')
    navigate(`/file/${encodeURIComponent(created)}`, { replace: true })
  }

  return (
    <div className="fileEditor fileEditor--empty">
      <div className="fileEditor__emptyCard">
        <div className="fileEditor__emptyIcon" aria-hidden="true">
          <NoteAddOutlined sx={{ fontSize: 48 }} />
        </div>

        {wantedName ? (
          <>
            <h2 className="fileEditor__emptyTitle">
              <code>{wantedName}</code> doesn't exist yet
            </h2>
            <p className="fileEditor__emptyDesc">
              Want to create it? Leave a note, a job lead, or just a hello — I'll get
              an email when you hit send.
            </p>
          </>
        ) : (
          <>
            <h2 className="fileEditor__emptyTitle">Start a new note</h2>
            <p className="fileEditor__emptyDesc">
              Create a file, type whatever you want, and send it straight to my inbox.
            </p>
          </>
        )}

        <button
          type="button"
          className="fileEditor__emptyCreateBtn"
          onClick={handleCreate}
          autoFocus
        >
          <AddOutlined sx={{ fontSize: 18 }} />
          Create {resolvedName || 'feedback.txt'}
        </button>

        {files.length > 0 && (
          <div className="fileEditor__emptyDrafts">
            <h3>Or open an existing draft</h3>
            <ul>
              {files.map((f) => (
                <li key={f.id}>
                  <Link to={`/file/${encodeURIComponent(f.name)}`}>
                    <FileIconFor name={f.name} />
                    <span>{f.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}

        <Link to="/aboutMe" className="fileEditor__emptyBack">
          <ArrowBack sx={{ fontSize: 14 }} />
          Back to aboutMe.txt
        </Link>
      </div>
    </div>
  )
}

export default function FileEditor() {
  const params = useParams()
  const requestedName = decodeURIComponent(params.name || '')
  const navigate = useNavigate()
  const {
    files,
    getFileByName,
    createFile,
    updateContent,
    updateMeta,
    deleteFile,
    sendFile,
  } = useFiles()
  const file = getFileByName(requestedName)

  const textareaRef = useRef(null)
  const toastTimerRef = useRef(null)
  const [toast, setToast] = useState(null)
  const [sending, setSending] = useState(false)

  useEffect(() => {
    textareaRef.current?.focus()
  }, [file?.id])

  useEffect(() => {
    return () => {
      if (toastTimerRef.current) clearTimeout(toastTimerRef.current)
    }
  }, [])

  const showToast = (next, { autoHide = true, ms = 4000 } = {}) => {
    if (toastTimerRef.current) clearTimeout(toastTimerRef.current)
    setToast(next)
    if (autoHide && next && next.kind !== 'loading') {
      toastTimerRef.current = setTimeout(() => setToast(null), ms)
    }
  }

  if (!file) {
    return (
      <EmptyState
        requestedName={requestedName}
        files={files}
        createFile={createFile}
        navigate={navigate}
      />
    )
  }

  const onDelete = () => {
    const ok = window.confirm(`Delete "${file.name}"? This cannot be undone.`)
    if (!ok) return
    deleteFile(file.id)
    navigate('/aboutMe')
  }

  const onSendClick = async () => {
    if (sending) return
    setSending(true)
    showToast({ kind: 'loading', message: 'Sending…' }, { autoHide: false })
    const result = await sendFile(file.id)
    setSending(false)
    if (result.ok) {
      showToast({ kind: 'success', message: 'Sent. Thank you for the note.' })
    } else {
      showToast({ kind: 'error', message: result.error }, { ms: 6000 })
    }
  }

  const placeholder = `// Write whatever you want — feedback, a hello, a job lead.
//
// Optional: fill in your name and email above so I can reply.
// When you're done, hit Send on the right — or open the terminal
// (Ctrl+J) and run:
//
//     send ${file.name}`

  return (
    <div className="fileEditor">
      <div className="fileEditor__breadcrumb">
        <span>portfolio</span>
        <span className="fileEditor__sep">›</span>
        <span>drafts</span>
        <span className="fileEditor__sep">›</span>
        <span className="fileEditor__crumbFile">
          <FileIconFor name={file.name} />
          <span>{file.name}</span>
        </span>
      </div>

      <div className="fileEditor__meta">
        <label className="fileEditor__field">
          <span className="fileEditor__fieldLabel">Your name</span>
          <input
            type="text"
            value={file.senderName}
            onChange={(e) => updateMeta(file.id, { senderName: e.target.value })}
            placeholder="optional"
            spellCheck="false"
            autoComplete="off"
          />
        </label>
        <label className="fileEditor__field">
          <span className="fileEditor__fieldLabel">Your email</span>
          <input
            type="email"
            value={file.senderEmail}
            onChange={(e) => updateMeta(file.id, { senderEmail: e.target.value })}
            placeholder="optional — so I can reply"
            spellCheck="false"
            autoComplete="off"
          />
        </label>
        <div className="fileEditor__metaActions">
          <button
            type="button"
            className="fileEditor__sendBtn"
            onClick={onSendClick}
            disabled={sending}
            title="Send to Harshit"
          >
            {sending ? (
              <span className="fileEditor__spinner" aria-hidden="true" />
            ) : (
              <SendOutlined sx={{ fontSize: 14 }} />
            )}
            {sending ? 'Sending…' : 'Send'}
          </button>
          <button
            type="button"
            className="fileEditor__deleteBtn"
            onClick={onDelete}
            title="Delete this draft"
            aria-label="Delete draft"
          >
            <DeleteOutline sx={{ fontSize: 16 }} />
          </button>
        </div>
      </div>

      <textarea
        ref={textareaRef}
        className="fileEditor__textarea"
        value={file.content}
        onChange={(e) => updateContent(file.id, e.target.value)}
        placeholder={placeholder}
        spellCheck="true"
      />

      <div className="fileEditor__hint">
        Auto-saved to your browser. Run <code>send {file.name}</code> in the terminal
        (Ctrl+J) or click <strong>Send</strong>.
      </div>

      <Toast toast={toast} onDismiss={() => setToast(null)} />
    </div>
  )
}
