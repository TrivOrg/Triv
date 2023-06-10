import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Navbar from './components/Nav/Navbar'
import Contacts from './components/Contacts/contacts'


import './App.css'

function App() {
  return <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Contacts />
  </div>
  
}

export default App
