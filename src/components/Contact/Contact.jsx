import { MapPin, Zap } from 'lucide-react'
import SectionIntro from '../SectionIntro/SectionIntro'
import './Contact.css'

function Contact({ contact, company }) {
  return (
    <section className="section section--alt" id="contato">
      <div className="container contact">
        <div className="contact__copy">
          <SectionIntro
            kicker="Contato"
            title={contact.title}
            text={contact.text}
          />

          <ul className="contact__list">
            <li>
              <MapPin size={18} />
              <span>{company.city}</span>
            </li>
            <li>
              <Zap size={18} />
              <span>WhatsApp: {company.whatsapp}</span>
            </li>
          </ul>

          <a
            href={company.whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
          >
            Falar no WhatsApp
          </a>
        </div>

        <div className="contact__map">
          <iframe
            src={`https://www.google.com/maps?q=${encodeURIComponent(
              contact.mapQuery || company.city
            )}&output=embed`}
            title="Mapa FixLed"
            loading="lazy"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  )
}

export default Contact