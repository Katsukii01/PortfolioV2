import { BrowserRouter } from "react-router-dom";
import { Hero, Contact, Experience, Navbar, Skills, Projects, Technologies, About } from "./components";

const App = () => {
  return (
    <BrowserRouter>
        <div className="relative z-0 ">
          <div className="relative">
            <div className="background" />
            <Navbar className="z-20 relative" />
            <Hero className="z-20 relative" />
            </div>
            <div className="bg-glass">
              <div className=" bg-below-hero">
                <About />
                <Technologies />
                <Skills />
                <Projects />
                <Experience />
              </div>
          </div>
          <div className="bg-contact">
            <Contact />
          </div>
        </div>
      </BrowserRouter>
  )
}

export default App
