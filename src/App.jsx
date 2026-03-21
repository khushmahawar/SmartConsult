import Hero from "./Hero";
import Navbar from "./navbar";
import Promise from "./PromiseSection";
import Solution from "./Solution";
import Contact from "./ConstactSection";
import Footer from "./Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Pricing from "./pricing";

function Home() {
  return (
    <>
      <section id="navbar"><Navbar /></section>
      <section id="hero"><Hero /></section>
      <section id="promise"><Promise /></section>
      <section id="solution"><Solution /></section>
      <section id="contact"><Contact /></section>
      <section id="footer"><Footer /></section>
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        {/* Home page */}
        <Route path="/" element={<Home />} />

        {/* Pricing page */}
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
    </Router>
  );
}

export default App;