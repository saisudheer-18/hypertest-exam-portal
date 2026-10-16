import { useEffect, useState } from 'react'
import Header from '../header/Header.jsx'
import './Homepage.css'

const keywords = ['assessments', 'exams', 'quizzes']

function HeroSection({ onRouteClick }) {
  const [keywordIndex, setKeywordIndex] = useState(0)

  useEffect(() => {
    const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)')
    let interval

    function syncMotionPreference() {
      window.clearInterval(interval)
      if (motionPreference.matches) return

      interval = window.setInterval(() => {
        setKeywordIndex((current) => (current + 1) % keywords.length)
      }, 3000)
    }

    syncMotionPreference()
    motionPreference.addEventListener('change', syncMotionPreference)
    return () => {
      window.clearInterval(interval)
      motionPreference.removeEventListener('change', syncMotionPreference)
    }
  }, [])

  return (
    <section className="home-hero" aria-labelledby="home-hero-title">
      <div className="home-hero-inner">
        <div className="home-hero-copy">
          <h1 id="home-hero-title">
            Turn your{' '}
            <span
              className="home-hero-keyword"
              aria-live="off"
              key={keywords[keywordIndex]}
            >
              {keywords[keywordIndex]}
            </span>{' '}
            <br className="home-hero-keyword-break" />
            into success stories
          </h1>
          <p className="home-hero-description">
            Create, deliver, and evaluate assessments with HyperTest Inc. —
            your platform for online exams, coding challenges, skill
            assessments, and performance insights.
          </p>
          <a
            className="home-hero-cta"
            href="/signup"
            onClick={onRouteClick}
          >
            Sign up - it&apos;s free
            <span aria-hidden="true">→</span>
          </a>
        </div>

        <div className="home-hero-showcase">
          <img
            className="home-dashboard-image"
            src="/assets/images/HyperTest%20Student%20Dashboard%20Overview.png"
            alt="HyperTest student dashboard showing assessments, coding challenges, and performance insights"
            width="1680"
            height="936"
            fetchPriority="high"
          />
        </div>
      </div>
    </section>
  )
}

function AccessCodeBanner({ onRouteClick }) {
  const [accessCode, setAccessCode] = useState('')
  const [message, setMessage] = useState('')
  const [hasError, setHasError] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()

    if (!accessCode.trim()) {
      setHasError(true)
      setMessage('Enter your access code to continue.')
      return
    }

    setHasError(false)
    setMessage(
      'Test access is not configured yet. No test has been started. Visit the login page for sign-in options.',
    )
  }

  return (
    <section className="home-access" aria-labelledby="home-access-title">
      <div className="home-access-inner">
        <div className="home-access-copy">
          <h2 id="home-access-title">Here to take a test?</h2>
          <p>No registration required. Enter your access code and start.</p>
          <p className="home-access-login">
            Already have an account?{' '}
            <a href="/login" onClick={onRouteClick}>
              Log in
            </a>
          </p>
        </div>

        <form className="home-access-form" onSubmit={handleSubmit} noValidate>
          <label className="home-access-label visually-hidden" htmlFor="home-access-code">
            Access code
          </label>
          <input
            id="home-access-code"
            name="accessCode"
            type="text"
            autoComplete="off"
            placeholder="Enter the access code"
            value={accessCode}
            aria-invalid={hasError}
            aria-describedby={message ? 'home-access-message' : undefined}
            onChange={(event) => {
              setAccessCode(event.target.value)
              setMessage('')
              setHasError(false)
            }}
          />
          <button type="submit">Start your test</button>
          {message && (
            <p
              className={`home-access-message${hasError ? ' is-error' : ''}`}
              id="home-access-message"
              role={hasError ? 'alert' : 'status'}
            >
              {message}
            </p>
          )}
        </form>
      </div>
    </section>
  )
}

function Homepage({ onRouteClick }) {
  return (
    <div className="home-shell">
      <Header onRouteClick={onRouteClick} />
      <main className="home-main">
        <HeroSection onRouteClick={onRouteClick} />
        <AccessCodeBanner onRouteClick={onRouteClick} />
      </main>
    </div>
  )
}

export default Homepage
