import Home from './components/Home/Home'
import Signup from './components/Signup/Signup'
import { BrowserRouter ,Route, Routes } from 'react-router-dom'

import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='signup' element={<Signup />} />
      </Routes>
    </BrowserRouter>
  )
  
}

export default App
