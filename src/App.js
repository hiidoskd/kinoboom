import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar } from './components'
import Feed from './components/Feed/Feed'
import MoviePage from './components/MoviePage/MoviePage'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/movie/:id" element={<MoviePage />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
