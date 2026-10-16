import { useEffect, useRef, useState } from 'react'
import MegaMenu from './MegaMenu.jsx'
import MobileNavigation from './MobileNavigation.jsx'
import { navigationMenus } from './megaMenuData.js'
import './Header.css'

function Header({ onRouteClick }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeMenu, setActiveMenu] = useState(null)
  const headerContentRef = useRef(null)
  const navigationRef = useRef(null)
  const menuButtonRef = useRef(null)
  const triggerRefs = useRef({})

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key !== 'Escape' || (!mobileMenuOpen && !activeMenu)) return

      setMobileMenuOpen(false)
      setActiveMenu(null)

      if (mobileMenuOpen) {
        menuButtonRef.current?.focus()
      } else if (activeMenu) {
        triggerRefs.current[activeMenu]?.focus()
      }
    }

    function handlePointerDown(event) {
      const target = event.target
      if (
        headerContentRef.current?.contains(target) &&
        (navigationRef.current?.contains(target) ||
          menuButtonRef.current?.contains(target))
      ) {
        return
      }
      setMobileMenuOpen(false)
      setActiveMenu(null)
    }

    window.addEventListener('keydown', handleKeyDown)
    document.addEventListener('pointerdown', handlePointerDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('pointerdown', handlePointerDown)
    }
  }, [activeMenu, mobileMenuOpen])

  function isDesktop() {
    return window.matchMedia('(min-width: 1200px)').matches
  }

  function handleMenuMouseEnter(menuId) {
    if (isDesktop()) setActiveMenu(menuId)
  }

  function handleMenuMouseLeave(menuId, event) {
    const nextTarget = event.relatedTarget
    if (
      !(nextTarget instanceof Node) ||
      !event.currentTarget.contains(nextTarget)
    ) {
      setActiveMenu((current) => (current === menuId ? null : current))
    }
  }

  function handleMenuBlur(menuId, event) {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setActiveMenu((current) => (current === menuId ? null : current))
    }
  }

  function handleMenuClick(menuId, event) {
    if (isDesktop() || event.detail === 0) {
      setActiveMenu(menuId)
      return
    }

    setActiveMenu((current) => {
      if (current === menuId) return null
      return menuId
    })
  }

  function toggleMobileMenu() {
    setMobileMenuOpen((open) => {
      if (open) setActiveMenu(null)
      return !open
    })
  }

  function closeNavigation() {
    setMobileMenuOpen(false)
    setActiveMenu(null)
  }

  function handleAuthNavigation(event) {
    closeNavigation()
    onRouteClick?.(event)
  }

  return (
    <header className="hypertest-header">
      <div className="header-content" ref={headerContentRef}>
        <a
          className="header-brand"
          href="/"
          aria-label="HyperTest home"
          onClick={onRouteClick}
        >
          <img
            src="/hypertest-website-brand-assets/public/assets/brand/hypertest-symbol-transparent.png"
            width="257"
            height="280"
            alt=""
            loading="eager"
            fetchPriority="high"
          />
          <span className="header-brand-copy">
            <span className="header-brand-name">HyperTest Inc.</span>
            <span className="header-brand-tagline">TEST BEYOND LIMITS</span>
          </span>
        </a>

        <nav
          className={`header-navigation${mobileMenuOpen ? ' is-open' : ''}`}
          id="primary-navigation"
          aria-label="Main navigation"
          ref={navigationRef}
        >
          <ul className="header-navigation-list">
            {navigationMenus.map((menu) => (
              <li
                className={`header-navigation-item${activeMenu === menu.id ? ' is-open' : ''}`}
                key={menu.id}
                onMouseEnter={() => handleMenuMouseEnter(menu.id)}
                onMouseLeave={(event) =>
                  handleMenuMouseLeave(menu.id, event)
                }
                onBlur={(event) => handleMenuBlur(menu.id, event)}
              >
                <button
                  className="header-navigation-link"
                  type="button"
                  aria-expanded={activeMenu === menu.id}
                  aria-controls={`${menu.id}-menu`}
                  onClick={(event) => handleMenuClick(menu.id, event)}
                  onFocus={(event) => {
                    if (event.currentTarget.matches(':focus-visible')) {
                      setActiveMenu(menu.id)
                    }
                  }}
                  onKeyDown={(event) => {
                    if (event.key === 'ArrowDown') {
                      event.preventDefault()
                      setActiveMenu(menu.id)
                    }
                  }}
                  ref={(node) => {
                    triggerRefs.current[menu.id] = node
                  }}
                >
                  {menu.label}
                  <span className="header-navigation-chevron" aria-hidden="true" />
                </button>
                <MegaMenu menu={menu} open={activeMenu === menu.id} />
              </li>
            ))}
          </ul>

          <div className="header-actions">
            <a
              className="header-login"
              href="/login"
              onClick={handleAuthNavigation}
            >
              Login
            </a>
            <a
              className="header-sign-up"
              href="/signup"
              onClick={handleAuthNavigation}
            >
              Sign up
            </a>
          </div>
        </nav>

        <MobileNavigation
          menuOpen={mobileMenuOpen}
          menuButtonRef={menuButtonRef}
          onToggle={toggleMobileMenu}
        />
      </div>
    </header>
  )
}

export default Header
