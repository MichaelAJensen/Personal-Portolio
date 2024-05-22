import React from 'react';
import './App.css';
import 'animate.css';
import { Routes, Route } from "react-router-dom";
import Layout from "./Components/layout/Layout.jsx";
import Home from "./pages/home/Home.jsx";
import About from "./pages/about/About.jsx";



function App(){
  return (
    <>

        <Routes>
          <Route path="/" element={<Layout >{" "} <Home/>{" "}</Layout>} />
          <Route path="About" element={<Layout><About/></Layout>} />         
        </Routes>   
        
    
      </>
    
  );
}

export default App;
