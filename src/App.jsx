import { Footer, Home, Navbar, Pnf } from "./components"
import { BrowserRouter, Route, Routes } from "react-router-dom"
function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="*" element={<Pnf />} />
          </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
