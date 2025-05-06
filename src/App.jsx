import Login from "./components/Login"
import Navbar from "./components/navbar"
import HomePage from "./components/Home"
import Profile from "./components/profile"
import About from "./components/About"
import Services from "./components/services"
import Contact from "./components/contact"
import {BrowserRouter as Router,Route,Routes,Link} from "react-router-dom"
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/home" element={<HomePage/>} />
          <Route path="/" element={<Profile />} />
          <Route path = "/about" element={<About/>} />
          <Route path = "/services" element={<Services/>} />
          <Route path = "/contact" element={<Contact/>} />  
        </Routes>
      </Router>
    </>
  )
}

export default App