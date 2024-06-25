import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import {BrowserRouter, Route, Routes} from "react-router-dom"

function App() {


  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
