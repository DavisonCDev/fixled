import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import SectionIntro from '../SectionIntro/SectionIntro'
import './Projects.css'

function Projects({
  projects,
  company,
  kicker = 'Linha completa',
  title = 'Portfólio de parafusos',
  text = '',
  columns = 4,
  showQuote = false,
}) {
  const [videoError, setVideoError] = useState(false)
  const featured = projects[0]?.video ? projects[0] : null
  const rest = featured ? projects.slice(1) : projects

  const quoteLink = (itemTitle) =>
    `https://wa.me/${company?.whatsappNumber}?text=${encodeURIComponent(
      `Olá! Quero solicitar um orçamento para: ${itemTitle} (FixLed).`
    )}`

  const renderCard = (project) => (
    <article key={project.title} className="projects-card">
      <div className="projects-card__image">
        {project.video ? (
          <video
            src={project.video}
            autoPlay
            muted
            loop
            playsInline
            aria-label={project.title}
            onError={() => setVideoError(true)}
          />
        ) : (
          <img src={project.image} alt={project.title} />
        )}
      </div>
      <h3>{project.title}</h3>
      {showQuote && company?.whatsappNumber && (
        <a
          href={quoteLink(project.title)}
          target="_blank"
          rel="noreferrer"
          className="projects-card__cta"
        >
          Solicitar orçamento
        </a>
      )}
    </article>
  )

  return (
    <section className="section section--alt">
      <div className="container">
        <SectionIntro kicker={kicker} title={title} text={text} />

        {featured && (
          <div className="projects-hero-row projects-hero-row--single">
            <article className="projects-card">
              <div className="projects-card__image projects-card__image--video">
                {videoError ? (
                  <div className="projects-card__video-placeholder">
                    <strong>{featured.title}</strong>
                    <span>Vídeo em breve</span>
                  </div>
                ) : (
                  <video
                    src={featured.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    aria-label={featured.title}
                    onError={() => setVideoError(true)}
                  />
                )}
              </div>
              <h3>{featured.title}</h3>
            </article>
          </div>
        )}

        {featured || showQuote ? (
          <Swiper
            className="projects-swiper"
            modules={[Autoplay, Navigation]}
            navigation
            autoplay={{ delay: 3200, pauseOnMouseEnter: true }}
            loop={rest.length > 4}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              720: { slidesPerView: 2 },
              1080: { slidesPerView: columns },
            }}
          >
            {rest.map((project) => (
              <SwiperSlide key={project.title}>{renderCard(project)}</SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className={`projects-grid projects-grid--${columns}`}>
            {rest.map(renderCard)}
          </div>
        )}
      </div>
    </section>
  )
}

export default Projects
