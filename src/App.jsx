import { BrowserRouter } from "react-router-dom";
import { About, Contact, Feedbacks, Experience, Hero, Navbar, Works, Footer } from './components';



const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-swBygg-lighter">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <div>
          <About />
        </div>
        {/* <Experience /> */}
        {/* <Feedbacks /> */}
        <div className="relative z-0">
          {/* <Contact /> */}

          {/* <Works /> */}
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
