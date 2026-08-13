import { Sparkles, Zap } from 'lucide-react'
import './Hero.css'

function Hero({ hero, company }) {
  return (
    <section className="hero section" id="inicio">
      <div className="container hero__content">
        <div className="hero__copy">
          <div className="hero__tag">
            <Sparkles size={16} />
            <span>{hero.tag}</span>
          </div>

          <h1>{hero.title}</h1>

          <p>{hero.description}</p>

          <div className="hero__categories">
            {hero.categories.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>

          <div className="hero__actions">
            <a
              href={company.whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              Solicitar orçamento
            </a>

            <a href="#servicos" className="btn-outline">
              Ver serviços
            </a>
          </div>
        </div>

        <div className="hero__visual glow-effect">
          <div className="hero__main-card">
            {hero.video && (
              <video
                className="hero__video"
                src={hero.video}
                autoPlay
                muted
                loop
                playsInline
                aria-label={hero.imageTitle}
              />
            )}
            <h3>{hero.imageTitle}</h3>
            <p>{hero.imageText}</p>
          </div>

          <div className="hero__floating-card">
            <Zap size={18} />
            <div>
              <strong>{hero.floatingTitle}</strong>
              <span>{hero.floatingText}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
