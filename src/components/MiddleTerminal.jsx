import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useFiles } from '../context/FilesContext'

const PROMPT = 'PS D:\\main\\portfolio\\vite-project>'

const PROJECTS = {
  shayraana: {
    url: 'https://github.com/harshit91796/shayrana_SocialMedia_app',
    desc: 'MERN social media app',
  },
  transcript: {
    url: 'https://github.com/harshit91796/Video_to_transcripy',
    desc: 'YouTube video → transcript converter',
  },
  vaccine: {
    url: 'https://github.com/harshit91796/vaccine_slot_booking',
    desc: 'Vaccine slot booking backend',
  },
  tuffy: {
    url: 'https://harshit91796.github.io/tuffy-game/',
    desc: 'Canvas game — Tuffy the courageous dog',
  },
  shoppingapp: {
    url: 'https://github.com/harshit91796/shoping_app',
    desc: 'Product management backend',
  },
  bookish: {
    url: 'https://github.com/harshit91796/Book_Management',
    desc: 'Books management REST API',
  },
}

const LINKS = {
  github: 'https://github.com/harshit91796',
  linkedin: 'https://www.linkedin.com/in/harshit-rajput-b03a0b265/',
  instagram: 'https://www.instagram.com/harshitrajput917/',
  resume: '/Harshit_final_Resume2_compressed.pdf',
}

const SYSTEM_FILES = {
  'aboutme.txt':
    "Harshit Rajput — Full-Stack Developer based in Bhopal, MP.\n" +
    "Graduated 2020. Started in entrepreneurship, pivoted to web dev via graphic design.\n" +
    "Trained on MERN, MySQL, Git, Docker, React, Next.js and Material-UI at FunctionUp (2023).",
  'skills.ts':
    "MERN · MongoDB · Express.js · React · Node.js · Next.js · MySQL · Git · Docker · AWS · Material-UI",
  'experience.ts':
    "FunctionUp — Trainee (Mar 2023 – Nov 2023)\n" +
    "Built RESTful APIs in MERN. Worked on DB scaling, performance and team delivery.",
}

const GIT_LOG = [
  { hash: 'f4e2a91', date: '2023-11', msg: 'feat: completed MERN training at FunctionUp' },
  { hash: 'c1b8d04', date: '2023-08', msg: 'ship: shayraana social media app' },
  { hash: '9a73fe2', date: '2023-06', msg: 'ship: vaccine slot booking backend' },
  { hash: '7d2c8b1', date: '2023-03', msg: 'feat: joined FunctionUp as backend trainee' },
  { hash: '3b91a0e', date: '2023-01', msg: 'ship: tuffy — canvas game' },
  { hash: '1f0e8c4', date: '2020-08', msg: 'init: graduated, founded school venture' },
]

const openTarget = (target) => {
  if (!target) return { error: 'open: missing argument. Try "open github" or "open shayraana".' }
  const key = target.toLowerCase()
  if (LINKS[key]) {
    window.open(LINKS[key], '_blank', 'noopener,noreferrer')
    return `Opening ${key}…`
  }
  if (PROJECTS[key]) {
    window.open(PROJECTS[key].url, '_blank', 'noopener,noreferrer')
    return `Opening project: ${key} — ${PROJECTS[key].desc}`
  }
  return { error: `open: unknown target "${target}". Try "ls" to see what's available.` }
}

const catFile = (name, userFiles) => {
  if (!name) return { error: 'cat: missing file. Try "cat aboutMe.txt".' }
  const user = userFiles.find((f) => f.name.toLowerCase() === name.toLowerCase())
  if (user) return user.content || '(file is empty)'
  const body = SYSTEM_FILES[name.toLowerCase()]
  if (!body) return { error: `cat: ${name}: No such file. Try "ls".` }
  return body
}

const lsOutput = (userFiles) => (
  <div>
    <div style={{ color: '#569cd6' }}>files/</div>
    <div>  aboutMe.txt  skills.ts  experience.ts</div>
    {userFiles.length > 0 && (
      <>
        <div style={{ color: '#569cd6', marginTop: 4 }}>drafts/</div>
        {userFiles.map((f) => (
          <div key={f.id}>
            {'  '}
            <span style={{ color: '#dcdcaa' }}>{f.name.padEnd(20)}</span>
            <span style={{ color: '#858585' }}>
              {f.content ? `${f.content.length} chars` : 'empty'}
            </span>
          </div>
        ))}
      </>
    )}
    <div style={{ color: '#569cd6', marginTop: 4 }}>projects/</div>
    {Object.entries(PROJECTS).map(([k, v]) => (
      <div key={k}>
        {'  '}
        <span style={{ color: '#dcdcaa' }}>{k.padEnd(14)}</span>
        <span style={{ color: '#858585' }}>{v.desc}</span>
      </div>
    ))}
    <div style={{ color: '#569cd6', marginTop: 4 }}>links/</div>
    <div>  github  linkedin  instagram  resume</div>
  </div>
)

const gitLogOutput = () => (
  <div>
    {GIT_LOG.map((c) => (
      <div key={c.hash} style={{ marginBottom: 2 }}>
        <span style={{ color: '#dcdcaa' }}>commit {c.hash}</span>{' '}
        <span style={{ color: '#4ec9b0' }}>({c.date})</span>
        <div style={{ paddingLeft: 16 }}>{c.msg}</div>
      </div>
    ))}
  </div>
)

const helpOutput = (commands) => (
  <div>
    <div style={{ color: '#858585', marginBottom: 4 }}>Available commands:</div>
    {Object.entries(commands).map(([name, c]) => (
      <div key={name}>
        <span style={{ color: '#dcdcaa', display: 'inline-block', minWidth: 100 }}>{name}</span>
        <span style={{ color: '#cccccc' }}>{c.desc}</span>
      </div>
    ))}
    <div style={{ color: '#858585', marginTop: 6 }}>
      Try also <span style={{ color: '#dcdcaa' }}>↑/↓</span> for history,{' '}
      <span style={{ color: '#dcdcaa' }}>Tab</span> to complete.
    </div>
  </div>
)

const downloadResume = () => {
  const link = document.createElement('a')
  link.href = LINKS.resume
  link.download = 'Harshit_Rajput_Resume.pdf'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

const COMMANDS = {
  help: { desc: 'Show this message', run: () => helpOutput(COMMANDS) },
  ls: { desc: 'List files, drafts, projects and links', run: ({ ctx }) => lsOutput(ctx.files.files) },
  cat: {
    desc: 'cat <file> — print a file or draft',
    run: ({ args, ctx }) => catFile(args.join(' '), ctx.files.files),
  },
  open: {
    desc: 'open <target> — github | linkedin | resume | <project>',
    run: ({ args }) => openTarget(args[0]),
  },
  touch: {
    desc: 'touch <filename> — create a new draft and open it',
    run: ({ args, ctx }) => {
      const raw = args.join(' ').trim() || 'feedback.txt'
      const finalName = /\.[a-z0-9]+$/i.test(raw) ? raw : `${raw}.txt`
      const created = ctx.files.createFile(finalName)
      ctx.navigate(`/file/${encodeURIComponent(created)}`)
      return (
        <span>
          Created <span style={{ color: '#dcdcaa' }}>{created}</span>. Write something, then run{' '}
          <span style={{ color: '#dcdcaa' }}>send {created}</span>.
        </span>
      )
    },
  },
  send: {
    desc: 'send <filename> — submit a draft to me',
    async: true,
    run: async ({ args, ctx }) => {
      const name = args.join(' ').trim()
      if (!name) return { error: 'send: missing filename. Try "ls" to see drafts.' }
      const file = ctx.files.getFileByName(name)
      if (!file) return { error: `send: ${name}: No such file.` }
      const result = await ctx.files.sendFile(file.id)
      if (result.ok) {
        return (
          <span>
            <span style={{ color: '#4ade80' }}>✓</span> Sent. Thank you for the note.
          </span>
        )
      }
      return { error: `send: ${result.error}` }
    },
  },
  rm: {
    desc: 'rm <filename> — delete a draft',
    run: ({ args, ctx }) => {
      const name = args.join(' ').trim()
      if (!name) return { error: 'rm: missing filename.' }
      const file = ctx.files.getFileByName(name)
      if (!file) return { error: `rm: ${name}: No such file.` }
      ctx.files.deleteFile(file.id)
      return `Removed ${name}.`
    },
  },
  git: {
    desc: 'git log — show career commit log',
    run: ({ args }) =>
      args[0] === 'log'
        ? gitLogOutput()
        : { error: `git: '${args.join(' ')}' is not a git command. Try 'git log'.` },
  },
  whoami: { desc: 'Print user identity', run: () => 'harshit\nFull-Stack Web Developer · Bhopal, India' },
  pwd: { desc: 'Print working directory', run: () => 'D:\\main\\portfolio\\vite-project' },
  echo: { desc: 'echo <text>', run: ({ args }) => args.join(' ') },
  resume: {
    desc: 'Download my resume',
    run: () => {
      downloadResume()
      return 'Downloading resume…'
    },
  },
  npm: {
    desc: 'npm go to <project> (legacy)',
    run: ({ args }) =>
      args[0] === 'go' && args[1] === 'to' && args[2]
        ? openTarget(args[2])
        : { error: "npm: did you mean 'npm go to <project>'?" },
  },
  clear: {
    desc: 'Clear the terminal',
    run: ({ ctx }) => {
      ctx.setEntries([])
      return null
    },
  },
}

const MiddleTerminal = () => {
  const filesCtx = useFiles()
  const navigate = useNavigate()

  const [entries, setEntries] = useState([
    {
      command: '',
      output: (
        <div>
          <div>
            Welcome to <span style={{ color: '#dcdcaa' }}>portfolio</span>. Type{' '}
            <span style={{ color: '#dcdcaa' }}>help</span> for commands.
          </div>
          <div style={{ marginTop: 4, color: '#9cdcfe' }}>
            Tip: run <span style={{ color: '#dcdcaa' }}>touch feedback.txt</span> to leave me a
            note, then <span style={{ color: '#dcdcaa' }}>send feedback.txt</span> to email it.
          </div>
        </div>
      ),
    },
  ])
  const [input, setInput] = useState('')
  const inputRef = useRef(null)
  const scrollRef = useRef(null)
  const historyRef = useRef([])
  const historyIdxRef = useRef(0)

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [entries])

  const append = (command, output) => {
    setEntries((prev) => [...prev, { command, output }])
  }

  const updateLast = (output) => {
    setEntries((prev) => {
      if (prev.length === 0) return prev
      const next = [...prev]
      next[next.length - 1] = { ...next[next.length - 1], output }
      return next
    })
  }

  const runCommand = async (raw) => {
    const trimmed = raw.trim()
    if (!trimmed) {
      append('', '')
      return
    }
    historyRef.current.push(trimmed)
    historyIdxRef.current = historyRef.current.length

    const [base, ...args] = trimmed.split(/\s+/)
    const handler = COMMANDS[base.toLowerCase()]
    if (!handler) {
      append(trimmed, { error: `${base}: command not found. Type "help".` })
      return
    }

    const ctx = { setEntries, append, updateLast, files: filesCtx, navigate }

    if (handler.async) {
      append(trimmed, <span style={{ color: '#858585' }}>working…</span>)
      const result = await handler.run({ args, ctx })
      updateLast(result ?? '')
      return
    }

    const result = handler.run({ args, ctx })
    if (result == null) return
    append(trimmed, result)
  }

  const onKeyDown = (e) => {
    if (e.key === 'Enter') {
      runCommand(input)
      setInput('')
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      if (historyRef.current.length === 0) return
      historyIdxRef.current = Math.max(0, historyIdxRef.current - 1)
      setInput(historyRef.current[historyIdxRef.current] || '')
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      const next = Math.min(historyRef.current.length, historyIdxRef.current + 1)
      historyIdxRef.current = next
      setInput(historyRef.current[next] || '')
    } else if (e.key === 'Tab') {
      e.preventDefault()
      const tokens = input.split(/\s+/)
      if (tokens.length === 1) {
        const matches = Object.keys(COMMANDS).filter((c) =>
          c.startsWith(tokens[0].toLowerCase())
        )
        if (matches.length === 1) setInput(matches[0] + ' ')
      } else if (tokens[0] === 'cat' || tokens[0] === 'send' || tokens[0] === 'rm') {
        const partial = (tokens[1] || '').toLowerCase()
        const pool = [
          ...Object.keys(SYSTEM_FILES),
          ...filesCtx.files.map((f) => f.name),
        ]
        const matches = pool.filter((f) => f.toLowerCase().startsWith(partial))
        if (matches.length === 1) setInput(`${tokens[0]} ${matches[0]}`)
      } else if (
        tokens[0] === 'open' ||
        (tokens[0] === 'npm' && tokens[1] === 'go' && tokens[2] === 'to')
      ) {
        const partial = (tokens[0] === 'open' ? tokens[1] : tokens[3]) || ''
        const pool = [...Object.keys(PROJECTS), ...Object.keys(LINKS)]
        const matches = pool.filter((p) => p.startsWith(partial.toLowerCase()))
        if (matches.length === 1) {
          setInput(tokens[0] === 'open' ? `open ${matches[0]}` : `npm go to ${matches[0]}`)
        }
      }
    } else if (e.key === 'l' && e.ctrlKey) {
      e.preventDefault()
      setEntries([])
    }
  }

  return (
    <div className="vsTerminal">
      <div className="vsTerminal__tabs" role="tablist">
        {['PROBLEMS', 'OUTPUT', 'DEBUG CONSOLE', 'TERMINAL', 'PORTS'].map((tab) => (
          <button
            key={tab}
            type="button"
            role="tab"
            className={`vsTerminal__tab${tab === 'TERMINAL' ? ' is-active' : ''}`}
            aria-selected={tab === 'TERMINAL'}
          >
            {tab}
          </button>
        ))}
      </div>

      <div
        className="vsTerminal__body"
        ref={scrollRef}
        onClick={() => inputRef.current?.focus()}
      >
        {entries.map((entry, i) => (
          <div key={i} className="vsTerminal__entry">
            {entry.command !== '' && (
              <div className="vsTerminal__line">
                <span className="vsTerminal__prompt">{PROMPT}</span>
                <span className="vsTerminal__cmd">{entry.command}</span>
              </div>
            )}
            {entry.output != null && entry.output !== '' && (
              <div
                className={`vsTerminal__output${
                  entry.output && entry.output.error ? ' vsTerminal__output--error' : ''
                }`}
              >
                {entry.output && entry.output.error ? entry.output.error : entry.output}
              </div>
            )}
          </div>
        ))}

        <div className="vsTerminal__line vsTerminal__inputLine">
          <span className="vsTerminal__prompt">{PROMPT}</span>
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={onKeyDown}
            spellCheck="false"
            autoComplete="off"
            autoCapitalize="off"
            className="vsTerminal__input"
            aria-label="Terminal input"
          />
        </div>
      </div>
    </div>
  )
}

export default MiddleTerminal
