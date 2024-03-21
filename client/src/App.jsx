import Home from "./Components/Home"
import Blog from "./Components/Blog"
import About from "./Components/About"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
