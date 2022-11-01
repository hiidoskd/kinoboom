import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar } from './components'
import Feed from './components/Feed/Feed'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Feed />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
