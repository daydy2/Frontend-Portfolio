import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Knowme from "./components/knowme";
import Services from "./components/services";
import Contactme from "./components/contactme";
import ReachOut from "./components/ReachOut";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Knowme />
      <Services />
      <Contactme />
      <ReachOut />
      <Footer />
    </div>
  );
}

export default App;
