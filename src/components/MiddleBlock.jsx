import React, { useEffect, useState } from 'react'
import { Sidebar } from './Sidebar'
import Explorer from './Explorer'
import MiddleNav from './MiddleNav'
import MiddleTerminal from './MiddleTerminal'
import MiddleBox from './MiddleBox'

function MiddleBlock({ field }) {
  const [terminalOpen, setTerminalOpen] = useState(false)
  const [explorerOpen, setExplorerOpen] = useState(false)
  const isHome = field?.type?.name === 'Home' || field?.type?.displayName === 'Home'

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.ctrlKey && (event.key === 'j' || event.key === 'J')) {
        event.preventDefault()
        setTerminalOpen((open) => !open)
      } else if (event.key === 'Escape') {
        if (terminalOpen) setTerminalOpen(false)
        if (explorerOpen) setExplorerOpen(false)
      }
    }
    document.addEventListener('keydown', handleKeyPress)
    return () => document.removeEventListener('keydown', handleKeyPress)
  }, [terminalOpen, explorerOpen])

  return (
    <div className="middleBlock">
      <Sidebar onExplorerClick={() => setExplorerOpen((o) => !o)} />
      {!isHome && (
        <>
          <Explorer
            isOpen={explorerOpen}
            onClose={() => setExplorerOpen(false)}
          />
          {explorerOpen && (
            <div
              className="vsExplorer__backdrop is-shown"
              onClick={() => setExplorerOpen(false)}
              aria-hidden="true"
            />
          )}
        </>
      )}
      <div className="middleContainer">
        <MiddleNav />
        <MiddleBox sectionField={field} />
        {terminalOpen && <MiddleTerminal />}
      </div>
    </div>
  )
}

export default MiddleBlock
