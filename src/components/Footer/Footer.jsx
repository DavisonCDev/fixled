import './Footer.css'

const foundingYear = 2026
const currentYear = new Date().getFullYear()
const siteYears =
  currentYear > foundingYear ? `${foundingYear} - ${currentYear}` : `${foundingYear}`

function Footer({ company, menu }) {
  return (
    <footer className="site-footer">
      <div className="container site-footer__content">
        <div>
          <strong>{company.name}</strong>
          <p>Parafusos, ferramentas, materiais elétricos e iluminação.</p>
          <p>CNPJ: {company.cnpj}</p>
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
        <small>© {siteYears} {company.name}</small>
        <small>Developed by OK Smart</small>
      </div>
    </footer>
  )
}

export default Footer