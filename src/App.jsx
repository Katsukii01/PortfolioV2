import { BrowserRouter } from "react-router-dom";

import { Hero, Contact, Experience, Navbar, Skills, Projects, Technologies, About } from "./components";

const App = () => {
  return (
      <BrowserRouter>
        <div className="relative z-0 bg-dark">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />
            <Hero />
          </div>
        <About />
        <Technologies/>
        <Skills />
        <Projects/>
        <Experience />
        <Contact />
        </div>
      </BrowserRouter>
  )
}

export default App
