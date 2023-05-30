import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import  Login  from './components/login/login'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ButtonAppBar from './components/navbar/navbar'
import WeightGraph from './components/weightGraph/graph'

function App() {

  return (
    <Router>
      <div>
        <nav>
        <ButtonAppBar />
        </nav>

        {/* Passez à différentes pages */}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<WeightGraph />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
