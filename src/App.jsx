import React from 'react'
import Main from './components/main'
import './components/main.css'
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Asingin from './components/singin'
import './components/singin.css'
import Header from './components/header'
import './components/header.css'
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Asingin />} />
          <Route path="/header" element={<Header />} />
          <Route path="/Asingin" element={<Asingin/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App