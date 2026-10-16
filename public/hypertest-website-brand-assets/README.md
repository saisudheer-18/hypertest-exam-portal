# HyperTest website brand assets

These assets were cropped from the supplied HyperTest logo.

## Files
- `public/assets/brand/hypertest-logo-dark.jpg`: complete original logo on dark background; use on dark header/hero/footer.
- `public/assets/brand/hypertest-logo-transparent.png`: full logo with near-black background pixels made transparent; inspect on your chosen backgrounds before production.
- `public/assets/brand/hypertest-symbol-dark.jpg`: H/hexagon symbol on dark background.
- `public/assets/brand/hypertest-symbol-transparent.png`: symbol with near-black background pixels made transparent.
- `public/assets/brand/hypertest-wordmark-dark.jpg`: wordmark and tagline on dark background.
- `public/favicon.ico`, `public/favicon-16.png`, `public/favicon-32.png`, `public/favicon-48.png`: browser favicons.
- `public/apple-touch-icon.png`: Apple touch icon.
- `public/pwa-192.png`, `public/pwa-512.png`: PWA icons.
- `public/manifest.webmanifest`: PWA manifest.

## React/Vite usage
Place/copy the `public` folder contents into the `public` folder of your React + Vite project.

Use the full logo:
```jsx
<img
  src="/assets/brand/hypertest-logo-dark.jpg"
  alt="HyperTest — Test Beyond Limits"
  className="h-12 w-auto"
/>
```

For a light header, test `hypertest-logo-transparent.png` against the actual page background. Because the source artwork has a dark background and is a JPEG, the transparent version is an approximate background removal; the original dark-background asset is the most faithful.

## `index.html`
Add inside `<head>`:
```html
<link rel="icon" href="/favicon.ico" sizes="any">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
<link rel="manifest" href="/manifest.webmanifest">
<meta name="theme-color" content="#090c15">
```

## Brand colors sampled/estimated from the logo
- Deep navy: `#090C15`
- Cyan: `#08C8D6`
- Turquoise: `#22C8C7`
- Blue: `#1678D4`
- White: `#FFFFFF`

These are practical approximations; tune them against the source logo and accessible contrast.
