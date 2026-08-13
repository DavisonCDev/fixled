import { useState } from 'react'
import SectionIntro from '../SectionIntro/SectionIntro'
import './Projects.css'

function Projects({
  projects,
  kicker = 'Linha completa',
  title = 'Portfólio de parafusos',
  text = '',
  columns = 4,
}) {
  const [lightbox, setLightbox] = useState(null)
  const hasHero = Boolean(projects[0]?.video)
  const hero = hasHero ? projects.slice(0, 2) : []
  const rest = hasHero ? projects.slice(2) : projects

  const renderCard = (project) => {
    const isCatalog = project.title === 'Catálogo de parafusos'

    return (
      <article
        key={project.title}
        className={`projects-card ${isCatalog ? 'projects-card--clickable' : ''}`}
      >
        <div className="projects-card__image">
          {project.video ? (
            <video
              src={project.video}
              autoPlay
              muted
              loop
              playsInline
              aria-label={project.title}
            />
          ) : (
            <img
              src={project.image}
              alt={project.title}
              onClick={
                isCatalog ? () => setLightbox(project.image) : undefined
              }
            />
          )}
        </div>
        <h3>{project.title}</h3>
      </article>
    )
  }

  return (
    <section className="section section--alt">
      <div className="container">
        <SectionIntro
          kicker={kicker}
          title={title}
          text={text}
        />

        {hasHero && (
          <div className="projects-hero-row">
            {hero.map(renderCard)}
          </div>
        )}

        <div className={`projects-grid projects-grid--${columns}`}>
          {rest.map(renderCard)}
        </div>
      </div>

      {lightbox && (
        <div
          className="projects-lightbox"
          onClick={() => setLightbox(null)}
          role="button"
          tabIndex={0}
          aria-label="Fechar galeria ampliada"
        >
          <button
            type="button"
            className="projects-lightbox__close"
            onClick={(e) => {
              e.stopPropagation()
              setLightbox(null)
            }}
          >
            ×
          </button>
          <img
            src={lightbox}
            alt="Catálogo ampliado"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  )
}

export default Projects
