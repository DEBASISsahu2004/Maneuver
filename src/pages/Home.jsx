import Hero from '../components/hero/Hero'
import Navbar from '../components/navbar/Navbar'
import Service from '../components/service/Service'
import Value from '../components/value/Value'
// import Portfolio from '../components/portfolio/Portfolio'
import Faqs from '../components/faq/Faqs'
import Footer from '../components/footer/Footer'

const Home = () => {
  return (
    <>
      <Hero />
      <Navbar />
      <Service />
      <Value />
      {/* <Portfolio /> */}
      <Faqs />
      <Footer />
    </>
  )
}

export default Home