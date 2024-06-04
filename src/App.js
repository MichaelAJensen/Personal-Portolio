import React from 'react';
import './App.css';
import 'animate.css';
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout.jsx";
import Home from "./pages/home/Home.jsx";
import About from "./pages/about/About.jsx";
import Projects from "./pages/projects/Projects.jsx";
import Contact from "./pages/contact/Contact.jsx"


const App = (props) => {
  return (
    <>     
      <Routes>
        <Route path="/" element={<Layout >{" "} <Home />{" "}</Layout>} />
        <Route path="About" element={<Layout><About /></Layout>} />
        <Route path="Projects/*" element={<Layout><Projects /></Layout>} />  
        <Route path="Contact"  element={<Layout><Contact /></Layout>}/> 

      </Routes>
    </>
  );
}

export default App;

