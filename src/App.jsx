import { Footer, Home, Navbar, Pnf } from "./components"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import sounds from './assets/allah.mp3';
import { useEffect } from "react";
function App() {
  function playAudio() {
    const audio = new Audio(sounds);
    audio ? audio.play() : audio.pause();
    audio.loop = true;
    audio.volume = 0.1;
  }
  useEffect(() => {playAudio()},[])
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
