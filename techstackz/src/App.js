import React from 'react'
import './App.css';
import Navbar from "./components/NewNavbar/Narbar";

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import TechComparison from "./pages/TechComparison";
import TechRecommendation from "./pages/TechRecommendation";
import TechSearch from "./pages/TechSearch";
import Home from './pages/Home.js'
import TechInformation from "./pages/TechInformation";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Router>
        {/* add the navbar to all pages */}
        <Navbar />
        <Routes>
          {/* config the path of all pages */}
          <Route path={'/'} exact element={<Home />} />
          <Route path={'/techComparison'} exact element={<TechComparison />} />
          <Route path={'/techRecommendation'} exact element={<TechRecommendation />} />
          <Route path={'/techSearch'} exact element={<TechSearch />} />
          <Route path={'/techInformation/:tagName'} element={<TechInformation />} />
        </Routes>
        {/* add the footer to all pages */}
        <Footer />
      </Router>
    </>
  );
}

export default App;
