import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Feed from './components/Feed/Feed'
import Layout from './components/Layout/Layout'
import MoviePage from './components/MoviePage/MoviePage'
import MovieRoom from './components/MovieRoom/MovieRoom'
import Navbar from './components/Navbar/Navbar'

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/movie/:id" element={<MoviePage />} />
          <Route path="/room/:id" element={<MovieRoom />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
