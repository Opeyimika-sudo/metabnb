import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Home from './pages/Home'
import Places from './pages/Places'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/places" element={<Places />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
