import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import InstagramIcon from '../icons/InstagramIcon'
import logo from '../../assets/logo.png'
import './Header.css'

function Header({ company, menu }) {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('inicio')

  useEffect(() => {
    const sections = menu
      .map((item) => document.getElementById(item.href.slice(1)))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-35% 0px -60% 0px' }
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [menu])

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

        <nav
          className={`site-header__nav ${open ? 'site-header__nav--open' : ''}`}
        >
          {menu.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={active === item.href.slice(1) ? 'active' : ''}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="site-header__actions">
          <a
            href={company.instagram}
            target="_blank"
            rel="noreferrer"
            className="site-header__icon"
            aria-label={`Instagram da ${company.name}`}
          >
            <InstagramIcon size={20} />
          </a>

          <a
            href={company.whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="btn-primary site-header__button"
          >
            WhatsApp
          </a>

          <button
            type="button"
            className="site-header__menu-toggle"
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={open}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
