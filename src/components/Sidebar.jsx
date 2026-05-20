import React, { useState } from 'react'
import {
  DescriptionOutlined,
  Search,
  AccountTree,
  PlayArrowOutlined,
  ExtensionOutlined,
  PersonOutline,
  Settings,
} from '@mui/icons-material'

const topItems = [
  { id: 'explorer', label: 'Explorer', Icon: DescriptionOutlined, badge: null },
  { id: 'search', label: 'Search', Icon: Search, badge: null },
  { id: 'git', label: 'Source Control', Icon: AccountTree, badge: 3 },
  { id: 'run', label: 'Run and Debug', Icon: PlayArrowOutlined, badge: null },
  { id: 'ext', label: 'Extensions', Icon: ExtensionOutlined, badge: null },
]

const bottomItems = [
  { id: 'account', label: 'Accounts', Icon: PersonOutline, badge: 1 },
  { id: 'settings', label: 'Manage', Icon: Settings, badge: null },
]

export const Sidebar = ({ onExplorerClick }) => {
  const [active, setActive] = useState('explorer')

  const handleClick = (id) => {
    setActive(id)
    if (id === 'explorer' && onExplorerClick) {
      onExplorerClick()
    }
  }

  const renderItem = ({ id, label, Icon, badge }) => {
    const isActive = active === id
    return (
      <button
        key={id}
        type="button"
        className={`vsActivityBar__item${isActive ? ' is-active' : ''}`}
        aria-label={label}
        title={label}
        onClick={() => handleClick(id)}
      >
        <Icon sx={{ fontSize: 24 }} />
        {badge != null && <span className="vsActivityBar__badge">{badge}</span>}
      </button>
    )
  }

  return (
    <aside className="vsActivityBar" aria-label="Activity Bar">
      <div className="vsActivityBar__group">{topItems.map(renderItem)}</div>
      <div className="vsActivityBar__group">{bottomItems.map(renderItem)}</div>
    </aside>
  )
}

export default Sidebar
