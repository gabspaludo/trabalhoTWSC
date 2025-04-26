import {Routes, Route} from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import StyledCompProfile from './pages/StyledCompProfile'
import TailwindProfile from './pages/TailwindProfile'

function App() {

  return (
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/tailwind" element={<TailwindProfile/>} />
      <Route path="/styled" element={<StyledCompProfile/>} />
    </Routes>
  )
}

export default App
