import {
  Clock3,
  ShieldCheck,
  Star,
  Wrench,
} from 'lucide-react'
import SectionIntro from '../SectionIntro/SectionIntro'
import './WhyChoose.css'

const iconMap = {
  clock: Clock3,
  shield: ShieldCheck,
  wrench: Wrench,
  star: Star,
}

function WhyChoose({ reasons }) {
  return (
    <section className="section" id="quem-somos">
      <div className="container">
        <SectionIntro
          kicker="Por que escolher a FixLed"
          title="Atendimento próximo, produtos certos e solução completa"
        />

        <div className="why-choose-grid">
          {reasons.map((reason) => {
            const Icon = iconMap[reason.icon]

            return (
              <article key={reason.title} className="why-choose-card">
                <div className="why-choose-card__icon">
                  <Icon size={20} />
                </div>

                <h3>{reason.title}</h3>
                <p>{reason.text}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default WhyChoose