function MegaMenu({ menu, open }) {
  return (
    <div
      className="header-mega-menu"
      id={`${menu.id}-menu`}
      role="region"
      aria-label={`${menu.label} overview`}
      hidden={!open}
    >
      <ul className="mega-menu-list">
        {menu.items.map(({ title, description, Icon }) => (
          <li className="mega-menu-item" key={title}>
            <span className="mega-menu-icon" aria-hidden="true">
              <Icon size={22} strokeWidth={1.8} />
            </span>
            <span className="mega-menu-copy">
              <span className="mega-menu-title">{title}</span>
              <span className="mega-menu-description">{description}</span>
            </span>
          </li>
        ))}
      </ul>
      <p className="mega-menu-note">
        Illustrative categories only. Feature availability and destinations
        require confirmation.
      </p>
    </div>
  )
}

export default MegaMenu
