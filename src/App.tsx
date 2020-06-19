import React from "react";
import Layout from "./components/Layout";
import Map from "./components/Map";
import Contact from "./components/Contact";
import About from "./components/About";

function App() {
  return (
    <Layout>
      <Map />
      <About />
      <Contact />
    </Layout>
  );
}

export default App;
