import InstagramIcon from '../icons/InstagramIcon'
import './Footer.css'

function Footer({ company, menu }) {
  return (
    <footer className="site-footer">
      <div className="container site-footer__content">
        <div>
          <strong>{company.name}</strong>
          <p>Parafusos, ferramentas, materiais elétricos e iluminação.</p>
        </div>

        <div className="site-footer__links">
          {menu.map((item) => (
            <a key={item.label} href={item.href}>
              {item.label}
            </a>
          ))}
          <a
            href={company.instagram}
            target="_blank"
            rel="noreferrer"
            className="site-footer__social"
          >
            <InstagramIcon size={16} />
            {company.instagramHandle}
          </a>
        </div>
      </div>

      <div className="container site-footer__credits">
        <small>Developed by OK Smart</small>
      </div>
    </footer>
  )
}

export default Footer