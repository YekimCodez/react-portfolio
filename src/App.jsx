import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import './App.css'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </>
  )
}

export default App
