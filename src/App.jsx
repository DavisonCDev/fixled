import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Categories from './components/Categories/Categories'
import FeaturedProducts from './components/FeaturedProducts/FeaturedProducts'
import Services from './components/Services/Services'
import Brands from './components/Brands/Brands'
import WhyChoose from './components/WhyChoose/WhyChoose'
import Projects from './components/Projects/Projects'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import { siteData } from './data/site'

function App() {
  return (
    <>
      <Header company={siteData.company} menu={siteData.menu} />
      <Hero hero={siteData.hero} company={siteData.company} />
      <Categories categories={siteData.categories} />
      <FeaturedProducts
        products={siteData.featuredProducts}
        company={siteData.company}
      />
      <Services services={siteData.services} />
      <Brands brands={siteData.brands} />
      <WhyChoose reasons={siteData.reasons} />
      <Projects
        projects={siteData.store}
        kicker="Conheça a loja"
        title="Galeria FixLed"
        text="Ferramentas, parafusos, abrasivos e acessórios para profissionais e revendedores."
        columns={3}
      />
      <Projects
        projects={siteData.projects}
        kicker="Linha completa"
        title="Portfólio de parafusos"
        text="Principais modelos de parafusos, fixadores e acessórios para seu projeto."
      />
      <Testimonials testimonials={siteData.testimonials} />
      <Contact contact={siteData.contact} company={siteData.company} />
      <Footer company={siteData.company} menu={siteData.menu} />
    </>
  )
}

export default App
