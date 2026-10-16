import './AuthHeader.css'

const brandAsset = `${import.meta.env.BASE_URL}hypertest-website-brand-assets/public/assets/brand/hypertest-symbol-dark.jpg`

function AuthHeader({ onRouteClick }) {
  return (
    <header className="auth-header">
      <a
        className="auth-header-brand"
        href="/"
        aria-label="HyperTest Inc. home"
        onClick={onRouteClick}
      >
        <img
          className="auth-header-symbol"
          src={brandAsset}
          width="257"
          height="280"
          alt=""
          fetchPriority="high"
        />
        <span className="auth-header-name">HyperTest Inc.</span>
        <span className="auth-header-tagline">TEST BEYOND LIMITS</span>
      </a>
    </header>
  )
}

export default AuthHeader
