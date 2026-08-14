import SectionIntro from '../SectionIntro/SectionIntro'
import './Brands.css'

function Brands({ brands }) {
  return (
    <section className="section section--alt">
      <div className="container">
        <SectionIntro
          kicker="Marcas"
          title="Trabalhamos com marcas reconhecidas"
        />

        <div className="brands-grid">
          {brands.map((brand) => (
            <div key={brand.name} className="brands-chip">
              <img src={brand.logo} alt={`Logo ${brand.name}`} />
              <span>{brand.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Brands