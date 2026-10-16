import { Menu, X } from 'lucide-react'

function MobileNavigation({ menuOpen, menuButtonRef, onToggle }) {
  return (
    <button
      className="header-menu-toggle"
      type="button"
      aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
      aria-controls="primary-navigation"
      aria-expanded={menuOpen}
      onClick={onToggle}
      ref={menuButtonRef}
    >
      <Menu
        className="header-menu-icon header-menu-icon-open"
        aria-hidden="true"
      />
      <X
        className="header-menu-icon header-menu-icon-close"
        aria-hidden="true"
      />
    </button>
  )
}

export default MobileNavigation
