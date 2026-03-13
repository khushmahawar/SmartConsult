import Hero from "./Hero";
import Navbar from "./navbar";
import Promise from "./PromiseSection";
import Solution from "./Solution";
import Contact from "./ConstactSection";

import Footer from "./Footer";
function App() {
  return (
    <>
      <section id="navbar">
        <Navbar />
      </section>
      <section id="hero">
      <Hero /></section>
      <section id="promise">
      <Promise /></section>
      <section id="solution">
      <Solution /></section>
      <section id="contact">
      <Contact /></section>
      <section id="footer">
      <Footer /></section>
    </>
  );
}

export default App;