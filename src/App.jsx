import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Certificates from "./components/Certificates";
import ContactForm from "./components/ContactForm";

function App() {
  return (
    <>
      <div className="flex flex-col items-center h-screen max-w-screen-lg p-2 m-1 mx-auto justify-evenly w-100">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/contactForm" element={<ContactForm />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
