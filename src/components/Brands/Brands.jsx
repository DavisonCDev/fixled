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
            <div key={brand} className="brands-chip">
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Brands