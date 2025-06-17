import Hero from '../components/hero/Hero'
import Navbar from '../components/navbar/Navbar'
import Service from '../components/service/Service'
import Value from '../components/value/Value'
import Portfolio from '../components/portfolio/Portfolio'
import Faqs from '../components/faq/Faqs'
import ContactUs from '../components/contact-us/ContactUs'
import Footer from '../components/footer/Footer'

const Home = () => {
  return (
    <>
      <Hero />
      <Navbar />
      <Service />
      <Value />
      <Portfolio />
      <Faqs />
      {/* <ContactUs /> */}
      {/* <Footer /> */}
    </>
  )
}

export default Home