import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar } from './components'
import Feed from './components/Feed/Feed'

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Feed />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
