import logo from '../../assets/logo.png'
import './Header.css'

function Header({ company, menu }) {
  return (
    <header className="site-header">
      <div className="container site-header__content">
        <a href="#inicio" className="site-header__brand">
          <img
            src={logo}
            alt={`Logo da ${company.name}`}
            className="site-header__logo"
          />
        </a>

        <nav className="site-header__nav">
          {menu.map((item) => (
            <a key={item.label} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={company.whatsappLink}
          target="_blank"
          rel="noreferrer"
          className="btn-primary site-header__button"
        >
          WhatsApp
        </a>
      </div>
    </header>
  )
}

export default Header
