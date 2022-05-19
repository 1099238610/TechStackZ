import React from 'react'
import ReactDOM from 'react-dom'
import './App.css';
import TechInput from './TechInput';
import Navbar from './components/Navbar/Navbar';
import Footer from './footer';

function App() {
  return (
    <>
    <Navbar />
    <div className="App">
      <TechInput/>
    </div>
    <Footer/>
    </>
  );
}

export default App;
