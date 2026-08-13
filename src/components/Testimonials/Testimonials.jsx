import SectionIntro from '../SectionIntro/SectionIntro'
import './Testimonials.css'

function Testimonials({ testimonials }) {
  return (
    <section className="section">
      <div className="container">
        <SectionIntro
          kicker="Depoimentos"
          title="Quem compra e instala com a gente recomenda"
        />

        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <article key={testimonial.name} className="testimonials-card">
              <p>"{testimonial.text}"</p>
              <strong>{testimonial.name}</strong>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials