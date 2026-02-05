import Navbar from './Components/Navbar.jsx';
import Home from './Pages/Home.jsx';
import About from './Pages/About.jsx';
import Skills from './Pages/Skills.jsx';
import Project from './Pages/Project.jsx';
import Contact from './Pages/Contact.jsx';

import Footer from './Pages/Footer.jsx';
// import ParticlesBackground from './Components/ParticlesBackground.jsx';
import CustomCursor from './Components/CustomCursor.jsx';

import './App.css'


function App() {
  

  return (
    <div className='relative gradient-bg text-white'>
      {/* <ParticlesBackground /> */}
      <CustomCursor />
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Project />
      <Contact />
   
      <Footer />
    </div>
  )
}

export default App
