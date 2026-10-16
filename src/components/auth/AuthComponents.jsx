import { useId, useState } from 'react'
import './Auth.css'

export function AuthInput({
  label,
  name,
  type = 'text',
  value,
  onChange,
  autoComplete,
  placeholder,
  error,
  minLength,
  required = true,
}) {
  const inputId = useId()
  const errorId = `${inputId}-error`
  const [revealed, setRevealed] = useState(false)
  const isPassword = type === 'password'

  return (
    <div className="auth-field">
      <label className="auth-label" htmlFor={inputId}>
        {label}
      </label>
      <div className="auth-input-wrap">
        <input
          className={`auth-input${error ? ' has-error' : ''}`}
          id={inputId}
          name={name}
          type={isPassword && revealed ? 'text' : type}
          value={value}
          onChange={onChange}
          autoComplete={autoComplete}
          placeholder={placeholder}
          minLength={minLength}
          required={required}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : undefined}
        />
        {isPassword && (
          <button
            className="auth-password-toggle"
            type="button"
            aria-label={revealed ? 'Hide password' : 'Show password'}
            aria-pressed={revealed}
            onClick={() => setRevealed((visible) => !visible)}
          >
            {revealed ? 'Hide' : 'Show'}
          </button>
        )}
      </div>
      {error && (
        <p className="auth-field-error" id={errorId}>
          {error}
        </p>
      )}
    </div>
  )
}

export function AuthButton({ children, type = 'submit', ...props }) {
  return (
    <button className="auth-primary-button" type={type} {...props}>
      {children}
    </button>
  )
}

export function AuthDivider() {
  return (
    <div className="auth-divider" role="separator" aria-label="Or">
      <span>OR</span>
    </div>
  )
}

function ProviderIcon({ provider }) {
  if (provider === 'Google') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="#4285F4"
          d="M21.6 12.23c0-.72-.06-1.42-.18-2.1H12v3.98h5.38a4.6 4.6 0 0 1-2 3.02v2.5h3.24c1.9-1.75 2.98-4.33 2.98-7.4Z"
        />
        <path
          fill="#34A853"
          d="M12 22c2.7 0 4.97-.9 6.62-2.42l-3.24-2.5c-.9.6-2.05.96-3.38.96-2.6 0-4.8-1.75-5.59-4.1H3.06v2.58A10 10 0 0 0 12 22Z"
        />
        <path
          fill="#FBBC05"
          d="M6.41 13.94a6.02 6.02 0 0 1 0-3.88V7.48H3.06a10 10 0 0 0 0 9.04l3.35-2.58Z"
        />
        <path
          fill="#EA4335"
          d="M12 5.96c1.47 0 2.79.5 3.83 1.52l2.87-2.87C16.96 2.98 14.7 2 12 2a10 10 0 0 0-8.94 5.48l3.35 2.58C7.2 7.71 9.4 5.96 12 5.96Z"
        />
      </svg>
    )
  }

  if (provider === 'GitHub') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.08c-3.1.68-3.76-1.32-3.76-1.32-.51-1.3-1.24-1.65-1.24-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.72 1.16 1.72 1.16 1 1.71 2.62 1.22 3.26.93.1-.72.39-1.22.71-1.5-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.22 1.16-3-.12-.28-.5-1.42.11-2.96 0 0 .95-.3 3.05 1.15a10.6 10.6 0 0 1 5.55 0c2.1-1.45 3.05-1.15 3.05-1.15.61 1.54.23 2.68.11 2.96.72.78 1.16 1.78 1.16 3 0 4.29-2.62 5.24-5.11 5.51.4.35.76 1.03.76 2.08v3.08c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z"
        />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="#0A66C2"
        d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.65H4.98V9.13h2.95v9.52ZM6.45 7.83a1.71 1.71 0 1 1 0-3.42 1.71 1.71 0 0 1 0 3.42Zm12.2 10.82H15.7V14.02c0-1.1-.02-2.51-1.53-2.51-1.53 0-1.77 1.2-1.77 2.43v4.71H9.45V9.13h2.83v1.3h.04c.39-.74 1.36-1.53 2.8-1.53 3 0 3.55 1.97 3.55 4.53v5.22Z"
      />
    </svg>
  )
}

export function SocialAuthButtons() {
  const providers = ['Google', 'GitHub', 'LinkedIn']

  return (
    <div className="auth-social-section">
      <div className="auth-social-buttons" aria-label="Social sign-in providers">
        {providers.map((provider) => (
          <button
            className="auth-secondary-button"
            type="button"
            disabled
            title={`${provider} sign-in is not configured`}
            key={provider}
          >
            <ProviderIcon provider={provider} />
            <span>Continue with {provider}</span>
          </button>
        ))}
      </div>
      <p className="auth-provider-note">
        Social sign-in is unavailable until provider authentication is configured.
      </p>
    </div>
  )
}
