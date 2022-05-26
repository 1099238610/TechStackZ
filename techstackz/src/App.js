import React from 'react'
import ReactDOM from 'react-dom'
import './App.css';
import TechInput from './TechInput';
import TechInfo from './TechInfo';
import Navbar from './components/Navbar/Navbar';
import Footer from './footer';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const useLocalStorage = (storageKey, fallbackState) => {
  const [value, setValue] = React.useState(
    JSON.parse(localStorage.getItem(storageKey)) ?? fallbackState
  );

  React.useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(value));
  }, [value, storageKey]);

  return [value, setValue];
};

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
