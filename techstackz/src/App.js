import React from 'react'
import ReactDOM from 'react-dom'
import './App.css';
import TechInput from './TechInput';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <>
    <Navbar />
    <div className="App">
      <TechInput/>
    </div>
    </>
  );
}

export default App;
