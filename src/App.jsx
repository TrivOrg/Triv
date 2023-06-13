import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Navbar from './components/Nav/Navbar'
import Contacts from './components/Contacts/contacts'
import Home from './components/Home/Home'
import { BrowserRouter ,Route, Routes } from 'react-router-dom'

import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
        </Route>
      </Routes>
    </BrowserRouter>
  )
  
}

export default App
