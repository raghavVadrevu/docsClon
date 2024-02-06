import { Route, Routes, Link } from 'react-router-dom'
import "./App.css"
import MenuPage from './pages/MenuPage'
import HeroPage from './pages/HeroPage'

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={ <MenuPage/> } />
      <Route path="/doc" element={ <HeroPage />} />
    </Routes>
    </>
  )
}

export default App
