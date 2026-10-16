import { useEffect, useState } from 'react'
import AuthPage from './components/auth/AuthPage.jsx'
import Homepage from './components/home/Homepage.jsx'

function currentPath() {
  return window.location.pathname.replace(/\/+$/, '') || '/'
}

function App() {
  const [path, setPath] = useState(currentPath)

  useEffect(() => {
    function handlePopState() {
      setPath(currentPath())
    }

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  function handleRouteClick(event) {
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return
    }

    const destination = new URL(event.currentTarget.href, window.location.href)
    if (destination.origin !== window.location.origin) return

    event.preventDefault()
    const nextPath = destination.pathname.replace(/\/+$/, '') || '/'
    if (nextPath === path) return

    window.history.pushState({}, '', destination.pathname)
    setPath(nextPath)
  }

  if (path === '/login') {
    return <AuthPage key={path} mode="login" onRouteClick={handleRouteClick} />
  }
  if (path === '/signup') {
    return <AuthPage key={path} mode="signup" onRouteClick={handleRouteClick} />
  }

  return <Homepage onRouteClick={handleRouteClick} />
}

export default App
