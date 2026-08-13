import './Footer.css'

function Footer({ company, menu }) {
  return (
    <footer className="site-footer">
      <div className="container site-footer__content">
        <div>
          <strong>{company.name}</strong>
          <p>Iluminação, materiais elétricos, parafusos e instalação.</p>
        </div>

        <div className="site-footer__links">
          {menu.map((item) => (
            <a key={item.label} href={item.href}>
              {item.label}
            </a>
          ))}
        </div>
      </div>

      <div className="container site-footer__credits">
        <small>Developed by OK Smart</small>
      </div>
    </footer>
  )
}

export default Footer