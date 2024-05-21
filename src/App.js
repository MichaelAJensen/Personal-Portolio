import React from 'react';
import './App.css';
import 'animate.css';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import Layout from './Components/layout/Layout.jsx';


function App(){
  return (
    <>
    
        <Routes>
          <Route path="/" element={<Layout >{" "} <Home/>{" "}</Layout>} />
         
        </Routes>   
        
    
      </>
    
  );
}

export default App;
