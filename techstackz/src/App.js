import React from 'react'
import ReactDOM from 'react-dom'
import './App.css';
import TechInput from './TechInput';
import TechInfo from './TechInfo';
import Navbar from './components/Navbar/Navbar';
import Footer from './footer';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={
          <>
          <Navbar/>
          <TechInput/>
          <Footer/>
          </>
        }/>
        <Route path="/techinfo/:tagName" element={<TechInfo />}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
