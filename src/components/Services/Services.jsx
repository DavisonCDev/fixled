import SectionIntro from '../SectionIntro/SectionIntro'
import './Services.css'

function Services({ services }) {
  return (
    <section className="section" id="servicos">
      <div className="container">
        <SectionIntro
          kicker="Serviços"
          title="Da escolha da peça até a instalação"
        />

        <div className="services-grid">
          {services.map((service) => (
            <article key={service.title} className="services-card">
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services