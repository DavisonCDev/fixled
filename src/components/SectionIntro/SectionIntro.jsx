import './SectionIntro.css'

function SectionIntro({ kicker, title, text, center = false }) {
  return (
    <div className={`section-intro ${center ? 'section-intro--center' : ''}`}>
      <span className="section-intro__kicker">{kicker}</span>
      <h2 className="section-title">{title}</h2>
      {text && <p className="section-text">{text}</p>}
    </div>
  )
}

export default SectionIntro