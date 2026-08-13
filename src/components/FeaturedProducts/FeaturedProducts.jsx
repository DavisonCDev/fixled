import { ChevronRight } from 'lucide-react'
import SectionIntro from '../SectionIntro/SectionIntro'
import './FeaturedProducts.css'

function FeaturedProducts({ products, company }) {
  return (
    <section className="section section--alt">
      <div className="container">
        <SectionIntro
          kicker="Produtos em destaque"
          title="Seleção para quem quer praticidade e bom gosto"
        />

        <div className="featured-products-grid">
          {products.map((product) => (
            <article key={product.title} className="featured-products-card glow-effect">
              <span className="featured-products-card__badge">{product.badge}</span>

              <div className="featured-products-card__image">
                <span>Imagem provisória</span>
              </div>

              <h3>{product.title}</h3>
              <p>{product.text}</p>

              <a
                href={company.whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="featured-products-card__link"
              >
                Pedir esse produto <ChevronRight size={16} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedProducts