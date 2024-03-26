import Home from "./Components/Home"
import Blog from "./Components/Blog"
import About from "./Components/About"
import Register from "./Components/Register"
import Login from "./Components/Login"
import Login1 from "./Components/Login1"
import Forgotpass from "./Components/Forgotpass"
import Resetpass from "./Components/Resetpass"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/login1" element={<Login1 />}/>
        <Route path="/home" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/forgotpass" element={<Forgotpass />} />
        <Route path="/resetpass/:token" element={<Resetpass />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
