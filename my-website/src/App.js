import Navbar from './Navbar';
import Home from './pages/HomePage/HomePage'
import About from './pages/AboutPage/AboutPage'
import Projects from './pages/ProjectsPage/ProjectsPage'
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Navbar />
      <div className="contanier">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
