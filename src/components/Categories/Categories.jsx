import SectionIntro from '../SectionIntro/SectionIntro'
import './Categories.css'

function Categories({ categories }) {
  return (
    <section className="section" id="produtos">
      <div className="container">
        <SectionIntro
          kicker="Categorias"
          title="Tudo o que você precisa em um só lugar"
        />

        <div className="categories-grid">
          {categories.map((category) => (
            <article key={category.title} className="categories-card">
              <div className="categories-card__icon">{category.icon}</div>
              <h3>{category.title}</h3>
              <p>{category.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Categories
