import Navbar from "./components/Navbar";
import About from "./pages/About";
import Events from "./pages/Events";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";

function App() {
  return (
    <div className="w-screen h-screen bg-primary overflow-scroll main">
      <Navbar />
      <Home />
      <About />
      <Gallery/>
      <Events />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
