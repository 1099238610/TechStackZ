import '../App.css'
import Card from '../components/Card/HomeCards'
import {Button} from "../components/Button/Button";
import React from "react";
import "./css/PageSection.css"

function Home() {
  return (
    <>
      {/* add the container */}
      <div className={'section-container'} style={{height: 1250}}>
        {/* cove the page with video as the background */}
        <video src="/videos/Video-1.mp4" autoPlay={true} loop muted/>
        <h1>ADVENTURE AWAITS</h1>
        <p>What are you waiting for?</p>
        {/* buttons */}
        <div className="section-btns">
          <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>GET STARTED</Button>
          <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>WATCH TRAILER <i
            className={'far fa-play-circle'}/> </Button>
        </div>
      </div>
      <Card />
    </>
  )
}

export default Home