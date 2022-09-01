import '../App.css'
import Card from '../components/Card/HomeCards'
import {Button} from "../components/Button/Button";
import React, {useEffect} from "react";
import "./css/PageSection.css"
import {Link} from "react-router-dom";

function Home() {
  useEffect(() => {
    window.scroll(0, 0)
  }, [])

  return (
    <>
      {/* add the container */}
      <div className={'section-container'}>
        {/* cove the page with video as the background */}
        <video src="/videos/Video-1.mp4" autoPlay={true} loop muted/>
        <h1>TECH FUTURE COMING</h1>
        <p>We light your way to success</p>
        {/* buttons */}
        <div className="section-btns">
          <Link to={'/techSearch'}>
            <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>GET STARTED</Button>
          </Link>
        </div>
      </div>
      <Card/>
    </>
  )
}

export default Home