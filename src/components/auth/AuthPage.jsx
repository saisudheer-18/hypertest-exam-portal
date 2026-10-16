import { useEffect, useState } from 'react'
import {
  AuthButton,
  AuthDivider,
  AuthInput,
  SocialAuthButtons,
} from './AuthComponents.jsx'
import AuthHeader from './AuthHeader.jsx'
import './Auth.css'

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function AuthPage({ mode, onRouteClick }) {
  const isSignUp = mode === 'signup'
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [acceptedTerms, setAcceptedTerms] = useState(false)
  const [errors, setErrors] = useState({})
  const [formMessage, setFormMessage] = useState('')

  useEffect(() => {
    const description = document.querySelector('meta[name="description"]')
    const keywords = document.querySelector('meta[name="keywords"]')
    const previousTitle = document.title
    const previousDescription = description?.content
    const previousKeywords = keywords?.content

    document.title = `${isSignUp ? 'Sign up' : 'Login'} | HyperTest Inc.`
    if (description) {
      description.content = isSignUp
        ? 'Create your HyperTest Inc. account and test beyond limits.'
        : 'Log in to your HyperTest Inc. account and test beyond limits.'
    }
    if (keywords) {
      keywords.content = isSignUp
        ? 'HyperTest Inc. sign up, software testing, test automation, quality assurance, QA testing'
        : 'HyperTest Inc. login, software testing, test automation, quality assurance, QA testing'
    }

    return () => {
      document.title = previousTitle
      if (description && previousDescription !== undefined) {
        description.content = previousDescription
      }
      if (keywords && previousKeywords !== undefined) {
        keywords.content = previousKeywords
      }
    }
  }, [isSignUp])

  function handleSubmit(event) {
    event.preventDefault()
    const nextErrors = {}

    if (!email.trim()) {
      nextErrors.email = 'Enter your email address.'
    } else if (!emailPattern.test(email.trim())) {
      nextErrors.email = 'Enter a valid email address.'
    }

    if (!password) {
      nextErrors.password = 'Enter your password.'
    } else if (isSignUp && password.length < 8) {
      nextErrors.password = 'Use at least 8 characters.'
    }

    if (isSignUp && !confirmPassword) {
      nextErrors.confirmPassword = 'Confirm your password.'
    } else if (isSignUp && password !== confirmPassword) {
      nextErrors.confirmPassword = 'Passwords do not match.'
    }

    if (isSignUp && !acceptedTerms) {
      nextErrors.terms = 'Accept the Terms & Conditions and Privacy Policy to continue.'
    }

    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) {
      setFormMessage('')
      return
    }

    setFormMessage(
      'Authentication is not configured. Your details have not been submitted.',
    )
  }

  function handleEmailChange(event) {
    setEmail(event.target.value)
    setErrors((current) => ({ ...current, email: undefined }))
    setFormMessage('')
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value)
    setErrors((current) => ({
      ...current,
      password: undefined,
      confirmPassword: undefined,
    }))
    setFormMessage('')
  }

  function handleConfirmPasswordChange(event) {
    setConfirmPassword(event.target.value)
    setErrors((current) => ({ ...current, confirmPassword: undefined }))
    setFormMessage('')
  }

  return (
    <div className="auth-layout">
      <AuthHeader onRouteClick={onRouteClick} />

      <main className="auth-page">
        <section className="auth-card" aria-labelledby="auth-title">
          <div className="auth-heading">
            <h1 id="auth-title">{isSignUp ? 'Sign up' : 'Login'}</h1>
            {isSignUp && (
              <p>Create your HyperTest account to get started.</p>
            )}
          </div>

          <form className="auth-form" onSubmit={handleSubmit} noValidate>
            <AuthInput
              label="Email"
              name="email"
              type="email"
              value={email}
              onChange={handleEmailChange}
              autoComplete="email"
              placeholder="you@example.com"
              error={errors.email}
            />
            <AuthInput
              label="Password"
              name="password"
              type="password"
              value={password}
              onChange={handlePasswordChange}
              autoComplete={isSignUp ? 'new-password' : 'current-password'}
              placeholder={isSignUp ? 'At least 8 characters' : 'Enter your password'}
              minLength={isSignUp ? 8 : undefined}
              error={errors.password}
            />

            {isSignUp && (
              <>
                <AuthInput
                  label="Confirm password"
                  name="confirmPassword"
                  type="password"
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                  autoComplete="new-password"
                  placeholder="Re-enter your password"
                  minLength={8}
                  error={errors.confirmPassword}
                />

                <div className="auth-terms">
                  <label className="auth-checkbox-label">
                    <input
                      type="checkbox"
                      checked={acceptedTerms}
                      onChange={(event) => {
                        setAcceptedTerms(event.target.checked)
                        setErrors((current) => ({ ...current, terms: undefined }))
                      }}
                      aria-invalid={Boolean(errors.terms)}
                      aria-describedby={errors.terms ? 'auth-terms-error' : undefined}
                    />
                    <span>
                      I agree to the Terms &amp; Conditions and Privacy Policy.
                    </span>
                  </label>
                  <p className="auth-legal-note">
                    Legal policy links need to be configured before launch.
                  </p>
                  {errors.terms && (
                    <p className="auth-field-error" id="auth-terms-error">
                      {errors.terms}
                    </p>
                  )}
                </div>
              </>
            )}

            {formMessage && (
              <p className="auth-form-message" role="alert">
                {formMessage}
              </p>
            )}

            <AuthButton>{isSignUp ? 'Sign up' : 'Login'}</AuthButton>
          </form>

          <AuthDivider />
          <SocialAuthButtons />

          <p className="auth-switch">
            {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
            <a
              href={isSignUp ? '/login' : '/signup'}
              onClick={onRouteClick}
            >
              {isSignUp ? 'Login' : 'Sign up'}
            </a>
          </p>
        </section>
      </main>
    </div>
  )
}

export default AuthPage
