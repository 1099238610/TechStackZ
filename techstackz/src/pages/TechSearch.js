import React from "react";
import '../App.css'
import "./css/PageSection.css"
import SearchBar from '../components/SearchBar/SearchBar.js'
import Slider from "../components/Slider/Slider";
import ScrollToTop from "../components/ScrollToTop";

function TechSearch() {
  return (
    <>
    <ScrollToTop>
    </ScrollToTop>
      {/* add the container */}
      <div className={'section-container'} style={{height : 800}}>
        {/* config the image as the background */}
        <img id={"dark"} src={'images/tech_search.jpeg'} alt={"backgroundImage"}/>
        <h1>Desired stack , See it now</h1>
        {/* add the search bar */}
        <SearchBar />
      </div>
      {/* add the slider*/}
      <Slider />
    </>
  )
}

export default TechSearch