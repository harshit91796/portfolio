import React, { createContext, useCallback, useContext, useEffect, useState } from 'react'
import { FORMSPREE_URL } from '../config'

const STORAGE_KEY = 'portfolio_user_files_v1'

const FilesContext = createContext(null)

const loadFiles = () => {
  if (typeof window === 'undefined' || !window.localStorage) return []
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

const saveFiles = (files) => {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(files))
  } catch {
    /* localStorage full or disabled — silently skip */
  }
}

const makeId = (name) =>
  `${name.trim().toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${Date.now().toString(36)}`

export const FilesProvider = ({ children }) => {
  const [files, setFiles] = useState(loadFiles)

  useEffect(() => {
    saveFiles(files)
  }, [files])

  const createFile = useCallback(
    (rawName) => {
      const base = (rawName || '').trim() || 'Untitled.txt'
      let name = base
      let suffix = 1
      while (files.some((f) => f.name === name)) {
        const dot = base.lastIndexOf('.')
        if (dot > 0) {
          name = `${base.slice(0, dot)}-${suffix}${base.slice(dot)}`
        } else {
          name = `${base}-${suffix}`
        }
        suffix += 1
      }
      const newFile = {
        id: makeId(name),
        name,
        content: '',
        senderName: '',
        senderEmail: '',
        createdAt: Date.now(),
        updatedAt: Date.now(),
      }
      setFiles((curr) => [...curr, newFile])
      return name
    },
    [files]
  )

  const updateContent = useCallback((id, content) => {
    setFiles((curr) =>
      curr.map((f) => (f.id === id ? { ...f, content, updatedAt: Date.now() } : f))
    )
  }, [])

  const updateMeta = useCallback((id, patch) => {
    setFiles((curr) =>
      curr.map((f) => (f.id === id ? { ...f, ...patch, updatedAt: Date.now() } : f))
    )
  }, [])

  const deleteFile = useCallback((id) => {
    setFiles((curr) => curr.filter((f) => f.id !== id))
  }, [])

  const getFileByName = useCallback(
    (name) => files.find((f) => f.name.toLowerCase() === (name || '').toLowerCase()) || null,
    [files]
  )

  const sendFile = useCallback(
    async (id) => {
      const file = files.find((f) => f.id === id)
      if (!file) return { ok: false, error: 'File not found.' }
      if (!file.content.trim()) return { ok: false, error: 'File is empty.' }
      if (!FORMSPREE_URL || FORMSPREE_URL.includes('YOUR-FORM-ID')) {
        return { ok: false, error: 'Formspree URL not configured in src/config.js.' }
      }

      try {
        const res = await fetch(FORMSPREE_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            _subject: `Portfolio note: ${file.name} — from ${file.senderName || 'a visitor'}`,
            _replyto: file.senderEmail || '',
            name: file.senderName || 'Anonymous',
            email: file.senderEmail || 'not-provided',
            filename: file.name,
            message: file.content,
            sent_at: new Date().toISOString(),
          }),
        })

        if (res.ok) return { ok: true }

        let detail = `${res.status} ${res.statusText}`
        try {
          const body = await res.json()
          if (body.error) detail = body.error
          else if (Array.isArray(body.errors)) {
            detail = body.errors.map((e) => e.message).join('; ')
          }
        } catch {
          /* ignore parse failure */
        }
        return { ok: false, error: detail }
      } catch (e) {
        return { ok: false, error: e?.message || 'Network error.' }
      }
    },
    [files]
  )

  return (
    <FilesContext.Provider
      value={{
        files,
        createFile,
        updateContent,
        updateMeta,
        deleteFile,
        getFileByName,
        sendFile,
      }}
    >
      {children}
    </FilesContext.Provider>
  )
}

export const useFiles = () => {
  const ctx = useContext(FilesContext)
  if (!ctx) throw new Error('useFiles must be used within FilesProvider')
  return ctx
}
