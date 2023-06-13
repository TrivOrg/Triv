import Home from './components/Home/Home'
import Contacts from './components/Contacts/contacts'
import About from './components/About/About'
import { BrowserRouter ,Route, Routes } from 'react-router-dom'

import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
  
}

export default App
