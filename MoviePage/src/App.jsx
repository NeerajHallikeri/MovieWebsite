import MovieCard from './components/MovieCard'
import './css/App.css'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import Favorite from './pages/Favorite'
import { MovieProvider } from './contexts/MovieContext'

function App() {

  return (
    <MovieProvider>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='favorites' element={<Favorite />} />
        </Routes>
      </main>
    </MovieProvider>
  )
}

export default App
