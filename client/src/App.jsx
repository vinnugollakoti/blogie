import Home from "./Components/Home"
import Blog from "./Components/Blog"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
