import { BrowserRouter } from "react-router-dom";
import { Hero, Contact, Experience, Navbar, Skills, Projects, Technologies, About, Rain } from "./components";

const App = () => {
  return (
    <BrowserRouter>
        <div className="relative z-0 bg-below-hero">
          <div className="relative">
            <div className="background" />
            <Navbar className="z-20 relative" />
            <Hero className="z-20 relative" />
          </div>
          <div className="glass-bg">
            <About />
            <Technologies />
            <Skills />
            <Projects />
            <Experience />
            {/* Warstwa deszczu */}
            <Rain />
          </div>
          <div className="bg-forest">
            <Contact />
          </div>
        </div>
      </BrowserRouter>
  )
}

export default App
