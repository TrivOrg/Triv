import Hero from '../Hero/Hero'
import About from '../About/About'
import Navbar from '../Nav/Navbar'
import Contacts from '../Contacts/contacts'

const Home = () => {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <Contacts />
    </div>
  )
}

export default Home;